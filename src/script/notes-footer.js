class NoteFooter extends HTMLElement {
  constructor() {
    super();
    const template = document.createElement("template");
    template.innerHTML = `
      <style>
        .footer h1 {
          font-size: 20px;
          text-align: center;
          color: black;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }
        @media only screen and (max-width: 768px) {
            .footer h1 {
              font-size: 12px; /* Adjust font size for mobile */
            }
      </style>
      <div class="footer">
        <h1><spank>MUHAMMAD ALAWI ALATAS || F1946YB340</spank></h1>
      </div>
        `;
    this.attachShadow({ mode: "open" }).appendChild(
      template.content.cloneNode(true)
    );
  }
}

customElements.define("note-footer", NoteFooter);
