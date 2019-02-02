console.log("This is edit.js file");
import { updateNote, removeNote, getNotes } from "./notes";
import { initializeEditPage, generateLastEdited } from "./views";


// Getting the ID the user is trying to edit

let titleField = document.getElementById("titleInput");
let bodyField = document.getElementById("bodyInput");
let spanField = document.getElementById("editInfo");
let noteID = location.hash.substring(1);
initializeEditPage(noteID);

titleField.addEventListener("input", function(event){
  let updatedNote = updateNote(noteID, {
    title : event.target.value,
  });

  spanField.innerHTML = generateLastEdited(updatedNote.updatedAt);
});

bodyField.addEventListener("input", function(event){
  let updatedNote = updateNote(noteID, {
    body : event.target.value,
  });
  spanField.innerHTML = generateLastEdited(updatedNote.updatedAt);
});

document.querySelectorAll(`a[href="/index.html"]`)[0].addEventListener("click", function(event){
  location.assign("/index.html");
});

document.querySelectorAll(`button[type="button"]`)[0].addEventListener("click", function(event){
  removeNote(noteID);
  location.assign("/index.html");
});

// Storage Event
window.addEventListener("storage", function(event){
  if(event.key === "notes"){
    initializeEditPage(noteID);
  }
});

console.log("This is edit.js file");













