import DEFINITIONS from './definitions';

const {
  CI_CD,
  DATABASE,
  HEADLESS_CMS,
  QUERYING,
  // SECURITY
  SERVER_SIDE,
  STATE_MANAGEMENT,
  STATIC_TYPES,
  TESTING,
  TOOLS,
  UI
} = DEFINITIONS;

const {
  ARCHITECTURE,
  AUTHENTICATION,
  BUILD_TOOLS,
  CI_CD: { ITEMS: { GHA } },
  DATABASE: { ITEMS: { SQL, MONGODB_MONGOOSE } },
  DATA_VISUALIZATION,
  HEADLESS_CMS: { ITEMS: { GATSBY } },
  MISCELLANEOUS,
  QUERYING: { ITEMS: { GRAPHQL } },
  SECURITY,
  SERVER_SIDE: { ITEMS: { NODE_EXPRESS , SSR } },
  STATE_MANAGEMENT: { ITEMS: { APOLLO, REDUX } },
  STATIC_TYPES: { ITEMS: { TYPESCRIPT } },
  STYLING,
  TESTING: { ITEMS: { JEST, CYPRESS, REACT_TESTING_LIBRARY } },
  TOOLS: { ITEMS: { ESLINT, PRETTIER } },
  UI: { ITEMS: { REACT, NEXT_JS } },
  VANILLA_JS
} = DEFINITIONS;

// TODO: Open source?

export const TECHNICAL_SKILLS = {
  GROUPS: {
    // ARCHITECTURE
    // AUTHENTICATION
    BUILD_TOOLS,
    CI_CD,
    DATABASE,
    DATA_VISUALIZATION,
    HEADLESS_CMS,
    MISCELLANEOUS,
    QUERYING,
    // SECURITY
    SERVER_SIDE,
    STATE_MANAGEMENT,
    STATIC_TYPES,
    STYLING,
    TESTING,
    TOOLS,
    UI
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
    AUTHENTICATION.TITLE,
    ESLINT,
    PRETTIER,
    GHA,
    GATSBY
  ]
};

export default TECHNICAL_SKILLS;
