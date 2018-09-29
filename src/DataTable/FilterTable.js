import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter, selectFilter, Comparator } from 'react-bootstrap-table2-filter';
import { productsGenerator } from '../common'
import axios from 'axios'

let supplierId = null;

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data
        };
    }

    handleTableChange = (type, { filters }) => {
        const result = this.props.data.filter((row) => {
            let valid = true;
            let rest = []
            if (supplierId == null) {
                supplierId = filters.Supplier.filterVal
                axios.get('https://muapi2.starsellersworld.com/itemApi/supplierItems?MainUser=6656232&SupplierID=' + supplierId)
                    .then(res => {
                        console.log(res.data.data)
                        this.setState({data: res.data.data});
                    });
            }





            return rest;
        });

        // console.log("Result :"+result)

        // this.setState(() => ({
        //     data: result
        // }));

    }

    render() {
        let products = productsGenerator();
        products = this.state.data
        // if (this.props.data != null) {
        //     products = this.props.data
        // }

        let supplierNameFilter = {};

        let selectOptions = {

        };

        let sellerOptions = {

        };

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
