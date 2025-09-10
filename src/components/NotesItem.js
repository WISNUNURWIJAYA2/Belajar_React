import React from 'react';

function NotesItem({ note, onDelete, onToggleArchive }) {
  // Format date
  const formatDate = (dateString) => {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    return new Date(dateString).toLocaleDateString('id-ID', options);
  };

  return (
    <div className="notes-item">
      <div className="notes-item__content">
        <h3 className="notes-item__title">{note.title}</h3>
        <p className="notes-item__date">{formatDate(note.createdAt)}</p>
        <p className="notes-item__body">{note.body}</p>
      </div>
      
      <div className="notes-item__actions">
        <button
          className="btn btn-danger"
          onClick={() => onDelete(note.id)}
          title="Hapus"
        >
          Delete
        </button>
        <button
          className={`btn ${note.archived ? 'btn-success' : 'btn-warning'}`}
          onClick={() => onToggleArchive(note.id)}
          title={note.archived ? 'Pindahkan' : 'Arsipkan'}
        >
          {note.archived ? 'Pindahkan' : 'Arsipkan'}
        </button>
      </div>
    </div>
  );
}

export default NotesItem;