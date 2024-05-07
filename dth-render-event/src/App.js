import React, { Component } from 'react'
import ĐTHProductsLisst from './components/ĐTHProductsLisst.js';
import ĐTHProductsAdd from './components/ĐTHProductsAdd.js';


export default class App extends Component {
  constructor(props) {
    super(props)
  this.state = {
    products: [
      {title: 'Đỗ Trọng Huy', id: 2210900029, status : 1 },
      {title: 'abc', id: 1, status : 0},
      {title: 'ab45c', id: 2, status : 0},
      {title: 'abdsc', id: 3, status : 1},
    ]
  }    
  }
  dtbHandleSumbit = (param) => {
    let {products} = this.state
    products.push(param)
    this.setState({
      products: products
    })
  }
  render() {
    return (
      <div className='container border mt-5'>
        <h1>Đỗ Trọng Huy - render data - event from</h1>
        <hr/>

        <ĐTHProductsLisst renderProducts = {this.state.products} />
      <hr />
        <ĐTHProductsAdd onSummit = {this.dtbHandleSumbit} />

      </div>
    )
  }
}

