import React from 'react';
import { Table } from 'react-bootstrap';

const ProductTable = ({ products }) => {
    return (
        <div className="mt-5">
            <h5>Product List</h5>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Base Price</th>
                    </tr>
                </thead>
                <tbody>
                    {products && products.length > 0 ? (
                        products.map((product, index) => (
                            <tr key={product.id || index}>
                                <td>{index + 1}</td>
                                <td>{product.title}</td>
                                <td>{product.category}</td>
                                <td>
                                    ₹
                                    {product.variants && product.variants.length > 0
                                        ? product.variants[0].price
                                        : 'N/A'}
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="text-center">No Products Found</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    );
};

export default ProductTable;
