import uuidv4 from "uuid/v4";
import moment from "moment";

let notes = [];
const key = "notes";
notes = getSavedNotes();

function getSavedNotes(){
  // Getting all the notes stored in the localstorage
  let notesJSON = localStorage.getItem("notes");

  try{
    // using truthy & falsy value type coercion
    return notesJSON ? JSON.parse(notesJSON) : [];
  }catch(error){
    return [];
  }
}

function createNote(){
  let timeStamp = moment().valueOf();
  let obj = {
    title : "",
    body : "",
    noteID : uuidv4(),
    createdAt : timeStamp,
    updatedAt : timeStamp
  };
  notes.push(obj);
  saveNotes();
  return obj.noteID;
}

// Expose notes from this module
function getNotes(){
  notes = getSavedNotes();
  return notes;
}

function saveNotes(){
  localStorage.setItem(key, JSON.stringify(notes));
}

function removeNote(noteID){
  let thatNoteIndex = notes.findIndex(eachNote => eachNote.noteID === noteID);
  if(thatNoteIndex > -1){
    notes.splice(thatNoteIndex, 1);
    saveNotes();
  }
}

function sortNotes(sortBy){
  if(sortBy === "byEdited"){
    notes.sort(function(a, b){
      if(a.updatedAt > b.updatedAt){
        return -1;
      }else if(a.updatedAt < b.updatedAt){
        return 1;
      }else{
        return 0;
      }      
    });
  }else if(sortBy === "byCreated"){
    notes.sort(function(a, b){
      if(a.createdAt > b.createdAt){
        return -1;
      }else if(a.createdAt < b.createdAt){
        return 1;
      }else{
        return 0;
      }      
    });
  }else {

    notes.sort(function(a, b){
      if(a.title.toLowerCase() > b.title.toLowerCase()){
        return 1;
      }else if(a.title.toLowerCase() < b.title.toLowerCase()){
        return -1;
      }else{
        return 0;
      }      
    });

  }
}

function updateNote(noteID, updates){
  let note = notes.find(eachNote => eachNote.noteID === noteID);
  if(!note){
    return;
  }

  if(updates.hasOwnProperty("title") && typeof updates.title === "string"){
    note.title = updates.title;
    note.updatedAt = moment().valueOf();
  }

  if(updates.hasOwnProperty("body") && typeof updates.body === "string"){
    note.body = updates.body;
    note.updatedAt = moment().valueOf();
  }

  saveNotes();
  return note;
}


export { getNotes, createNote, saveNotes, removeNote, sortNotes, updateNote };
