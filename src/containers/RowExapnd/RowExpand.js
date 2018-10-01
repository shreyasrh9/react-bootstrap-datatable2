import React, { Component } from 'react';
import { TabContent, TabPane, Nav, Row, Col } from 'reactstrap';
import { Table } from 'reactstrap';
import './RowExpand.css'
import SearchNavLinks from '../../components/RowExpandNavigation/RowExpandNavigation'
import ExpandTableHeader from '../../components/ExpandTable/ExpandTableHeader/ExpandTableHeader'
import ExpandTableBody from '../../components/ExpandTable/ExpandTableBody/ExpandTableBody'
import ExpandTableBodyEdit from '../../components/ExpandTable/ExpandTableBody/ExpandTableBodyEdit'


class RowExpand extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    render() {
        return (
            <div className="RowExpand">
                <Nav tabs>
                    <SearchNavLinks activeTab={this.state.activeTab} tabValue='1' clicked={this.toggle}>
                        View
                    </SearchNavLinks>

                    <SearchNavLinks activeTab={this.state.activeTab} tabValue='2' clicked={this.toggle}>
                        Edit
                    </SearchNavLinks>
                </Nav>


                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            <Col>
                                <Table className="TableData">
                                    <ExpandTableHeader header="Master Data" />

                                    <tbody>
                                        <ExpandTableBody head="Supplier" rowData={this.props.rowData.Supplier} />
                                        <ExpandTableBody head="Seller" rowData={this.props.rowData.Seller} />
                                        <ExpandTableBody head="SKU" rowData={this.props.rowData.SKU} />
                                        <ExpandTableBody head="Item Condition" rowData={this.props.rowData.itemCondition} />
                                        <ExpandTableBody head="EAN" rowData={this.props.rowData.EAN} />
                                        <ExpandTableBody head="Purchase Price" rowData={this.props.rowData.purchasePrice} />
                                        <ExpandTableBody head="Basis Purchase Calc Price" rowData={this.props.rowData.basisPurchaseCalcPrice} />
                                        <ExpandTableBody head="Real Inventory" rowData={this.props.rowData.realInventory} />
                                        <ExpandTableBody head="Show Inventory" rowData={this.props.rowData.showInventory} />
                                        <ExpandTableBody head="Selling Price" rowData={this.props.rowData.sellingPrice} />
                                        <ExpandTableBody head="Selling Price No Ship" rowData={this.props.rowData.sellingPriceNoShip} />
                                        <ExpandTableBody head="Net Ship Cost" rowData={this.props.rowData.netShipCost} />
                                    </tbody>
                                </Table>
                            </Col>
                            <Col>
                                <Table className="TableData">
                                    <ExpandTableHeader header="Price and stock" />

                                    <tbody>
                                        <ExpandTableBody head="Supplier" rowData={this.props.rowData.Supplier} />
                                        <ExpandTableBody head="Seller" rowData={this.props.rowData.Seller} />
                                        <ExpandTableBody head="SKU" rowData={this.props.rowData.SKU} />
                                        <ExpandTableBody head="Item Condition" rowData={this.props.rowData.itemCondition} />
                                        <ExpandTableBody head="EAN" rowData={this.props.rowData.EAN} />
                                        <ExpandTableBody head="Purchase Price" rowData={this.props.rowData.purchasePrice} />
                                        <ExpandTableBody head="Basis Purchase Calc Price" rowData={this.props.rowData.basisPurchaseCalcPrice} />
                                        <ExpandTableBody head="Real Inventory" rowData={this.props.rowData.realInventory} />
                                        <ExpandTableBody head="Show Inventory" rowData={this.props.rowData.showInventory} />
                                        <ExpandTableBody head="Selling Price" rowData={this.props.rowData.sellingPrice} />
                                        <ExpandTableBody head="Selling Price No Ship" rowData={this.props.rowData.sellingPriceNoShip} />
                                        <ExpandTableBody head="Net Ship Cost" rowData={this.props.rowData.netShipCost} />
                                    </tbody>
                                </Table>
                            </Col>
                            <Col>
                                <Table className="TableData">
                                    <ExpandTableHeader header="Additional product information" />
                                    <tbody>
                                        <ExpandTableBody head="Supplier" rowData={this.props.rowData.Supplier} />
                                        <ExpandTableBody head="Seller" rowData={this.props.rowData.Seller} />
                                        <ExpandTableBody head="SKU" rowData={this.props.rowData.SKU} />
                                        <ExpandTableBody head="Item Condition" rowData={this.props.rowData.itemCondition} />
                                        <ExpandTableBody head="EAN" rowData={this.props.rowData.EAN} />
                                        <ExpandTableBody head="Purchase Price" rowData={this.props.rowData.purchasePrice} />
                                        <ExpandTableBody head="Basis Purchase Calc Price" rowData={this.props.rowData.basisPurchaseCalcPrice} />
                                        <ExpandTableBody head="Real Inventory" rowData={this.props.rowData.realInventory} />
                                        <ExpandTableBody head="Show Inventory" rowData={this.props.rowData.showInventory} />
                                        <ExpandTableBody head="Selling Price" rowData={this.props.rowData.sellingPrice} />
                                        <ExpandTableBody head="Selling Price No Ship" rowData={this.props.rowData.sellingPriceNoShip} />
                                        <ExpandTableBody head="Net Ship Cost" rowData={this.props.rowData.netShipCost} />
                                    </tbody>
                                </Table>
                            </Col>
                            <Col>
                                <Table className="TableData">
                                    <ExpandTableHeader header="Marketplace" />
                                    <tbody>
                                        <tr>
                                            <td>
                                                <span style={{ float: "left" }}>
                                                    <img className='FlagLogo' src={require("../../assets/images/united-kingdom.png")} alt=""></img>
                                                    <span style={{ marginLeft: "5px" }}></span>
                                                    <img className='FlagLogo' src={require("../../assets/images/ivory-coast.png")} alt=""></img>
                                                    <span style={{ marginLeft: "5px" }}></span>
                                                    <img className='FlagLogo' src={require("../../assets/images/france.png")} alt=""></img>
                                                    <span style={{ marginLeft: "5px" }}></span>
                                                    <img className='FlagLogo' src={require("../../assets/images/equatorial-guinea.png")} alt=""></img>
                                                </span>


                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>

                                <Table className="TableData">
                                    <thead className="TableDataHeader">
                                        <tr>
                                            <th>Images:</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <img className="ProductImage" src={require("../../assets/images/shoes.png")} alt=""></img>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>

                                <Table className="TableData">

                                    <ExpandTableHeader header="Product feature" />
                                    <tbody>
                                        <ExpandTableBody head="Supplier" rowData={this.props.rowData.Supplier} />
                                        <ExpandTableBody head="Seller" rowData={this.props.rowData.Seller} />
                                        <ExpandTableBody head="SKU" rowData={this.props.rowData.SKU} />
                                        <ExpandTableBody head="Item Condition" rowData={this.props.rowData.itemCondition} />
                                        <ExpandTableBody head="EAN" rowData={this.props.rowData.EAN} />
                                        <ExpandTableBody head="Purchase Price" rowData={this.props.rowData.purchasePrice} />
                                        <ExpandTableBody head="Basis Purchase Calc Price" rowData={this.props.rowData.basisPurchaseCalcPrice} />
                                        <ExpandTableBody head="Real Inventory" rowData={this.props.rowData.realInventory} />
                                    </tbody>
                                </Table>

                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <Col>
                                <Table className="TableData">
                                    <ExpandTableHeader header="Master Data" />
                                    <tbody>
                                        <ExpandTableBodyEdit head="Supplier" rowData={this.props.rowData.Supplier} />
                                        <ExpandTableBodyEdit head="Seller" rowData={this.props.rowData.Seller} />
                                        <ExpandTableBodyEdit head="SKU" rowData={this.props.rowData.SKU} />
                                        <ExpandTableBodyEdit head="Item Condition" rowData={this.props.rowData.itemCondition} />
                                        <ExpandTableBodyEdit head="EAN" rowData={this.props.rowData.EAN} />
                                        <ExpandTableBodyEdit head="Purchase Price" rowData={this.props.rowData.purchasePrice} />
                                        <ExpandTableBodyEdit head="Basis Purchase Calc Price" rowData={this.props.rowData.basisPurchaseCalcPrice} />
                                        <ExpandTableBodyEdit head="Real Inventory" rowData={this.props.rowData.realInventory} />
                                        <ExpandTableBodyEdit head="Show Inventory" rowData={this.props.rowData.showInventory} />
                                        <ExpandTableBodyEdit head="Selling Price" rowData={this.props.rowData.sellingPrice} />
                                        <ExpandTableBodyEdit head="Selling Price No Ship" rowData={this.props.rowData.sellingPriceNoShip} />
                                        <ExpandTableBodyEdit head="Net Ship Cost" rowData={this.props.rowData.netShipCost} />

                                    </tbody>
                                </Table>
                            </Col>
                            <Col>
                                <Table className="TableData">
                                    <ExpandTableHeader header="Price and stock" />
                                    <tbody>
                                        <ExpandTableBodyEdit head="Supplier" rowData={this.props.rowData.Supplier} />
                                        <ExpandTableBodyEdit head="Seller" rowData={this.props.rowData.Seller} />
                                        <ExpandTableBodyEdit head="SKU" rowData={this.props.rowData.SKU} />
                                        <ExpandTableBodyEdit head="Item Condition" rowData={this.props.rowData.itemCondition} />
                                        <ExpandTableBodyEdit head="EAN" rowData={this.props.rowData.EAN} />
                                        <ExpandTableBodyEdit head="Purchase Price" rowData={this.props.rowData.purchasePrice} />
                                        <ExpandTableBodyEdit head="Basis Purchase Calc Price" rowData={this.props.rowData.basisPurchaseCalcPrice} />
                                        <ExpandTableBodyEdit head="Real Inventory" rowData={this.props.rowData.realInventory} />
                                        <ExpandTableBodyEdit head="Show Inventory" rowData={this.props.rowData.showInventory} />
                                        <ExpandTableBodyEdit head="Selling Price" rowData={this.props.rowData.sellingPrice} />
                                        <ExpandTableBodyEdit head="Selling Price No Ship" rowData={this.props.rowData.sellingPriceNoShip} />
                                        <ExpandTableBodyEdit head="Net Ship Cost" rowData={this.props.rowData.netShipCost} />
                                    </tbody>
                                </Table>
                            </Col>
                            <Col>
                                <Table className="TableData">
                                    <ExpandTableHeader header="Additional product information" />
                                    <tbody>
                                        <ExpandTableBodyEdit head="Supplier" rowData={this.props.rowData.Supplier} />
                                        <ExpandTableBodyEdit head="Seller" rowData={this.props.rowData.Seller} />
                                        <ExpandTableBodyEdit head="SKU" rowData={this.props.rowData.SKU} />
                                        <ExpandTableBodyEdit head="Item Condition" rowData={this.props.rowData.itemCondition} />
                                        <ExpandTableBodyEdit head="EAN" rowData={this.props.rowData.EAN} />
                                        <ExpandTableBodyEdit head="Purchase Price" rowData={this.props.rowData.purchasePrice} />
                                        <ExpandTableBodyEdit head="Basis Purchase Calc Price" rowData={this.props.rowData.basisPurchaseCalcPrice} />
                                        <ExpandTableBodyEdit head="Real Inventory" rowData={this.props.rowData.realInventory} />
                                        <ExpandTableBodyEdit head="Show Inventory" rowData={this.props.rowData.showInventory} />
                                        <ExpandTableBodyEdit head="Selling Price" rowData={this.props.rowData.sellingPrice} />
                                        <ExpandTableBodyEdit head="Selling Price No Ship" rowData={this.props.rowData.sellingPriceNoShip} />
                                        <ExpandTableBodyEdit head="Net Ship Cost" rowData={this.props.rowData.netShipCost} />
                                    </tbody>
                                </Table>
                            </Col>

                            <Col>
                                <Table className="TableData">
                                    <thead className="TableDataHeader">
                                        <tr>
                                            <th>Marketplace:</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <span style={{ float: "left" }}>
                                                    <img className='FlagLogo' src={require("../../assets/images/united-kingdom.png")} alt=""></img>
                                                    <span style={{ marginLeft: "5px" }}></span>
                                                    <img className='FlagLogo' src={require("../../assets/images/ivory-coast.png")} alt=""></img>
                                                    <span style={{ marginLeft: "5px" }}></span>
                                                    <img className='FlagLogo' src={require("../../assets/images/france.png")} alt=""></img>
                                                    <span style={{ marginLeft: "5px" }}></span>
                                                    <img className='FlagLogo' src={require("../../assets/images/equatorial-guinea.png")} alt=""></img>
                                                </span>


                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>

                                <Table className="TableData">
                                    <thead className="TableDataHeader">
                                        <tr>
                                            <th>Images:</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <img className="ProductImage" src={require("../../assets/images/shoes.png")} alt=""></img>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>

                                <Table className="TableData">
                                    <ExpandTableHeader header="Product feature" />
                                    <tbody>
                                        <ExpandTableBodyEdit head="Supplier" rowData={this.props.rowData.Supplier} />
                                        <ExpandTableBodyEdit head="Seller" rowData={this.props.rowData.Seller} />
                                        <ExpandTableBodyEdit head="SKU" rowData={this.props.rowData.SKU} />
                                        <ExpandTableBodyEdit head="Item Condition" rowData={this.props.rowData.itemCondition} />
                                        <ExpandTableBodyEdit head="EAN" rowData={this.props.rowData.EAN} />
                                        <ExpandTableBodyEdit head="Purchase Price" rowData={this.props.rowData.purchasePrice} />
                                        <ExpandTableBodyEdit head="Basis Purchase Calc Price" rowData={this.props.rowData.basisPurchaseCalcPrice} />
                                        <ExpandTableBodyEdit head="Real Inventory" rowData={this.props.rowData.realInventory} />
                                    </tbody>
                                </Table>

                            </Col>

                        </Row>
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}

export default RowExpand;