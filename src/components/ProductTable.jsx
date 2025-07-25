import React from 'react';
import { Table, Image } from 'react-bootstrap';

const ProductTable = ({ products }) => {
    return (
        <div className="mt-5">
            <h5>Product List</h5>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Category Info</th>
                        <th>Variants</th>
                        <th>Metafields</th>
                    </tr>
                </thead>
                <tbody>
                    {products?.length > 0 ? (
                        products.map((product, index) => (
                            <tr key={product.id}>
                                <td>{index + 1}</td>

                                <td>
                                    {product.media ? (
                                        <Image
                                            src={`http://localhost:5000/uploads/${product.media}`}
                                            alt={product.title}
                                            thumbnail
                                            style={{ width: 80, height: 80 }}
                                        />
                                    ) : 'N/A'}
                                </td>

                                <td>{product.title}</td>
                                <td dangerouslySetInnerHTML={{ __html: product.description }} />

                                <td>{product.category}</td>

                                <td>
                                    <strong>Main:</strong> {product.Category?.mainCategory || 'N/A'}<br />
                                    <strong>Compare@:</strong> ₹{product.Category?.compareAtPrice || 'N/A'}<br />
                                    <strong>Weight:</strong> {product.Category?.weight || 'N/A'}
                                </td>

                                <td>
                                    {product.Variants?.length > 0 ? product.Variants.map((v, i) => (
                                        <div key={i}>
                                            <strong>Option:</strong> {v.option}<br />
                                            <strong>SKU:</strong> {v.sku}<br />
                                            <strong>Price:</strong> ₹{v.price}<br />
                                            <strong>Qty:</strong> {v.quantity}
                                            <hr />
                                        </div>
                                    )) : 'No Variants'}
                                </td>

                                <td>
                                    {product.Category?.Metafields?.length > 0 ? product.Category.Metafields.map((meta, i) => (
                                        <div key={i}>
                                            <strong>{meta.key}:</strong> {meta.value}
                                        </div>
                                    )) : 'No Metafields'}
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="8" className="text-center">No Products Found</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    );
};

export default ProductTable;
