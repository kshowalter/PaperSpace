import { combineReducers } from 'redux';
import moment from 'moment';
import _ from 'lodash';

import {
  ADD_NOTE,
  SELECT_TAG,
  UPDATE_SEARCH_STRING
} from './actions';

var tagMarkers = ['#','@'];

var addNote = function(state,action){
  var id = ++state.LastNoteId;

  var newNote = {
    id: id,
    text: action.text,
    words: action.text.split(' '),
    tags: [],
    status: 'active'
  };

  newNote.words.forEach(function(word){
    if( tagMarkers.indexOf(word[0])+1 ){
      newNote.tags.push(word);
      if( ! state.filter.tags[word] ){
        state.filter.tags = Object.assign({}, state.filter.tags, {
          [word]: {selected: false}
        });
      }
    }
  });

  var words = [...state.words];

  newNote.words.forEach(function(word){
    if( ! words[word] ){
      words[word] = [id];
    } else {
      words[word].push(id);
    }
  });




  var newState = {
    notes: [...state.notes, newNote],
    words: words
  };


  return newState;

};


var selectTag = function(state,action){
  var tags = Object.assign({},state);

  tags[action.tag].selected = ! tags[action.tag].selected;

  return tags;
};

var selectTag = function(state,action){
  var tags = [...state.tags];

  var tagIndex = tags.indexOf(action.tag);

  if( tagIndex+1 ){
    _.pullAt(tags, tagIndex);
  } else {
    tags.push(action.tag);
  }

  var searchParams = Object.assign({},state,{
    tags: tags,
    searchWords: state.textWords.concat( tags )
  });
  return searchParams;
};

var updateSearchString = function(state,action){
  var searchString = action.searchString;

  var searchParams = Object.assign({},state,{
    searchString: searchString,
    textWords: searchString.split(' '),
    searchWords: state.searchParams.tags.concat( searchString.split(' ') )
  });
  return searchParams;
};

var updateFilter = function(state,action){
  switch (action.type) {
  case SELECT_TAG:
    state.tags = Object.assign({}, state.tags);
    state.tags[action.tag].selected = ! state.tags[action.tag].selected;
    break;
  case UPDATE_SEARCH_STRING:
    state = Object.assign({}, state, {
      searchString: action.searchString
    });
    break;
  default:
  }

  var selectedTags = [];

  for(var tagName in state.tags ){
    if( state.tags[tagName].selected ){
      selectedTags.push(tagName);
    }
  }

  var searchWords = [].concat( selectedTags, state.searchString.split(' ') );

  searchWords = _.filter(searchWords, function(word){
    return word !== '';
  });

  state = Object.assign({}, state, {
    searchWords: searchWords,
    selectedTags: selectedTags
  });

  return state;
};


var updateDisplayedNotes = function(state,action){
  if( state.filter.searchWords.length ){
    var displayedNotes = [];
    state.notes.forEach(function(note,id){
      var matches = _.intersection( note.words, state.filter.searchWords );
      if( matches.length ){
        displayedNotes.push(id);
      }
    });
  } else {
    displayedNotes = _.keys(state.notes);
  }
  return displayedNotes;
};

//var initialize = function(state,action){
//  state = Object.assign({}, state, {
//    displayedNotes: updateDisplayedNotes(state, action)
//  });
//
//
//  return state;
//};

function reducer( state={}, action ){
  //console.log('Action: ', action);
  state = Object.assign({}, state, {
    count: state.count + 1,
    updateTime: moment().format('YYYY-MM-DD HH:mm:ss')
  });

  if( ! action ){
    return state;
  }

  switch(action.type){
  case ADD_NOTE:
    state = Object.assign({}, state, addNote(state, action) );
    break;
  case SELECT_TAG:
  case UPDATE_SEARCH_STRING:
    state = Object.assign({}, state, {
      filter: updateFilter(state.filter, action)
    });
    break;
  }

  state = Object.assign({}, state, {
    displayedNotes: updateDisplayedNotes(state, action)
  });


  return state;


}

export default reducer;
