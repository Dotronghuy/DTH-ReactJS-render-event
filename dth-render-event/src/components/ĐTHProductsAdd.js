import React, { Component } from 'react'

export default class ĐTHProductsAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            title: '',
            status: 0
        }
    }
    dthHanlderChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            [name]: value
        })
    }
    dtbHandleSumbit = (e) => {
        e.preventDefault();
        this.props.onSummit(this.state);
        
    }
  render() {
    return (
      <div>
        <h2>Thêm Mới Sản Phẩm</h2>
        <form className='col-md-6'>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                    ID
                </span>
                <input
                    type="text"
                    className="form-control"
                    name = 'id'
                    value={this.state.id}
                    onChange={this.dthHanlderChange}
                />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon2">
                    title
                </span>
                <input
                    type="text"
                    className="form-control"
                    name = 'title'
                    value={this.state.title}
                    onChange={this.dthHanlderChange}
                />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon3">
                    status
                </span>
                <input
                    type="text"
                    className="form-control"
                    name = 'status'
                    value={this.state.status}
                    onChange={this.dthHanlderChange}
                />
            </div>
            <button className='btn btn-success' onClick={this.dtbHandleSumbit}>Ghi lại</button>
        </form>
      </div>
    )
  }
}
