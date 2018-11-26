/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  SET_PROJECTS_FILTER_BY_INDUSTRY,
  SET_PROJECTS_FILTER_BY_TECH
} from './constants';

export function setProjectsFilterByIndustry(industry) {
  return {
    type: SET_PROJECTS_FILTER_BY_INDUSTRY,
    payload: industry
  };
}

export function setProjectsFilterByTech(tech) {
  return {
    type: SET_PROJECTS_FILTER_BY_TECH,
    payload: tech
  };
}
