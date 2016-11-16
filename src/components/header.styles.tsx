const tempPadding = '1rem';

export default {
  header: {
    display: 'flex',
    flexDireciton: 'row',
    marginBottom: '1rem',
    borderBottom: 'solid 2px #CCC'
  },
  title: {
    padding: tempPadding
  },
  nav: {
    display: 'flex',
    flexDireciton: 'row'
  },
  navItem: {
    padding: tempPadding,
    color: '#CCC',
    ':hover': {
      color: '#000'
    }
  }
};
