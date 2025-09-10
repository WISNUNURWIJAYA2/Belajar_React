import React, { Component } from 'react';

class NotesForm extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      title: '',
      body: ''
    };

    this.maxTitleLength = 50;
  }

  // Handle input change
  onInputChange = (event) => {
    const { name, value } = event.target;
    
    // Prevent title from exceeding max length using state
    if (name === 'title' && value.length > this.maxTitleLength) {
      return;
    }
    
    this.setState({
      [name]: value
    });
  };

  // Handle form submit
  onSubmitHandler = (event) => {
    event.preventDefault();
    
    const { title, body } = this.state;
    
    // Validation
    if (!title.trim() || !body.trim()) {
      alert('Judul dan isi catatan tidak boleh kosong!');
      return;
    }

    // Pass data to parent component
    this.props.onAddNote({
      title,
      body
    });

    // Reset form
    this.setState({
      title: '',
      body: ''
    });
  };

  render() {
    const { title, body } = this.state;
    const remainingChars = this.maxTitleLength - title.length;

    return (
      <div className="notes-form">
        <h2>Buat catatan</h2>
        <form onSubmit={this.onSubmitHandler}>
          <div className="form-group">
            <div className="form-group__header">
              <label htmlFor="title">Judul</label>
              <span className="char-limit">Sisa karakter: {remainingChars}</span>
            </div>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={this.onInputChange}
              placeholder="Ini adalah judul..."
              className="form-input"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="body">Catatan</label>
            <textarea
              id="body"
              name="body"
              value={body}
              onChange={this.onInputChange}
              placeholder="Tuliskan catatanmu di sini..."
              rows="6"
              className="form-textarea"
            />
          </div>
          
          <button type="submit" className="btn btn-primary">
            Buat
          </button>
        </form>
      </div>
    );
  }
}

export default NotesForm;