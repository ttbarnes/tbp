import * as Radium from 'radium';

let styleActiveBg = {
  float: 'left',
  backgroundColor: '#bada55',
  padding: '0.5rem',
  marginRight: '0.5rem'
};

let stylesLink;

const Link = ({ active, children, onClick, styles }) => {

  if (styles) {
    // let stylesLink = {
    //   linkActive : styleActiveBg
    // }
    stylesLink = {
      link: styles.link
    };
    stylesLink.active = styleActiveBg;
  } else {
    stylesLink = {
      link: styles.link,
      active: styleActiveBg
    };
  }

  if (active) {
    return <span style={stylesLink.active}>{children}</span>;
  }

  return (
    <a href="#"
       onClick={e => {
         e.preventDefault();
         onClick();
       }}
       style={stylesLink.link}
    >
      {children}
    </a>
  );

};

export default (Radium(Link));
