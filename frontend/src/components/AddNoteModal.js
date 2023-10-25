import {addNote} from "../services/NoteService";
import {Button, Col, Form, Modal, Row} from "react-bootstrap";

const AddNoteModal = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        addNote(e.target)
            .then((result) => {
                    alert(result);
                    props.setUpdated(true);
                },
                (error) => {
                    alert("Failed to Add Student");
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
                        Fill In Note Information
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col sm={6}>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="Username">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" name="FirstName" required placeholder=""/>
                                </Form.Group>
                                <Form.Group controlId="Email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" name="Email" required placeholder=""/>
                                </Form.Group>
                                <Form.Group controlId="Password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="text" name="Password" required placeholder=""/>
                                </Form.Group>
                                <Form.Group controlId="Text">
                                    <Form.Label>Text</Form.Label>
                                    <Form.Control type="text" name="Texr" required placeholder=""/>
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

export default AddNoteModal;