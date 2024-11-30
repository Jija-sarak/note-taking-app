export default class NotesView {
  constructor(root, { onNoteSelect, onNoteAdd, onNoteEdit, onNoteDelete } = {}) {
      this.root = root;
      this.onNoteSelect = onNoteSelect;
      this.onNoteAdd = onNoteAdd;
      this.onNoteEdit = onNoteEdit;
      this.onNoteDelete = onNoteDelete;

      this.root.innerHTML = `
          <div class="notes-sidebar">
              <button>Add Note</button>
              <div class="notes-list"></div>
          </div>
          <div class="notes-preview">
              <div class="last-updated"></div>
              <input type="text" placeholder="Note Title">
              <textarea placeholder="Note Content"></textarea>
          </div>
      `;

      this.btnAddNote = this.root.querySelector("button");
      this.inpTitle = this.root.querySelector("input");
      this.inpBody = this.root.querySelector("textarea");
      this.lastUpdated = this.root.querySelector(".last-updated");

      this.btnAddNote.addEventListener("click", () => {
          this.onNoteAdd();
      });

      [this.inpTitle, this.inpBody].forEach(input => {
          input.addEventListener("blur", () => {
              this.onNoteEdit(this.inpTitle.value, this.inpBody.value);
          });
      });

      this.updateNotePreviewVisibility(false);
  }

  _createListItemHTML(id, title, body, updated) {
      return `
          <div class="notes-list-item" data-note-id="${id}">
              <div>
                  <strong>${title}</strong>
                  <p>${body.substring(0, 50)}...</p>
                  <div class="note-updated">
                      Last updated: ${new Date(updated).toLocaleString()}
                  </div>
              </div>
              <span class="delete-icon" data-note-id="${id}"><i class="fa fa-trash" aria-hidden="true"></i></span>
          </div>
      `;
  }

  updateNoteList(notes) {
      const notesList = this.root.querySelector(".notes-list");
      notesList.innerHTML = "";

      for (const note of notes) {
          const html = this._createListItemHTML(note.id, note.title, note.body, note.updated);
          notesList.insertAdjacentHTML("beforeend", html);
      }

      notesList.querySelectorAll(".notes-list-item").forEach(item => {
          item.addEventListener("click", () => {
              this.onNoteSelect(item.dataset.noteId);
          });
      });

      notesList.querySelectorAll(".delete-icon").forEach(icon => {
          icon.addEventListener("click", e => {
              e.stopPropagation();
              this.onNoteDelete(icon.dataset.noteId);
          });
      });
  }

  updateActiveNote(note) {
      this.inpTitle.value = note.title;
      this.inpBody.value = note.body;

      // Update last updated time
      this.lastUpdated.textContent = `Last updated: ${new Date(note.updated).toLocaleString()}`;

      this.root.querySelectorAll(".notes-list-item").forEach(item => {
          item.classList.remove("selected");
      });

      this.root.querySelector(`.notes-list-item[data-note-id="${note.id}"]`).classList.add("selected");
  }

  updateNotePreviewVisibility(visible) {
      this.root.querySelector(".notes-preview").style.visibility = visible ? "visible" : "hidden";
  }
}
