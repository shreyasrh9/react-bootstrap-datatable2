import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

import { productsGenerator } from '../common'
import axios from 'axios'


const columns = [{
  dataField: 'SupplierID',
  text: 'Product ID'
}, {
  dataField: 'SupplierName',
  text: 'Product Price'
}];

class DataTable extends Component {
    state = {
        responseData : null,
        supplierData : {}
    }

   

    componentDidMount(){
        axios.get('https://muapi2.starsellersworld.com/itemApi/getSuppliers')
                .then(res => {
                    this.setState({responseData : res.data.data})
                    console.log(this.state.responseData)
                }
                )
            }
            

  render() {


    let products = productsGenerator();
    if(this.state.responseData != null){
    products = this.state.responseData
}

    return (
      <div className="App">
        <BootstrapTable keyField='id' data={ products } columns={ columns } striped
  hover
  condensed
  bordered={ false }/>
      </div>
    );
  }
}

export default DataTable;
