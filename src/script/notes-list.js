import "./notes-item.js";

class NotesList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `   
      <div class="noteList" id="notes-list"></div>
    `;
  }
}

customElements.define("notes-list", NotesList);
