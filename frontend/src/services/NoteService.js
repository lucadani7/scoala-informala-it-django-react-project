import axios from "axios";

export function getNotes() {
    return axios.get('http://127.0.0.1:8000/notes/').then(response => response.data);
}

export function getNoteId(noteId) {
    return axios.get('http://127.0.0.1:8000/notes/' + noteId + '/').then(response => response.data);
}

export function deleteNote(noteId) {
    return axios.delete('http://127.0.0.1:8000/notes/' + noteId + '/', {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(response => response.data);
}

export function addNote(note) {
    return axios.post('http://127.0.0.1:8000/notes/', {
        noteId: null,
        Username: note.Username.value,
        Email: note.Email.value,
        Password: note.Password.value,
        AddingData: note.AddingData.value,
        Text: note.Text.value
    }).then(response => response.data);
}

export function updateNote(noteId, note) {
    return axios.put('http://127.0.0.1:8000/notes/' + noteId + '/', {
        Username: note.Username.value,
        Email: note.Email.value,
        Password: note.Password.value,
        AddingData: note.AddingData.value,
        Text: note.Text.value
    }).then(response => response.data);
}

