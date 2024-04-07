import "./notes-header.js";
import { noteForm } from "./notes-form.js";
import { notesData } from "./notes-data.js";
import "./notes-list.js";
import "./notes-footer.js";

document.addEventListener("DOMContentLoaded", function () {
  const mainElement = document.querySelector("main");
  const container = document.createElement("div");
  container.classList.add("container");

  mainElement.appendChild(container);

  container.appendChild(noteForm);

  const notesList = document.createElement("div");
  notesList.id = "notes-list";
  container.appendChild(notesList);

  function renderNotes() {
    notesList.innerHTML = "";
    notesData.forEach((note) => {
      const noteElement = document.createElement("note-item");

      noteElement.setAttribute("title", note.title);
      noteElement.setAttribute("body", note.body);
      noteElement.setAttribute("created-at", note.createdAt);
      noteElement.setAttribute("archived", note.archived);
      noteElement.setAttribute("id", note.id);
      notesList.appendChild(noteElement);
    });
  }

  renderNotes();

  const createNoteBtn = document.getElementById("createNoteBtn");
  const formContainer = document.querySelector(".form");

  formContainer.style.display = "none";

  createNoteBtn.addEventListener("click", () => {
    if (formContainer.style.display === "none") {
      formContainer.style.display = "block";
    } else {
      formContainer.style.display = "none";
    }

    document.getElementById("addNoteBtn").disabled = false;
    document.getElementById("noteTitle").value = "";
    document.getElementById("noteBody").value = "";
  });

  noteForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const title = this.querySelector("#noteTitle").value.trim();
    const body = this.querySelector("#noteBody").value.trim();
    if (title && body) {
      const newNote = {
        id: `notes-${Date.now()}`,
        title,
        body,
        createdAt: new Date().toLocaleString(),
        archived: false,
        deleted: false,
      };
      notesData.push(newNote);
      renderNotes();
      this.reset();
    } else {
      alert("Please enter both title and body of the note.");
    }
  });

  const titleInput = document.getElementById("noteTitle");
  const bodyInput = document.getElementById("noteBody");
  const addNoteBtn = document.getElementById("addNoteBtn");
  const titleError = document.getElementById("titleError");
  const bodyError = document.getElementById("bodyError");

  function validateTitle() {
    if (titleInput.value.trim() === "") {
      titleError.textContent = "Title is required";
      titleInput.classList.add("invalid");
      return false;
    } else {
      titleError.textContent = "";
      titleInput.classList.remove("invalid");
      return true;
    }
  }

  function validateBody() {
    if (bodyInput.value.trim() === "") {
      bodyError.textContent = "Body is required";
      bodyInput.classList.add("invalid");
      return false;
    } else {
      bodyError.textContent = "";
      bodyInput.classList.remove("invalid");
      return true;
    }
  }

  titleInput.addEventListener("input", validateTitle);
  bodyInput.addEventListener("input", validateBody);
  addNoteBtn.addEventListener("click", function (event) {
    const isTitleValid = validateTitle();
    const isBodyValid = validateBody();

    if (isTitleValid && isBodyValid) {
      alert("Note added successfully");
    } else {
      event.preventDefault();
    }
  });

  notesList.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-btn")) {
      const noteId = event.target.getAttribute("data-id");
      const index = notesData.findIndex((note) => note.id === noteId);
      if (index !== -1) {
        notesData.splice(index, 1);
        renderNotes();
      }
    }
  });
});
