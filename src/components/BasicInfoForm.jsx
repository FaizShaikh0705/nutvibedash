import React from 'react';
import { Form } from 'react-bootstrap';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function BasicInfoForm({ formData, setFormData }) {
    return (
        <>
            <Form.Group>
                <Form.Label>Product Title</Form.Label>
                <Form.Control
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="Enter product title"
                />
            </Form.Group>

            <Form.Group className="mt-3">
                <Form.Label>Upload Product Image</Form.Label>
                <Form.Control
                    type="file"
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            media: e.target.files[0]
                        })
                    }
                />
            </Form.Group>

            <Form.Group className="mt-3">
                <Form.Label>Product Description</Form.Label>
                <CKEditor
                    editor={ClassicEditor}
                    data={formData.description}
                    onChange={(e, editor) => {
                        const data = editor.getData();
                        setFormData({ ...formData, description: data });
                    }}
                />
            </Form.Group>
        </>
    );
}

export default BasicInfoForm;
