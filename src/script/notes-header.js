class NoteHeader extends HTMLElement {
  constructor() {
    super();
    const template = document.createElement("template");
    template.innerHTML = `
    <style>
      .header h1 {
        display: flex;
        align-items: center;
        font-size: 35px;
        font-weight: 600;
        padding-top: 2%;
        padding-left: 45%;
        color: #fff;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      }

      .header h1 img {
        width: 100px;
        margin-right: 10px;
      }

      @media only screen and (max-width: 768px) {
        .header h1 {
          padding-left: 5%; 
          text-align: center; 
        }
      
        .header h1 img {
          width: 50px; 
          margin-right: 5px; 
        }
      }
    </style>
    <div class="header">
      <h1><img src="src/images/notes.png" alt="notes-logo" />Notes</h1>
    </div>
      `;
    this.attachShadow({ mode: "open" }).appendChild(
      template.content.cloneNode(true)
    );
  }
}

customElements.define("note-header", NoteHeader);
