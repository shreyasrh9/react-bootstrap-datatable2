import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter, selectFilter, Comparator } from 'react-bootstrap-table2-filter';
import { productsGenerator } from '../common'
import axios from 'axios'

let supplierId = null;
let sellerId = null;
let selectOptions = {};
let rest = {}
let selRest = {};
let sellerOptions = {};


class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data
        };
    }

    fetchDataFromSupplierId = (supplierId) => {
        return axios.get('https://muapi2.starsellersworld.com/itemApi/supplierItems?MainUser=6656232&SupplierID=' + supplierId)
        .then(res => {
            rest = res.data.data;

            
            for (let i = 0; i < rest.length; i++) {
                rest[i]['Supplier'] = selectOptions[supplierId]
            }
            this.setState({ data: rest });
            supplierId = null;

        });
    }
    

    handleTableChange = (type, { filters }) => {
        const result = this.props.data.filter((row) => {

            
            if (filters.Supplier !== undefined) {
                if (supplierId == null) {
                    supplierId = filters.Supplier.filterVal
                    this.fetchDataFromSupplierId(supplierId);

                }
            }

            if (filters.Seller !== undefined) {
                if (sellerId == null) {
                    sellerId = filters.Seller.filterVal;

                    let sellerUserIdent = 0;



                    axios.get('https://muapi2.starsellersworld.com/itemApi/getSellers')
                        .then(res => {
                            rest = res.data.data;

                            for (let i = 0; i < rest.length; i++) {
                                if (rest[i].SellerID == sellerId) {
                                    sellerUserIdent = rest[i].SellerUserIdent;
                                }
                            }
                            
                        });
                setTimeout(() => {
                    let url = 'https://muapi2.starsellersworld.com/itemApi/getAllSellingBySeller?MainUser=6656232&SellerID='+sellerId+'&SellerUserIdent='+ sellerUserIdent
                    
                    axios.get(url)
                        .then(res => {
                            selRest = res.data.data;

                            for (let i = 0; i < rest.length; i++) {
                                selRest[i]['Seller'] = sellerOptions[sellerId]
                            }
                            
                            this.setState({
                                 data: selRest 
                                });
                            supplierId = null;

                        });
                    }
                ,2000);

                }
            }

            return rest;
        });
    }




    render() {
        let products = productsGenerator();



        products = this.state.data

        if (this.props.supplierData != null) {
            selectOptions = this.props.supplierData
        }

        if (this.props.sellerData != null) {
            sellerOptions = this.props.sellerData
        }

        const columns = [{
            dataField: 'sswItemNumber',
            text: 'sswItemNumber',
        }, {
            dataField: 'EAN',
            text: 'EAN',
        }, {
            dataField: 'availability',
            text: 'availability',
        }, {
            dataField: 'basicNettoPrice',
            text: 'basicNettoPrice',
        }, {
            dataField: 'itemCondition',
            text: 'itemCondition',
        }, {
            dataField: 'Supplier',
            text: 'Supplier',
            formatter: cell => selectOptions[cell],
            filter: selectFilter({
                options: selectOptions,
                defaultValue: 6656241
            })
        }, {
            dataField: 'SKU',
            text: 'SKU',
        }, {
            dataField: 'itemName',
            text: 'itemName',
        }, {
            dataField: 'Seller',
            text: 'Seller',
            formatter: cell => sellerOptions[cell],
            filter: selectFilter({
                options: sellerOptions,
                defaultValue: 545
            })
        }];


        return (
            <BootstrapTable
                remote={{ filter: true }}
                noDataIndication="Please select the distributor or seller"
                keyField="id"
                data={products}
                columns={columns}
                filter={filterFactory()}
                onTableChange={this.handleTableChange}
            />
        );
    }
}



export default Container;
