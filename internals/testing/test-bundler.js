// If we need to use Chai, we'll have already chaiEnzyme loaded
import chai from 'chai'; // eslint-disable-line
import chaiEnzyme from 'chai-enzyme'; // eslint-disable-line
chai.use(chaiEnzyme());

// Include all .js files under `app`, except app.js, reducers.js, and routes.js.
// This is for code coverage
const context = require.context('../../app', true, /^^((?!(app|reducers|routes)).)*\.js$/);
context.keys().forEach(context);
