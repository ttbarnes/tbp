import DEFINITIONS from './definitions';

const {
  ARCHITECTURE,
  CI_CD,
  DATABASE,
  DOCUMENTATION,
  HEADLESS_CMS,
  HISTORICAL,
  MISCELLANEOUS,
  QUERYING,
  SECURITY,
  SERVER_SIDE,
  STATE_MANAGEMENT,
  STYLING,
  TESTING,
  TOOLS,
  TYPESCRIPT,
  UI,
  VANILLA_JS,
} = DEFINITIONS;

const {
  CI_CD: { ITEMS: { GHA } },
  DATABASE: { ITEMS: { SQL, MONGODB_MONGOOSE } },
  DATA_VISUALIZATION,
  HEADLESS_CMS: { ITEMS: { GATSBY } },
  QUERYING: { ITEMS: { GRAPHQL } },
  SERVER_SIDE: { ITEMS: { NODE_EXPRESS , SSR } },
  STATE_MANAGEMENT: { ITEMS: { APOLLO, REDUX } },
  TESTING: { ITEMS: { JEST, CYPRESS, REACT_TESTING_LIBRARY } },
  TOOLS: { ITEMS: { ESLINT, PRETTIER } },
  UI: { ITEMS: { REACT, NEXT_JS } }
} = DEFINITIONS;

export const TECHNICAL_SKILLS = {
  GROUPS: {
    CI_CD,
    DATABASE,
    DATA_VISUALIZATION,
    DOCUMENTATION,
    HEADLESS_CMS,
    MISCELLANEOUS,
    QUERYING,
    SECURITY,
    SERVER_SIDE,
    STATE_MANAGEMENT,
    STYLING,
    TESTING,
    TOOLS,
    UI,
    HISTORICAL
  },
  SUMMARY: [
    VANILLA_JS.TITLE,
    TYPESCRIPT,
    NODE_EXPRESS,
    ARCHITECTURE.TITLE,
    REACT,
    NEXT_JS,
    SQL,
    MONGODB_MONGOOSE,
    GRAPHQL,
    APOLLO,
    SSR,
    REDUX,
    JEST,
    CYPRESS,
    REACT_TESTING_LIBRARY,
    SECURITY.TITLE,
    SECURITY.ITEMS.AUTHENTICATION,
    SECURITY.ITEMS.OWASP,
    ESLINT,
    PRETTIER,
    GHA,
    GATSBY
  ]
};

export default TECHNICAL_SKILLS;
