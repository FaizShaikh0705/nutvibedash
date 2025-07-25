import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

const CustomMetafieldsForm = ({ formData, setFormData }) => {
    const handleChange = (e) => {
        setFormData({
            ...formData,
            categoryInfo: {
                ...formData.categoryInfo,
                customMetafields: {
                    ...formData.categoryInfo.customMetafields,
                    [e.target.name]: e.target.value
                }
            }
        });
    };

    return (
        <div className="mt-3">
            <h5>Custom Metafields</h5>
            <Row>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>Origin</Form.Label>
                        <Form.Control
                            type="text"
                            name="origin"
                            value={formData.categoryInfo.customMetafields.origin || ''}
                            onChange={handleChange}
                            placeholder="e.g. Afghanistan"
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>Grade</Form.Label>
                        <Form.Control
                            type="text"
                            name="grade"
                            value={formData.categoryInfo.customMetafields.grade || ''}
                            onChange={handleChange}
                            placeholder="e.g. A++"
                        />
                    </Form.Group>
                </Col>
            </Row>
        </div>
    );
};

export default CustomMetafieldsForm;
