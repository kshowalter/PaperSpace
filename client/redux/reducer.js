import * as actions from './actions';


function reducer( state={}, action ){

  if( action.type === actions.INITIALIZE ){
    var pageName = state.pageName || state.pageNames[0].title;
    state = Object.assign({}, state, {
      pageName: pageName
    });

  }

  if( action.type === actions.STEP ){
    var n = action.n || 1;
    state = Object.assign({}, state, {
      count: state.count + n
    });

  }

  if( action.type === actions.SELECT_PAGE ){
    state = Object.assign({}, state, {
      pageName: action.newPageName
    });

  }


  return state;
}

export default reducer;
