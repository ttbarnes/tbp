const styles = {
  listRoot: {
    clear: 'both',
    display: 'flex',
    flexFlow: 'row wrap',
    listStyleType: 'none'
  },
  listItem: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#CCC',
    border: 'solid 1px #666',
    minWidth: '200px',
    maxWidth: '200px',
    minHeight: '110px',
    textAlign: 'center'
  },
  listItemLink: {
    display: 'block',
    color: '#000',
    padding: '1em',
    textDecoration: 'none'
  }
};

export default styles;
