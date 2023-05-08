import React from 'react'

function ProductsTable(props) {

    let { products, removeProduct, editProduct } = props

    return (<>
        <table className="w3-table w3-striped">
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Delete</td>
                    <td>Edit</td>
                </tr>
            </thead>
            <tbody>
                {
                    products && products.map(item => {
                        let color = 'red';
                        if (item.unitPrice > 20)
                            color = ''

                        return <tr style={{color:color}}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.unitPrice}</td>
                            <td><button onClick={() => removeProduct(item.id)}>Delete Product</button></td>
                            <td><button onClick={() => editProduct(item)}>Edit</button></td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </>
    )
}

export default ProductsTable