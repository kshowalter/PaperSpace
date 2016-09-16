
export function initialize(){
  this.dispatch({
    type: 'INITIALIZE'
  });
}

export function step(n){
  this.dispatch({
    type: 'STEP',
    n: n
  });
}

export function selectPage(newPageName){
  this.dispatch({
    type: 'SELECT_PAGE',
    newPageName: newPageName
  });
}
