console.log("This is index.js file");

import { createNote } from "./notes";
import { setFilters } from "./filters";
import { renderFilteredNotes } from "./views";

'use strict';


renderFilteredNotes();

document.querySelector("#searchInput").addEventListener("input", function(event){
  setFilters({
    searchFilter : event.target.value
  });
  renderFilteredNotes();
});


document.querySelector(`button[type="button"]`).addEventListener("click", function(event){
  let noteID = createNote();
  location.assign(`/edit.html?noteID#${noteID}`);
});


document.querySelector(`select[name="sortBy"]`).addEventListener("change", function(event){
  setFilters({
    sortBy : event.target.value
  });
  renderFilteredNotes();
});


// Storage Event
window.addEventListener("storage", function(event){
  if(event.key === "notes"){
    renderFilteredNotes();
  }
});
