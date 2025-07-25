import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

function CustomMetafieldsForm({ formData, setFormData }) {
    const metafields = formData.categoryInfo?.customMetafields || {};

    const handleChange = (key, value) => {
        setFormData({
            ...formData,
            categoryInfo: {
                ...formData.categoryInfo,
                customMetafields: {
                    ...metafields,
                    [key]: value
                }
            }
        });
    };

    const addMetafield = () => {
        const newKey = `key${Object.keys(metafields).length + 1}`;
        setFormData({
            ...formData,
            categoryInfo: {
                ...formData.categoryInfo,
                customMetafields: {
                    ...metafields,
                    [newKey]: ''
                }
            }
        });
    };

    const removeMetafield = (keyToRemove) => {
        const updated = { ...metafields };
        delete updated[keyToRemove];

        setFormData({
            ...formData,
            categoryInfo: {
                ...formData.categoryInfo,
                customMetafields: updated
            }
        });
    };

    return (
        <div className="mt-4">
            <h5>Custom Metafields</h5>
            {Object.entries(metafields).map(([key, value], index) => (
                <Row key={index} className="mb-2">
                    <Col>
                        <Form.Control
                            placeholder="Key"
                            value={key}
                            disabled
                        />
                    </Col>
                    <Col>
                        <Form.Control
                            placeholder="Value"
                            value={value}
                            onChange={(e) => handleChange(key, e.target.value)}
                        />
                    </Col>
                    <Col xs="auto">
                        <Button variant="danger" onClick={() => removeMetafield(key)}>Remove</Button>
                    </Col>
                </Row>
            ))}
            <Button variant="outline-secondary" onClick={addMetafield}>+ Add Metafield</Button>
        </div>
    );
}

export default CustomMetafieldsForm;
