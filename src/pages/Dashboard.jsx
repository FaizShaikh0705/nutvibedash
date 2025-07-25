import React, { useState, useEffect } from 'react';
import { getAllProducts, createProduct } from '../services/api';
import { Container, Button } from 'react-bootstrap';
import BasicInfoForm from '../components/BasicInfoForm';
import CategoryForm from '../components/CategoryForm';
import VariantForm from '../components/VariantForm';
import ProductTable from '../components/ProductTable';
import CustomMetafieldsForm from '../components/CustomMetafieldsForm';


function Dashboard() {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: '',
        categoryInfo: {
            mainCategory: '',
            predefinedMetafields: {},
            customMetafields: {},
            individualImage: '',
            compareAtPrice: '',
            weight: ''
        }
    });
    const [variants, setVariants] = useState([]);
    const [products, setProducts] = useState([]);

    const handleSubmit = async () => {
        const payload = { ...formData, variants };
        await createProduct(payload, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        fetchProducts();
    };

    const fetchProducts = async () => {
        const res = await getAllProducts();
        setProducts(res.data);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <Container className="p-4">
            <h3>Product Management</h3>
            <BasicInfoForm formData={formData} setFormData={setFormData} />
            <CategoryForm formData={formData} setFormData={setFormData} />
            <CustomMetafieldsForm formData={formData} setFormData={setFormData} />
            <VariantForm variants={variants} setVariants={setVariants} />
            <Button className="mt-4" onClick={handleSubmit}>Save Product</Button>
            <ProductTable products={products} />
        </Container>
    );
}
export default Dashboard;
