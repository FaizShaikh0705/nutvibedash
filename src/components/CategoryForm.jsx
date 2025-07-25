import React from 'react';
import Select from 'react-select';
import { Form, Row, Col } from 'react-bootstrap';

const categoryOptions = [
    { value: 'dryfruit', label: 'Dry Fruit' },
    { value: 'snacks', label: 'Snacks' },
];

function CategoryForm({ formData, setFormData }) {
    const categoryInfo = formData.categoryInfo || {};

    return (
        <div className="mt-4">
            <Form.Label>Main Category</Form.Label>
            <Select
                options={categoryOptions}
                onChange={(e) =>
                    setFormData({
                        ...formData,
                        category: e.value,
                        categoryInfo: {
                            ...categoryInfo,
                            mainCategory: e.label,
                        }
                    })
                }
                defaultValue={categoryOptions.find(opt => opt.value === formData.category)}
            />

            <Row className="mt-3">
                <Col>
                    <Form.Label>Compare At Price (₹)</Form.Label>
                    <Form.Control
                        type="number"
                        value={categoryInfo.compareAtPrice || ''}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                categoryInfo: {
                                    ...categoryInfo,
                                    compareAtPrice: e.target.value
                                }
                            })
                        }
                    />
                </Col>
                <Col>
                    <Form.Label>Weight (in grams)</Form.Label>
                    <Form.Control
                        type="number"
                        value={categoryInfo.weight || ''}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                categoryInfo: {
                                    ...categoryInfo,
                                    weight: e.target.value
                                }
                            })
                        }
                    />
                </Col>
            </Row>
        </div>
    );
}

export default CategoryForm;
