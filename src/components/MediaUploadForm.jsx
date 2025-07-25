import React from 'react';
import { Form } from 'react-bootstrap';

function MediaUploadForm({ formData, setFormData }) {
    const handleMediaChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData({ ...formData, media: file });
        }
    };

    return (
        <Form.Group className="mt-3">
            <Form.Label>Upload Product Image</Form.Label>
            <Form.Control
                type="file"
                accept="image/*"
                onChange={handleMediaChange}
            />
            {formData.media && (
                <p className="mt-2 text-success">Selected: {formData.media.name}</p>
            )}
        </Form.Group>
    );
}

export default MediaUploadForm;
