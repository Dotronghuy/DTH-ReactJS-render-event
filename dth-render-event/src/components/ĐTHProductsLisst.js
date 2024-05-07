import React, { Component } from 'react'

export default class ĐTHProductsLisst extends Component {
  render() {
    let {renderProducts} = this.props;
    
    let elemenProduct = renderProducts.map((item,index) => {
      return (
        <tr key = {index}>
          <td>{item.title}</td>
          <td>{item.id}</td>
          <td>{item.status === 1 ?'Active' : 'Non active'}</td>
        </tr> 
      )
    })


    return (
        <div>
            <h2>Danh Sách Sản Phẩm</h2>
          <table className='table table-bordered'>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>ID</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                 {elemenProduct}
              </tbody>
          </table>
        </div>
    )
  }
}
