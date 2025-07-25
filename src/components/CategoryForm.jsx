import React from 'react';
import Select from 'react-select';
import { Form } from 'react-bootstrap';

const categoryOptions = [
    { value: 'dryfruit', label: 'Dry Fruit' },
    { value: 'snacks', label: 'Snacks' }
];

function CategoryForm({ formData, setFormData }) {
    return (
        <Form.Group className="mt-3">
            <Form.Label>Category</Form.Label>
            <Select
                options={categoryOptions}
                onChange={(e) => setFormData({ ...formData, category: e.value })}
                defaultValue={categoryOptions.find(opt => opt.value === formData.category)}
            />
        </Form.Group>
    );
}
export default CategoryForm;
