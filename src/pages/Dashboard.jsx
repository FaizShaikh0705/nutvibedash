import React, { useState, useEffect } from 'react';
import { getAllProducts, createProduct } from '../services/api';
import { Container, Button } from 'react-bootstrap';

import BasicInfoForm from '../components/BasicInfoForm';
import MediaUploadForm from '../components/MediaUploadForm';
import CategoryForm from '../components/CategoryForm';
import CustomMetafieldsForm from '../components/CustomMetafieldsForm';
import VariantForm from '../components/VariantForm';
import ProductTable from '../components/ProductTable';

function Dashboard() {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: '',
        media: null,
        categoryInfo: {
            mainCategory: '',
            compareAtPrice: '',
            weight: '',
            customMetafields: {}
        }
    });

    const [variants, setVariants] = useState([]);
    const [products, setProducts] = useState([]);

    const handleSubmit = async () => {
        try {
            const payload = new FormData();
            payload.append("title", formData.title);
            payload.append("description", formData.description);
            payload.append("category", formData.category);
            if (formData.media) payload.append("media", formData.media);

            payload.append("variants", JSON.stringify(
                variants.map(v => ({
                    option: v.option || v.size || '',
                    sku: v.sku || '',
                    price: parseFloat(v.price || 0),
                    quantity: parseInt(v.quantity || 0)
                }))
            ));

            payload.append("categoryInfo", JSON.stringify({
                ...formData.categoryInfo,
                compareAtPrice: parseFloat(formData.categoryInfo.compareAtPrice || 0),
                weight: parseFloat(formData.categoryInfo.weight || 0),
            }));

            await createProduct(payload, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                    "Content-Type": "multipart/form-data"
                }
            });

            fetchProducts();
            resetForm();
        } catch (err) {
            console.error("❌ Failed to submit product:", err);
        }
    };

    const resetForm = () => {
        setFormData({
            title: '',
            description: '',
            category: '',
            media: null,
            categoryInfo: {
                mainCategory: '',
                compareAtPrice: '',
                weight: '',
                customMetafields: {}
            }
        });
        setVariants([]);
    };

    const fetchProducts = async () => {
        try {
            const res = await getAllProducts();
            setProducts(res.data);
        } catch (err) {
            console.error("❌ Error fetching products:", err);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <Container className="p-4">
            <h3>🛍️ Shopify-style Product Dashboard</h3>

            {/* Step 1: Basic Info */}
            <BasicInfoForm formData={formData} setFormData={setFormData} />

            {/* Step 2: Media Upload */}
            <MediaUploadForm formData={formData} setFormData={setFormData} />

            {/* Step 3: Category Info */}
            <CategoryForm formData={formData} setFormData={setFormData} />
            <CustomMetafieldsForm formData={formData} setFormData={setFormData} />

            {/* Step 4: Variants */}
            <VariantForm variants={variants} setVariants={setVariants} />

            <Button className="mt-4" onClick={handleSubmit}>💾 Save Product</Button>

            {/* Final: Table */}
            <ProductTable products={products} />
        </Container>
    );
}

export default Dashboard;
