const template = document.createElement("template");
template.innerHTML = `
  <div class="noteList">
    <h2></h2>
    <p></p>
    <p><strong>Created at:</strong> </p>
    <button class="delete-btn"><img src="src/images/delete.png" alt="" />Delete</button>
  </div>
`;

class NoteItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const style = document.createElement("style");
    style.textContent = `
    .notesList {
        margin-top: 20px;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); 
        grid-template-rows: auto;
        justify-items: center;
        gap: 20px; 
        margin: 30px; 
        width: 30%;
      }

      .notesList h2 {
        align-items: center;
        margin-top: 0;
        font-size: 18px; 
        color: #228b6f;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1); 
      }
      
      .noteList {
        background-color: #e2e2e2;
        border-radius: 5px;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1); 
        padding: 10px; 
        margin-bottom: 10px; 
        margin-left: 30%;
        margin-right: 30%;
      }
      
      .noteList h2 {
        margin-top: 0;
        font-size: 16px; 
        color: #228b6f;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1); 
      }
      
      .noteList p {
        margin-bottom: 5px; 
        color: black;
      }      
      
      .noteList button {
        display: flex;
        align-items: center;
        background: linear-gradient(#9418fd, #571094);
        color: #fff;
        font-size: 14px; 
        outline: 0;
        border: 0;
        border-radius: 20px; 
        padding: 10px 15px; 
        margin: 20px 0 10px; 
        cursor: pointer;
      }
      
      .noteList button img {
        width: 20px; 
        margin-right: 5px; 
      }
      
      .noteList button:hover {
        transform: scale(1.1);
      }

      @media only screen and (max-width: 768px) {
        .notesList {
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); 
      
        .noteList {
          margin-left: 5%; 
          margin-right: 5%; 
        }
      }
      
    `;
    this.shadowRoot.appendChild(style);

    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.shadowRoot.querySelector("h2").innerText = this.getAttribute("title");
    this.shadowRoot.querySelector("p:nth-of-type(1)").innerText =
      this.getAttribute("body");
    this.shadowRoot.querySelector(
      "p:nth-of-type(2)"
    ).innerText = `Created at: ${this.getAttribute("created-at")}`;
    this.shadowRoot
      .querySelector(".delete-btn")
      .addEventListener("click", () => this.deleteNote());
  }

  deleteNote() {
    const noteId = this.getAttribute("id");
    const event = new CustomEvent("note-deleted", { detail: noteId });
    this.dispatchEvent(event);
    this.remove();
  }
}

customElements.define("note-item", NoteItem);
