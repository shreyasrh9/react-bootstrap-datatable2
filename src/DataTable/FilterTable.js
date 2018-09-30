import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter, selectFilter, Comparator } from 'react-bootstrap-table2-filter';
import './FilterTable.css'
import { Container, Row, Col } from 'reactstrap';
import RowExpand from './RowExapnd/RowExpand'

import axios from 'axios'

let supplierId = null;
let currentSupplierId = null;
let sellerId = null;
let currentSellerId = null;
let selectOptions = {};
let rest = {}
let sellerOptions = {};
let currentIndex = 0;
let sizePerPage = 10;
let page = 1;
let totalSize = 0;
let products = {};



class FilterTable extends React.Component {
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
                    rest[i]['id'] = i
                }

                products = rest;
                this.setState({
                    data: products.slice(currentIndex, currentIndex + sizePerPage),
                    fullData: rest
                });
                supplierId = null;

            });
    }

    fetchDataFromSellerId = (url, sellId) => {
        return axios.get(url)
            .then(res => {
                rest = res.data.data;

                for (let i = 0; i < rest.length; i++) {
                    rest[i]['Seller'] = sellerOptions[sellId]
                    rest[i]['Supplier'] = selectOptions[rest[i].stockOwner]
                    rest[i]['id'] = i
                }

                products = rest;
                this.setState({
                    data: products.slice(currentIndex, currentIndex + sizePerPage),
                    fullData: rest
                });


                sellerId = null;

            });
    }

    handleTableChange = (type, { filters, page, sizePerPage }) => {

        if (filters.Supplier !== undefined && filters.Seller !== undefined) {
            if (supplierId == null & sellerId == null) {

                console.log("Both filter")
                supplierId = filters.Supplier.filterVal
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
                    let url = 'https://muapi2.starsellersworld.com/itemApi/getAllSellingBySeller?MainUser=6656232&SellerID=' + sellerId + '&SellerUserIdent=' + sellerUserIdent + '&SupplierID=' + supplierId
                    console.log("URL :" + url)
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
                    });

                    supplierId = null;
                    sellerId = null;
                }
                    , 2000);

            }
        } else if (filters.Supplier !== undefined) {
            if (supplierId === null) {
                supplierId = filters.Supplier.filterVal
                this.fetchDataFromSupplierId(supplierId);

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
                currentSupplierId = supplierId;
                supplierId = null;
            }
        } else if (filters.Seller !== undefined) {
            if (sellerId === null) {
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
                    console.log("URL :" + url)

                    this.fetchDataFromSellerId(url, sellerId)


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
                    });
                    sellerId = null;
                }
                    , 2000);


            }
        }


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


        totalSize = products.length;

        if (this.props.supplierData != null) {
            selectOptions = this.props.supplierData
        }

        if (this.props.sellerData != null) {
            sellerOptions = this.props.sellerData
        }

        const expandRow = {
            renderer: (row) => (
            
            <RowExpand rowData={this.state.data[row.id]}/>
            ),
            showExpandColumn: true,
            onExpand: (row, isExpand, rowIndex, e) => {
              console.log(row.id);
            },
            onExpandAll: (isExpandAll, rows, e) => {
              console.log(isExpandAll);
              console.log(rows);
              console.log(e);
            }
          };


        return (

            <Container className='FilterTable'>
               
                    <BootstrapTable
                        remote={{ filter: true }}
                        noDataIndication="Please select the distributor or seller"
                        keyField="id"
                        data={products}
                        expandRow={ expandRow }
                        columns={this.state.columns}
                        filter={filterFactory()}
                        pagination={paginationFactory({ page, sizePerPage, totalSize })}
                        onTableChange={this.handleTableChange}
                        condensed
                        bordered={false}
                    />
               
            </Container>

        );
    }
}



export default FilterTable;
