export const STEP = 'STEP';
export const INITIALIZE = 'INITIALIZE';
export const SELECT_PAGE = 'SELECT_PAGE';

export function initialize(){
  return {
    type: INITIALIZE
  };
}

export function step(n){
  return {
    type: STEP,
    n: n
  };
}

export function selectPage(newPageName){
  return {
    type: SELECT_PAGE,
    newPageName: newPageName
  };
}
