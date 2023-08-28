import React from 'react';

const Catalog = () => {
    // Sample data of smartphones

    const smartphoneData = [
        { id: 1, model: 'iPhone 13', price: 999 },
        { id: 2, model: 'Samsung Galaxy S21', price: 899 },
        { id: 3, model: 'Google Pixel 6', price: 799 },

    ];
    return (
        <div>

            <h1>Catalog</h1>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Model</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                {smartphoneData.map(smartphone => (
                    <tr key={smartphone.id}>
                        <td>{smartphone.id}</td>
                        <td>{smartphone.model}</td>
                        <td>${smartphone.price}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Catalog;
