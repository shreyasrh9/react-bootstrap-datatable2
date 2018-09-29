import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter, selectFilter, Comparator } from 'react-bootstrap-table2-filter';
import { productsGenerator } from '../common'
import axios from 'axios'

let supplierId = null;
let sellerId = null;
let selectOptions = {};
let rest = {}
let sellerOptions = {};




class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            columns: [{
                'dataField': 'Supplier',
                'text': 'Supplier',
                'filter': selectFilter({
                    'options': this.props.supplierData,
                    'defaultValue': 6656241
                })
            }, {
                'dataField': 'Seller',
                'text': 'Seller',
                // formatter: cell => sellerOptions[cell],
                'filter': selectFilter({
                    'options': this.props.sellerData,
                    'defaultValue': 545
                })
            }]
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

                    const test = "Test"

                    this.setState({
                        columns: [{
                            dataField: 'Supplier',
                            text: 'Supplier',
                            filter: selectFilter({
                                options: selectOptions,
                                defaultValue: 6656241
                            })
                        }, {
                            dataField: 'Seller',
                            text: 'Seller',
                            filter: selectFilter({
                                options: sellerOptions,
                                defaultValue: 545
                            })
                        }, {
                            dataField: 'sswItemNumber',
                            text: 'SSW Item Number',
                        }, {
                            dataField: 'SKU',
                            text: 'SKU',
                        }, {
                            dataField: 'itemName',
                            text: 'Item Name',
                        }, {
                            dataField: 'purchasePrice',
                            text: 'Purchase Price',
                        }, {
                            dataField: 'purchaseShipCost',
                            text: 'Purchase Ship Cost',
                        }, {
                            dataField: 'availability',
                            text: 'Availability',
                        }, {
                            dataField: 'EAN',
                            text: 'EAN',
                        }, {
                            dataField: 'minPrice',
                            text: 'Min Price',
                        }, {
                            dataField: 'maxPrice',
                            text: 'Max Price',
                        }, {
                            dataField: 'itemCondition',
                            text: 'Item Condition',
                        }, {
                            dataField: 'showInventory',
                            text: 'Show Inventory',
                        }, {
                            dataField: 'basicNettoPrice',
                            text: 'Basic Net To Price',
                        }, {
                            dataField: 'itemPurchaseRank',
                            text: 'Item Purchase Rank',
                        }, {
                            dataField: 'UserImage',
                            text: 'User Image',
                        }]
                    })

                    supplierId = null;
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
                        let url = 'https://muapi2.starsellersworld.com/itemApi/getAllSellingBySeller?MainUser=6656232&SellerID=' + sellerId + '&SellerUserIdent=' + sellerUserIdent
                        console.log("URL :"+url)
                        axios.get(url)
                            .then(res => {
                                rest = res.data.data;

                                for (let i = 0; i < rest.length; i++) {
                                    rest[i]['Seller'] = sellerOptions[sellerId]
                                    rest[i]['Supplier'] = selectOptions[rest[i].stockOwner]
                                }

                                this.setState({
                                    data: rest
                                });
                                sellerId = null;

                            });


                            

                            this.setState({
                                columns: [{
                                    dataField: 'Supplier',
                                    text: 'Supplier',
                                    filter: selectFilter({
                                        options: selectOptions,
                                        defaultValue: 6656241
                                    })
                                }, {
                                    dataField: 'Seller',
                                    text: 'Seller',
                                    filter: selectFilter({
                                        options: sellerOptions,
                                        defaultValue: 545
                                    })
                                }, {
                                    dataField: 'SKU',
                                    text: 'SKU',
                                }, {
                                    dataField: 'itemCondition',
                                    text: 'Item Condition',
                                }, {
                                    dataField: 'EAN',
                                    text: 'EAN',
                                }, {
                                    dataField: 'purchasePrice',
                                    text: 'Purchase Price',
                                }, {
                                    dataField: 'basisPurchaseCalcPrice',
                                    text: 'Basis Purchase Calc Price',
                                }, {
                                    dataField: 'realInventory',
                                    text: 'Real Inventory',
                                }, {
                                    dataField: 'showInventory',
                                    text: 'Show Inventory',
                                }, {
                                    dataField: 'sellingPrice',
                                    text: 'Selling Price',
                                }, {
                                    dataField: 'sellingPriceNoShip',
                                    text: 'Selling PriceNo Ship',
                                }, {
                                    dataField: 'netShipCost',
                                    text: 'Net Ship Cost',
                                }, {
                                    dataField: 'showInventory',
                                    text: 'Show Inventory',
                                }, {
                                    dataField: 'UserImage',
                                    text: 'User Image',
                                }]
                            })
                    }
                        , 2000);

                }
            }

            return rest;
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            columns: [{
                'dataField': 'Supplier',
                'text': 'Supplier',
                'filter': selectFilter({
                    'options': nextProps.supplierData,
                    'defaultValue': 6656241
                })
            }, {
                'dataField': 'Seller',
                'text': 'Seller',
                'filter': selectFilter({
                    'options': nextProps.sellerData,
                    'defaultValue': 545
                })
            }]
        })
    }


    render() {
        let products = {};



        products = this.state.data

        if (this.props.supplierData != null) {
            selectOptions = this.props.supplierData
        }

        if (this.props.sellerData != null) {
            sellerOptions = this.props.sellerData
        }



        return (
            <BootstrapTable
                remote={{ filter: true }}
                noDataIndication="Please select the distributor or seller"
                keyField="id"
                data={products}
                columns={this.state.columns}
                filter={filterFactory()}
                onTableChange={this.handleTableChange}
                striped
                hover
                condensed
                bordered={ false }
            />
        );
    }
}



export default Container;
