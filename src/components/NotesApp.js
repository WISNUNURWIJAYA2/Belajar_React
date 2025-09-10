import React, { Component } from 'react';
import NotesList from './NotesList.js';
import NotesForm from './NotesForm.js';
import SearchBar from './SearchBar.js';

class NotesApp extends Component {
  constructor(props) {
    super(props);
    
    // Initial data
    const initialNotes = [
      {
        id: 1,
        title: "Babel",
        body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
        archived: false,
        createdAt: "2022-04-14T04:27:34.572Z"
      },
      {
        id: 2,
        title: "Functional Component",
        body: "Functional component merupakan React component yang dibuat menggunakan fungsi JavaScript. Agar fungsi JavaScript dapat disebut component ia harus mengembalikan React element dan dipanggil layaknya React component.",
        archived: false,
        createdAt: "2022-04-14T04:27:34.572Z"
      },
      {
        id: 3,
        title: "Modularization",
        body: "Dalam konteks pemrograman JavaScript, modularization merupakan teknik dalam memecah atau mengorganisasikan kode dalam berkas JavaScript yang terpisah berdasarkan tanggung jawabnya masing-masing.",
        archived: false,
        createdAt: "2022-04-14T04:27:34.572Z"
      },
      {
        id: 4,
        title: "Lifecycle",
        body: "Dalam konteks React component, lifecycle merupakan kumpulan method yang menjadi siklus hidup mulai dari component dibuat (constructor), dicetak (render), pasca-cetak (componentDidMount), dan sebagainya.",
        archived: false,
        createdAt: "2022-04-14T04:27:34.572Z"
      },
      {
        id: 5,
        title: "ESLint",
        body: "ESLint merupakan tools yang digunakan untuk menganalisis kode JavaScript guna menemukan masalah secara konsisten.",
        archived: false,
        createdAt: "2022-04-14T04:27:34.572Z"
      },
      {
        id: 6,
        title: "Webpack",
        body: "Webpack merupakan tools yang digunakan untuk membundle aplikasi JavaScript.",
        archived: true,
        createdAt: "2022-04-14T04:27:34.572Z"
      }
    ];

    this.state = {
      notes: initialNotes,
      searchQuery: ''
    };
  }

  // Add new note
  onAddNote = (noteData) => {
    const newNote = {
      id: Date.now().toString(),
      title: noteData.title.trim(),
      body: noteData.body.trim(),
      archived: false,
      createdAt: new Date().toISOString()
    };

    this.setState(prevState => ({
      notes: [newNote, ...prevState.notes]
    }));
  };

  // Delete note
  onDeleteNote = (id) => {
    this.setState(prevState => ({
      notes: prevState.notes.filter(note => note.id !== id)
    }));
  };

  // Toggle archive status
  onToggleArchive = (id) => {
    this.setState(prevState => ({
      notes: prevState.notes.map(note =>
        note.id === id ? { ...note, archived: !note.archived } : note
      )
    }));
  };

  // Handle search
  onSearch = (query) => {
    this.setState({ searchQuery: query });
  };

  render() {
    const { notes, searchQuery } = this.state;

    // Filter notes based on search query
    const filteredNotes = notes.filter(note =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const activeNotes = filteredNotes.filter(note => !note.archived);
    const archivedNotes = filteredNotes.filter(note => note.archived);

    return (
      <div className="notes-app">
        <div className="notes-app__header">
          <h1>Notes</h1>
          <SearchBar onSearch={this.onSearch} />
        </div>
        
        <div className="notes-app__body">
          <div className="notes-app__form">
            <NotesForm onAddNote={this.onAddNote} />
          </div>
          
          <div className="notes-app__content">
            <div className="notes-section">
              <h2>Catatan Aktif</h2>
              <NotesList 
                notes={activeNotes}
                onDelete={this.onDeleteNote}
                onToggleArchive={this.onToggleArchive}
                emptyMessage="Tidak ada catatan"
              />
            </div>
            
            <div className="notes-section">
              <h2>Arsip</h2>
              <NotesList 
                notes={archivedNotes}
                onDelete={this.onDeleteNote}
                onToggleArchive={this.onToggleArchive}
                emptyMessage="Tidak ada catatan"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NotesApp;