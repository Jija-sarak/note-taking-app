# Notes App 📒

A modern, user-friendly Notes App built with **HTML**, **CSS**, and **JavaScript**. The app allows users to create, edit, delete, and view notes, complete with timestamps for the last update. Notes are stored locally using `localStorage`, ensuring persistence even after closing the browser.

---

## Features ✨

- **Add Notes**: Quickly create new notes with a title and body.
- **Edit Notes**: Update the title and content of existing notes.
- **Delete Notes**: Remove unwanted notes with a single click.
- **Last Updated Timestamp**: See when a note was last modified.
- **Responsive Design**: Modern and clean UI, fully responsive on all devices.
- **Persistent Storage**: Uses `localStorage` to save notes locally.

---

## Project Structure 📂

```plaintext
notes-app/
├── css/
│   └── style.css      # Stylesheet for the Notes App
├── image/
│   └── notelogo.png   # App logo 
├── js/
│   ├── App.js         # Core logic of the app
│   ├── NotesAPI.js    # Handles localStorage operations
│   └── NotesView.js   # Manages the user interface
├── index.html         # Main HTML file
└── README.md          # Documentation for the project
```
---
## Installation 🚀
1. **Clone the repository:**
```bash
git clone https://github.com/yourusername/notes-app.git
```
2. **Navigate to the project directory:**
```bash
cd notes-app
```
3. **Open index.html in your favorite browser to start the app.**
---
## Usage 🛠️

1. **Add a Note**: Click the **Add Note** button to create a new note.
2. **Edit a Note**: Select a note from the sidebar and modify its title or body in the preview pane. Changes are automatically saved when you click away or lose focus.
3. **Delete a Note**: click the delete icon 🗑️.
4. **View Last Updated Time**: Check the "Last Updated" timestamp in the sidebar or the note preview to see the most recent modification time.

---

## Technologies Used 🛠️

- **HTML**: Provides the structure for the app's interface.
- **CSS**: Creates a modern, responsive, and visually appealing design.
- **JavaScript**: Implements dynamic functionality, including localStorage for data persistence.

---

## Future Enhancements 🔮

- Add a **Search Bar** to quickly find specific notes.
- Introduce **Tagging** to organize notes by categories.
- Implement **Cloud Synchronization** to access notes across devices.
- Include support for **Dark Mode** for better accessibility.

---
