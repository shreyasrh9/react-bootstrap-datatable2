import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter, selectFilter, Comparator } from 'react-bootstrap-table2-filter';
import { productsGenerator } from '../common'
import axios from 'axios'


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
            for (const dataField in filters) {
                
                const { filterVal, filterType, comparator } = filters[dataField];
                console.log(filterVal)
                if (filterType === 'SELECT') {
                    if (comparator === Comparator.LIKE) {
                        valid = row[dataField].toString().indexOf(filterVal) > -1;
                    } else {
                        valid = row[dataField] === filterVal;
                    }
                }
                if (!valid) break;
            }
            return valid;
        });
        this.setState(() => ({
            data: result
        }));

    }

    render() {
        console.log("Props Data :" + this.props.data)
        let products = productsGenerator();
        products = this.props.tableData
        // if (this.props.data != null) {
        //     products = this.props.data
        // }
        
        let supplierNameFilter = {};

        let selectOptions = {
            
        };

        if (this.props.supplierData != null) {
            selectOptions = this.props.supplierData
        }

        const columns = [{
            dataField: 'id',
            text: 'Product ID',
        }, {
            dataField: 'SupplierName',
            text: 'Product Name',
            filter: selectFilter({
                options: selectOptions
            })
        }, {
            dataField: 'SupplierID',
            text: 'Product Price',
            filter: textFilter()
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
