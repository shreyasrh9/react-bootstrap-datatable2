import React, { Component } from 'react';
import './App.css';
import BootstrapTable from 'react-bootstrap-table-next';
import axios from 'axios'


import DataTable from './DataTable/DataTable'
import FilterTable from './DataTable/FilterTable'

let supplierNameFilter = {};

class App extends Component {
  state = {
    tableData:[],
    responseData:[],
    supplierData:null
  }
  componentDidMount(){
            axios.get('https://muapi2.starsellersworld.com/itemApi/getSuppliers')
                    .then(res => {
                        this.setState({responseData : res.data.data})
    
                        
                        //Mapping the supplier details to the filter select box
                            if(this.state.responseData != null){
                            this.state.responseData.map(sup => {
                                return(
                                supplierNameFilter[sup.SupplierID] = sup.SupplierName
                                )
                        })
        
                        console.log("qualityType :"+supplierNameFilter)
                            this.setState({
                            supplierData : supplierNameFilter
                            })
                        }
                    })
                    .catch(err => {
                        console.log(err)
                    });
          }


  render() {

    
    console.log("App Data :"+this.state.supplierData)

    return (
      <div className="App">
          <FilterTable data={this.state.responseData} supplierData={this.state.supplierData} tableData={this.state.tableData}/>
      </div>
    );
  }
}

export default App;
