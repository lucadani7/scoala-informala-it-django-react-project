import {useEffect, useState} from "react";
import {getNotes} from "../services/NoteService";
import {Table} from "react-bootstrap";

const Notes = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        let mounted = true;
        getNotes()
            .then(data => {
                if (mounted) {
                    setNotes(data)
                }
            });
        return () => mounted = false;
    }, []);

    return (
        <div className="container-fluid side-container">
            <div className="row side-row">
                <p id="before-table"></p>
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
                        </tr>)}
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default Notes;