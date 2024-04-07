const noteForm = document.createElement("form");
noteForm.id = "form-note";
noteForm.innerHTML = `
<style>
.container {
    width: 100%;
    padding: 2% 5%;
    color: #fff;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }

  .container button {
    display: flex;
    align-items: center;
    background: linear-gradient(#9418fd, #571094);
    color: #fff;
    font-size: 16px;
    outline: 0;
    border: 0;
    border-radius: 40px;
    padding: 15px 20px;
    margin: 30px 0 20px;
    cursor: pointer;
  }

  .container button img {
    width: 25px;
    margin-right: 8px;
  }

  .container button:hover {
    transform: scale(1.03);
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  }

  .form-container {
    padding-left: 10%;
  }

  .input-container {
    margin-bottom: 20px;
  }

  .input-container label {
    font-size: 18px;
    font-weight: 500;
    display: block;
    margin-bottom: 5px;
  }

  .input-container input[type="text"],
  .input-container textarea {
    width: 80%;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 16px;
    outline-color: #571094;
  }

  .input-container textarea {
    resize: vertical;
  }

  @media only screen and (max-width: 768px) {
    .container {
      padding: 5% 8%; 
    }
  
    .form-container {
      padding-left: 5%; 
    }
  }
</style>
<div class="container">
  <div class="form-container">
    <button id="createNoteBtn" type="">
      <img src="src/images/edit.png" alt="logo-create" />Create Notes
    </button>
    <div class="form">
      <form id="noteForm">
        <div class="input-container">
          <label for="noteTitle">Title</label>
          <input
            type="text"
            id="noteTitle"
            placeholder="Masukan judul catatan"
            required
            aria-describedby="titleError"
          />
          <div id="titleError" class="error-message"></div>
        </div>
        <div class="input-container">
          <label for="noteBody">Body</label>
          <textarea
            id="noteBody"
            rows="4"
            placeholder="Masukan isi catatan"
            required
            aria-describedby="bodyError"
          ></textarea>
          <div id="bodyError" class="error-message"></div>
        </div>
        <button id="addNoteBtn" type="submit">Add Note</button>
      </form>
    </div>
  </div>
</div>

`;

export { noteForm };
