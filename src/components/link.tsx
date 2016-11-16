const activeStyle = {
  backgroundColor: '#bada55'
};

const Link = ({ active, children, onClick }) => {
  if (active) {
    return <span style={activeStyle}>{children}</span>;
  }

  return (
    <a href="#"
       onClick={e => {
         e.preventDefault();
         onClick();
       }}
    >
      {children}
    </a>
  );
};

export default Link;
