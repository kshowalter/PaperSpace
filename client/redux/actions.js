export const TEST = 'TEST';
export const ADD_NOTE = 'ADD_NOTE';
export const SELECT_TAG = 'SELECT_TAG';
export const UPDATE_SEARCH_STRING = 'UPDATE_SEARCH_STRING';
export const INITIALIZE = 'INITIALIZE';


export function addNote(text,parentID){
  return {
    type: ADD_NOTE,
    text: text,
    parentID: parentID
  };
}

export function test(input){
  return {
    type: TEST,
    input: input
  };
}

export function selectTag(tag){
  return {
    type: SELECT_TAG,
    tag: tag
  };
}
export function updateSearchString(searchString){
  return {
    type: UPDATE_SEARCH_STRING,
    searchString: searchString
  };
}
export function initialize(){
  return {
    type: INITIALIZE
  };
}
