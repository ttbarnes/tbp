// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from './utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // create reusable async injectors using getAsyncInjectors factory
  const { injectReducer } = getAsyncInjectors(store);

  return [
    {
      path: '/',
      name: 'home',
      getComponent(nextState, cb) {
        System.import('containers/HomePage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '/projects',
      name: 'projects',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/ProjectsPage/reducer'),
          System.import('containers/ProjectsPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, component]) => {
          injectReducer('projects', reducer.default);

          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/about',
      name: 'about',
      getComponent(nextState, cb) {
        System.import('containers/AboutPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '/dev/project/:id',
      name: 'devProject',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/ProjectsPage/reducer'),
          System.import('containers/DevProjectPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, component]) => {
          injectReducer('dev', reducer.default);

          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/hobbies',
      name: 'hobbies',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/HobbiesPage/reducer'),
          System.import('containers/HobbiesPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, component]) => {
          injectReducer('hobbies', reducer.default);

          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/contact',
      name: 'contact',
      getComponent(nextState, cb) {
        System.import('containers/ContactPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        System.import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
