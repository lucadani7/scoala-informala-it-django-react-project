import {useEffect, useState} from 'react';
import {deleteNote, getNotes} from '../services/NoteService';
import {Button, ButtonToolbar, Table} from "react-bootstrap";
import AddNoteModal from "./AddNoteModal";
import UpdateNoteModal from "./UpdateNoteModal";

function RiDeleteBin5Line() {
    return null;
}

function FaEdit() {
    return null;
}

const Manage = () => {
    const [notes, setNotes] = useState([]);
    const [addModalShow, setAddModalShow] = useState(false);
    const [editModalShow, setEditModalShow] = useState(false);
    const [editNote, setEditNote] = useState([]);
    const [isUpdated, setIsUpdated] = useState(false);

    useEffect(() => {
        let mounted = true;
        if (notes.length && !isUpdated) {
            return;
        }
        getNotes()
            .then(data => {
                if (mounted) {
                    setNotes(data);
                }
            });
        return () => {
            mounted = false;
            setIsUpdated(false);
        }
    }, [isUpdated, notes.length]);

    const handleUpdate = (e, not) => {
        e.preventDefault();
        setEditModalShow(true);
        setEditNote(not);
    };

    const handleAdd = (e) => {
        e.preventDefault();
        setAddModalShow(true);
    };

    const handleDelete = (e, noteId) => {
        if (window.confirm('Are you sure ?')) {
            e.preventDefault();
            deleteNote(noteId)
                .then((result) => {
                        alert(result);
                        setIsUpdated(true);
                    },
                    (error) => {
                        alert("Failed to Delete Student");
                    })
        }
    };

    let AddModelClose = () => setAddModalShow(false);
    let EditModelClose = () => setEditModalShow(false);
    return (
        <div className="container-fluid side-container">
            <div className="row side-row">
                <p id="manage"></p>
                <Table striped bordered hover className="react-bootstrap-table" id="dataTable">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Text</th>
                    </tr>
                    </thead>
                    <tbody>
                    {notes.map((not) =>

                        <tr key={not.id}>
                            <td>{not.noteId}</td>
                            <td>{not.Username}</td>
                            <td>{not.Email}</td>
                            <td>{not.Password}</td>
                            <td>{not.Text}</td>
                            <td>

                                <Button className="mr-2" variant="danger"
                                        onClick={event => handleDelete(event, not.noteId)}>
                                    <RiDeleteBin5Line/>
                                </Button>
                                <span>&nbsp;&nbsp;&nbsp;</span>
                                <Button className="mr-2"
                                        onClick={event => handleUpdate(event, not)}>
                                    <FaEdit/>
                                </Button>
                                <UpdateNoteModal show={editModalShow} student={editNote} setUpdated={setIsUpdated}
                                                    onHide={EditModelClose}></UpdateNoteModal>
                            </td>
                        </tr>)}
                    </tbody>
                </Table>
                <ButtonToolbar>
                    <Button variant="primary" onClick={handleAdd}>
                        Add Student
                    </Button>
                    <AddNoteModal show={addModalShow} setUpdated={setIsUpdated}
                                     onHide={AddModelClose}></AddNoteModal>
                </ButtonToolbar>
            </div>
        </div>
    );
};

export default Manage;