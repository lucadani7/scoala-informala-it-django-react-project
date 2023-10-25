import {updateNote} from "../services/NoteService";
import {Button, Col, Form, Modal, Row} from "react-bootstrap";

const UpdateNoteModal = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        updateNote(props.note.noteId, e.target)
            .then((result) => {
                    alert(result);
                    props.setUpdated(true);
                },
                (error) => {
                    alert("Failed to Update Note");
                })
    };

    return (
        <div className="container">

            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>

                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Update Note Information
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col sm={6}>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="Username">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" name="Username" required
                                                  defaultValue={props.note.Username} placeholder=""/>
                                </Form.Group>

                                <Form.Group controlId="Email">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="email" name="Email" required
                                                  defaultValue={props.note.Email} placeholder=""/>
                                </Form.Group>
                                <Form.Group controlId="Password">
                                    <Form.Label>Registration No.</Form.Label>
                                    <Form.Control type="text" name="Password" required
                                                  defaultValue={props.note.Password} placeholder=""/>
                                </Form.Group>
                                <Form.Group controlId="Text">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="text" name="Text" required defaultValue={props.student.Email}
                                                  placeholder=""/>
                                </Form.Group>
                                <Form.Group>
                                    <p></p>
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" type="submit" onClick={props.onHide}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </div>
    );
};


export default UpdateNoteModal;