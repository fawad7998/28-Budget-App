import React from 'react';
import { Modal, Form } from "bootstrap";

export default function AddBudgetModal({ show, handleClose }) {
    return (
        <Modal show={show} onHide={handleClose}>
            <Form onSubmit={handleSumit}>
                <Modal.Header closeButton>
                    <Modal.Title>New Budget</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Max Value</Form.Label>
                        <Form.Control type="numbber" required />
                    </Form.Group>
                </Modal.Body>
            </Form>
        </Modal>
    );
}
