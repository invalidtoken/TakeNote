import moment from "moment";
import { getNotes, sortNotes } from "./notes";
import { getFilters } from "./filters";

function generateLastEdited(timeStamp){
  return moment(timeStamp).fromNow();
}


function renderFilteredNotes(){
  const filter = getFilters();
  const notes = getNotes();
  allNotesList.innerHTML = "";
  sortNotes(filter.sortBy);

  // filtering the notes using arrow function shorthand syntax
  
  let filteredNotes = notes.filter(note => note.title.toLowerCase().includes(filter.searchFilter.toLowerCase()));

  if(filteredNotes.length > 0){
    
    console.log("Filtered Notes :",filteredNotes);
    filteredNotes.forEach(function(eachNote){
      let div = generateNote(eachNote);
      allNotesList.appendChild(div);
    });

  }else{
    let emptyMessage = document.createElement("p");
    emptyMessage.textContent = "No notes to show";
    emptyMessage.classList.add("empty-message");
    allNotesList.appendChild(emptyMessage);
  }

  
}

// Generate the DOM structure
function generateNote(note){
  let noteEl = document.createElement("a");
  let textEl = document.createElement("p");
  let statusEl = document.createElement("p");

  
  if(note.title.length > 0){
    textEl.textContent = note.title;
  }else{
    textEl.textContent = "Unnamed-note";
  }
  textEl.classList.add("list-item__title");
  noteEl.appendChild(textEl);
  
  // setup the link
  noteEl.href = `/edit.html#${note.noteID}`;
  noteEl.classList.add("list-item")
  // setup the status message
  statusEl.textContent = moment(note.updatedAt).fromNow()
  statusEl.classList.add("list-item__subtitle");
  noteEl.appendChild(statusEl);

  return noteEl;
}

function initializeEditPage(noteID){

  let titleField = document.getElementById("titleInput");
  let bodyField = document.getElementById("bodyInput");
  let lastEditedFeild = document.getElementById("editInfo");

  let allNotes = getNotes();
  let thatNoteIndex = allNotes.findIndex(function(eachNote){
    return eachNote.noteID === noteID;
  });

  if(thatNoteIndex === -1){
    location.assign("/index.html");
  }

  let thatNote = allNotes[thatNoteIndex];
  titleField.value = thatNote.title;
  bodyField.value = thatNote.body;
  lastEditedFeild.innerHTML = generateLastEdited(thatNote.updatedAt);
}

export { generatenote, renderFilteredNotes, generateLastEdited, initializeEditPage }