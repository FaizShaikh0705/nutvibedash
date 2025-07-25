import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

function VariantForm({ variants, setVariants }) {
    const updateVariant = (index, field, value) => {
        const updated = [...variants];
        updated[index][field] = value;
        setVariants(updated);
    };

    const addVariant = () => {
        setVariants([...variants, { size: '', price: '', quantity: '' }]);
    };

    return (
        <div className="mt-4">
            <h5>Variants</h5>
            {variants.map((v, i) => (
                <Row key={i} className="mb-3">
                    <Col><Form.Control placeholder="Size" value={v.size} onChange={e => updateVariant(i, 'size', e.target.value)} /></Col>
                    <Col><Form.Control placeholder="Price" value={v.price} onChange={e => updateVariant(i, 'price', e.target.value)} /></Col>
                    <Col><Form.Control placeholder="Quantity" value={v.quantity} onChange={e => updateVariant(i, 'quantity', e.target.value)} /></Col>
                </Row>
            ))}
            <Button variant="outline-secondary" onClick={addVariant}>+ Add Variant</Button>
        </div>
    );
}
export default VariantForm;
