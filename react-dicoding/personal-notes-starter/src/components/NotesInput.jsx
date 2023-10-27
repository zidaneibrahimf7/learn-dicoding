import React from 'react'

class NotesInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      createdAt: '',
      body: '',
      remainingCharacters: 50,
    }

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this)
    this.onBodyEventHandler = this.onBodyEventHandler.bind(this)
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this)
  }

  onTitleChangeEventHandler(event) {
  // memeriksa apakah judul tidak lebih dari 50 kata
  const newTitle = event.target.value;

  const remainingCharacters = 50 - newTitle.length;

    this.setState(() => {
      return {
        title: newTitle,
        remainingCharacters, 
      }
    });
  }

  onBodyEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      }
    })
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    // this.props.addNotes(this.state)

    if(this.state.title.length <= 50) {
      this.props.addNotes(this.state);
    } else {
      alert('Judul tidak boleh lebih dari 50 kata')
    }
  }



  render() {
    return (
      <form className='note-input' onSubmit={this.onSubmitEventHandler}>
      {/* Menampilkan jumlah karakter yang tersisa */}
        <p className="note-input__title__char-limit">{this.state.remainingCharacters}</p>
        <input type="text" className='note-input__title' placeholder="tulis judul disini..." value={this.state.title} onChange={this.onTitleChangeEventHandler} />
        <input type="text" className='note-input__body' placeholder="tulis text disini..." value={this.state.body} onChange={this.onBodyEventHandler} />
        <button type="submit" >Tambah</button>
      </form>
    )
  }
}

export default NotesInput