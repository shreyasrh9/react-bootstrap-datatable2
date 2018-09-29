import React, { Component } from 'react';
import './App.css';
import BootstrapTable from 'react-bootstrap-table-next';
import axios from 'axios'


import DataTable from './DataTable/DataTable'
import FilterTable from './DataTable/FilterTable'

let supplierNameFilter = {};
let sellerNameFilter = {};

class App extends Component {
  state = {
    tableData: [],
    responseData: {},
    supplierData: {},
    sellerData: {}
  }
  componentDidMount() {
    //Get suppliers data

    axios.get('https://muapi2.starsellersworld.com/itemApi/getSuppliers')
      .then(res => {

        let rest = {};

        rest = res.data.data;

        for(let i=0;i<rest.length;i++){
          rest[i]['Supplier'] = "Test"
      }

        this.setState({ responseData: rest })


        //Mapping the supplier details to the filter select box
        if (this.state.responseData != null) {
          this.state.responseData.map(sup => {
            return (
              supplierNameFilter[sup.SupplierID] = sup.SupplierName
            )
          })

          this.setState({
            supplierData: supplierNameFilter
          })
        }
      })
      .catch(err => {
        console.log(err)
      });


    axios.get('https://muapi2.starsellersworld.com/itemApi/getSellers')
      .then(res => {
        this.setState({ responseData: res.data.data })


        //Mapping the supplier details to the filter select box
        
          res.data.data.map(sup => {
            return (
              sellerNameFilter[sup.SellerID] = sup.SellerName
            )
          })

          this.setState({
            sellerData: sellerNameFilter
          })
        
      })
      .catch(err => {
        console.log(err)
      });
  }


  render() {

    return (
      <div className="App">
        <FilterTable data={this.state.responseData} supplierData={this.state.supplierData}
                          sellerData={this.state.sellerData} tableData={this.state.tableData} />
      </div>
    );
  }
}

export default App;
