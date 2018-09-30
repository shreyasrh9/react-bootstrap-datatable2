import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, Input, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { Table } from 'reactstrap';
import './RowExpand.css'


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
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '1' })}
                            onClick={() => { this.toggle('1'); }}
                        >
                            View
            </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '2' })}
                            onClick={() => { this.toggle('2'); }}
                        >
                            Edit
            </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            <Col>
                                <Table className="TableData">
                                    <thead className="TableDataHeader">
                                        <tr>
                                            <th>Master Data :</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <span style={{ float: "left" }}>
                                                    Supplier
                                                </span>

                                                <span style={{ float: "right" }}>
                                                    {this.props.rowData.Supplier}
                                                </span>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <span style={{ float: "left" }}>
                                                    Seller
                                                </span>

                                                <span style={{ float: "right" }}>
                                                    {this.props.rowData.Seller}
                                                </span>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <span style={{ float: "left" }}>
                                                    SKU
                                                </span>

                                                <span style={{ float: "right" }}>
                                                    {this.props.rowData.SKU}
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span style={{ float: "left" }}>
                                                    Item Condition
                                                </span>

                                                <span style={{ float: "right" }}>
                                                    {this.props.rowData.itemCondition}
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span style={{ float: "left" }}>
                                                    EAN
                                                </span>

                                                <span style={{ float: "right" }}>
                                                    {this.props.rowData.EAN}
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span style={{ float: "left" }}>
                                                    Purchase Price
                                                </span>

                                                <span style={{ float: "right" }}>
                                                    {this.props.rowData.purchasePrice}
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span style={{ float: "left" }}>
                                                    Basis Purchase Calc Price
                                                </span>

                                                <span style={{ float: "right" }}>
                                                    {this.props.rowData.basisPurchaseCalcPrice}
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span style={{ float: "left" }}>
                                                    Real Inventory
                                                </span>

                                                <span style={{ float: "right" }}>
                                                    {this.props.rowData.realInventory}
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span style={{ float: "left" }}>
                                                    Show Inventory
                                                </span>

                                                <span style={{ float: "right" }}>
                                                    {this.props.rowData.showInventory}
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span style={{ float: "left" }}>
                                                    Selling Price
                                                </span>

                                                <span style={{ float: "right" }}>
                                                    {this.props.rowData.sellingPrice}
                                                </span>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <span style={{ float: "left" }}>
                                                    Selling Price No Ship
                                                </span>

                                                <span style={{ float: "right" }}>
                                                    {this.props.rowData.sellingPriceNoShip}
                                                </span>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <span style={{ float: "left" }}>
                                                    Net Ship Cost
                                                </span>

                                                <span style={{ float: "right" }}>
                                                    {this.props.rowData.netShipCost}
                                                </span>
                                            </td>
                                        </tr>

                                    </tbody>
                                </Table>
                            </Col>
                            <Col><Table className="TableData">
                                <thead className="TableDataHeader">
                                    <tr>
                                        <th>Price and Stock :</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <span style={{ float: "left" }}>
                                                Supplier
                                                </span>

                                            <span style={{ float: "right" }}>
                                                {this.props.rowData.Supplier}
                                            </span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <span style={{ float: "left" }}>
                                                Seller
                                                </span>

                                            <span style={{ float: "right" }}>
                                                {this.props.rowData.Seller}
                                            </span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <span style={{ float: "left" }}>
                                                SKU
                                                </span>

                                            <span style={{ float: "right" }}>
                                                {this.props.rowData.SKU}
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span style={{ float: "left" }}>
                                                Item Condition
                                                </span>

                                            <span style={{ float: "right" }}>
                                                {this.props.rowData.itemCondition}
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span style={{ float: "left" }}>
                                                EAN
                                                </span>

                                            <span style={{ float: "right" }}>
                                                {this.props.rowData.EAN}
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span style={{ float: "left" }}>
                                                Purchase Price
                                                </span>

                                            <span style={{ float: "right" }}>
                                                {this.props.rowData.purchasePrice}
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span style={{ float: "left" }}>
                                                Basis Purchase Calc Price
                                                </span>

                                            <span style={{ float: "right" }}>
                                                {this.props.rowData.basisPurchaseCalcPrice}
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span style={{ float: "left" }}>
                                                Real Inventory
                                                </span>

                                            <span style={{ float: "right" }}>
                                                {this.props.rowData.realInventory}
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span style={{ float: "left" }}>
                                                Show Inventory
                                                </span>

                                            <span style={{ float: "right" }}>
                                                {this.props.rowData.showInventory}
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span style={{ float: "left" }}>
                                                Selling Price
                                                </span>

                                            <span style={{ float: "right" }}>
                                                {this.props.rowData.sellingPrice}
                                            </span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <span style={{ float: "left" }}>
                                                Selling Price No Ship
                                                </span>

                                            <span style={{ float: "right" }}>
                                                {this.props.rowData.sellingPriceNoShip}
                                            </span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <span style={{ float: "left" }}>
                                                Net Ship Cost
                                                </span>

                                            <span style={{ float: "right" }}>
                                                {this.props.rowData.netShipCost}
                                            </span>
                                        </td>
                                    </tr>

                                </tbody>
                            </Table></Col>
                            <Col>
                                <Table className="TableData">
                                    <thead className="TableDataHeader">
                                        <tr>
                                            <th>Additional  product information:</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <span style={{ float: "left" }}>
                                                    Supplier
                                                </span>

                                                <span style={{ float: "right" }}>
                                                    {this.props.rowData.Supplier}
                                                </span>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <span style={{ float: "left" }}>
                                                    Seller
                                                </span>

                                                <span style={{ float: "right" }}>
                                                    {this.props.rowData.Seller}
                                                </span>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <span style={{ float: "left" }}>
                                                    SKU
                                                </span>

                                                <span style={{ float: "right" }}>
                                                    {this.props.rowData.SKU}
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span style={{ float: "left" }}>
                                                    Item Condition
                                                </span>

                                                <span style={{ float: "right" }}>
                                                    {this.props.rowData.itemCondition}
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span style={{ float: "left" }}>
                                                    EAN
                                                </span>

                                                <span style={{ float: "right" }}>
                                                    {this.props.rowData.EAN}
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span style={{ float: "left" }}>
                                                    Purchase Price
                                                </span>

                                                <span style={{ float: "right" }}>
                                                    {this.props.rowData.purchasePrice}
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span style={{ float: "left" }}>
                                                    Basis Purchase Calc Price
                                                </span>

                                                <span style={{ float: "right" }}>
                                                    {this.props.rowData.basisPurchaseCalcPrice}
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span style={{ float: "left" }}>
                                                    Real Inventory
                                                </span>

                                                <span style={{ float: "right" }}>
                                                    {this.props.rowData.realInventory}
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span style={{ float: "left" }}>
                                                    Show Inventory
                                                </span>

                                                <span style={{ float: "right" }}>
                                                    {this.props.rowData.showInventory}
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span style={{ float: "left" }}>
                                                    Selling Price
                                                </span>

                                                <span style={{ float: "right" }}>
                                                    {this.props.rowData.sellingPrice}
                                                </span>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <span style={{ float: "left" }}>
                                                    Selling Price No Ship
                                                </span>

                                                <span style={{ float: "right" }}>
                                                    {this.props.rowData.sellingPriceNoShip}
                                                </span>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <span style={{ float: "left" }}>
                                                    Net Ship Cost
                                                </span>

                                                <span style={{ float: "right" }}>
                                                    {this.props.rowData.netShipCost}
                                                </span>
                                            </td>
                                        </tr>

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
                                                    <img className='FlagLogo' src={require("../../assets/images/united-kingdom.png")} ></img>
                                                    <span style={{ marginLeft: "5px" }}></span>
                                                    <img className='FlagLogo' src={require("../../assets/images/ivory-coast.png")} ></img>
                                                    <span style={{ marginLeft: "5px" }}></span>
                                                    <img className='FlagLogo' src={require("../../assets/images/france.png")} ></img>
                                                    <span style={{ marginLeft: "5px" }}></span>
                                                    <img className='FlagLogo' src={require("../../assets/images/equatorial-guinea.png")} ></img>
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
                                                <img className="ProductImage" src={require("../../assets/images/shoes.png")} ></img>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>

                                <Table className="TableData">
                                    <thead className="TableDataHeader">
                                        <tr>
                                            <th>Product feature:</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <span style={{ float: "left" }}>
                                                    Supplier
                                                </span>

                                                <span style={{ float: "right" }}>
                                                    {this.props.rowData.Supplier}
                                                </span>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <span style={{ float: "left" }}>
                                                    Seller
                                                </span>

                                                <span style={{ float: "right" }}>
                                                    {this.props.rowData.Seller}
                                                </span>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <span style={{ float: "left" }}>
                                                    SKU
                                                </span>

                                                <span style={{ float: "right" }}>
                                                    {this.props.rowData.SKU}
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span style={{ float: "left" }}>
                                                    Item Condition
                                                </span>

                                                <span style={{ float: "right" }}>
                                                    {this.props.rowData.itemCondition}
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span style={{ float: "left" }}>
                                                    EAN
                                                </span>

                                                <span style={{ float: "right" }}>
                                                    {this.props.rowData.EAN}
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span style={{ float: "left" }}>
                                                    Purchase Price
                                                </span>

                                                <span style={{ float: "right" }}>
                                                    {this.props.rowData.purchasePrice}
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span style={{ float: "left" }}>
                                                    Basis Purchase Calc Price
                                                </span>

                                                <span style={{ float: "right" }}>
                                                    {this.props.rowData.basisPurchaseCalcPrice}
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span style={{ float: "left" }}>
                                                    Real Inventory
                                                </span>

                                                <span style={{ float: "right" }}>
                                                    {this.props.rowData.realInventory}
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>

                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <Col>
                                <Table className="TableData">
                                    <thead className="TableDataHeader">
                                        <tr>
                                            <th>Master Data :</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <span style={{ float: "left" }}>
                                                    Supplier
                                                </span>

                                                <span style={{ float: "right" }}>
                                                    <Input value={this.props.rowData.Supplier} />

                                                </span>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <span style={{ float: "left" }}>
                                                    Seller
                                                </span>

                                                <span style={{ float: "right" }}>
                                                    <Input value={this.props.rowData.Seller} />
                                                </span>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <span style={{ float: "left" }}>
                                                    SKU
                                                </span>

                                                <span style={{ float: "right" }}>
                                                    <Input value={this.props.rowData.SKU} />
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span style={{ float: "left" }}>
                                                    Item Condition
                                                </span>

                                                <span style={{ float: "right" }}>
                                                    <Input value={this.props.rowData.itemCondition} />
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span style={{ float: "left" }}>
                                                    EAN
                                                </span>

                                                <span style={{ float: "right" }}>
                                                    <Input value={this.props.rowData.EAN} />
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span style={{ float: "left" }}>
                                                    Purchase Price
                                                </span>

                                                <span style={{ float: "right" }}>
                                                    <Input value={this.props.rowData.purchasePrice} />
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span style={{ float: "left" }}>
                                                    Basis Purchase
                                                </span>

                                                <span style={{ float: "right" }}>
                                                    <Input value={this.props.rowData.basisPurchaseCalcPrice} />
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span style={{ float: "left" }}>
                                                    Real Inventory
                                                </span>

                                                <span style={{ float: "right" }}>
                                                    <Input value={this.props.rowData.realInventory} />
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span style={{ float: "left" }}>
                                                    Show Inventory
                                                </span>

                                                <span style={{ float: "right" }}>
                                                    <Input value={this.props.rowData.showInventory} />
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span style={{ float: "left" }}>
                                                    Selling Price
                                                </span>

                                                <span style={{ float: "right" }}>
                                                    <Input value={this.props.rowData.sellingPrice} />
                                                </span>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <span style={{ float: "left" }}>
                                                    Selling Price
                                                </span>

                                                <span style={{ float: "right" }}>
                                                    <Input value={this.props.rowData.sellingPriceNoShip} />
                                                </span>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <span style={{ float: "left" }}>
                                                    Net Ship Cost
                                                </span>

                                                <span style={{ float: "right" }}>
                                                    <Input value={this.props.rowData.netShipCost} />
                                                </span>
                                            </td>
                                        </tr>

                                    </tbody>
                                </Table>
                            </Col>
                            <Col>
                                <Table className="TableData">
                                    <thead className="TableDataHeader">
                                        <tr>
                                            <th>Price and Stock :</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <span style={{ float: "left" }}>
                                                    Supplier
                                                </span>

                                                <span style={{ float: "right" }}>
                                                    <Input value={this.props.rowData.Supplier} />

                                                </span>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <span style={{ float: "left" }}>
                                                    Seller
                                                </span>

                                                <span style={{ float: "right" }}>
                                                    <Input value={this.props.rowData.Seller} />
                                                </span>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <span style={{ float: "left" }}>
                                                    SKU
                                                </span>

                                                <span style={{ float: "right" }}>
                                                    <Input value={this.props.rowData.SKU} />
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span style={{ float: "left" }}>
                                                    Item Condition
                                                </span>

                                                <span style={{ float: "right" }}>
                                                    <Input value={this.props.rowData.itemCondition} />
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span style={{ float: "left" }}>
                                                    EAN
                                                </span>

                                                <span style={{ float: "right" }}>
                                                    <Input value={this.props.rowData.EAN} />
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span style={{ float: "left" }}>
                                                    Purchase Price
                                                </span>

                                                <span style={{ float: "right" }}>
                                                    <Input value={this.props.rowData.purchasePrice} />
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span style={{ float: "left" }}>
                                                    Basis Purchase
                                                </span>

                                                <span style={{ float: "right" }}>
                                                    <Input value={this.props.rowData.basisPurchaseCalcPrice} />
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span style={{ float: "left" }}>
                                                    Real Inventory
                                                </span>

                                                <span style={{ float: "right" }}>
                                                    <Input value={this.props.rowData.realInventory} />
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span style={{ float: "left" }}>
                                                    Show Inventory
                                                </span>

                                                <span style={{ float: "right" }}>
                                                    <Input value={this.props.rowData.showInventory} />
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span style={{ float: "left" }}>
                                                    Selling Price
                                                </span>

                                                <span style={{ float: "right" }}>
                                                    <Input value={this.props.rowData.sellingPrice} />
                                                </span>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <span style={{ float: "left" }}>
                                                    Selling Price
                                                </span>

                                                <span style={{ float: "right" }}>
                                                    <Input value={this.props.rowData.sellingPriceNoShip} />
                                                </span>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <span style={{ float: "left" }}>
                                                    Net Ship Cost
                                                </span>

                                                <span style={{ float: "right" }}>
                                                    <Input value={this.props.rowData.netShipCost} />
                                                </span>
                                            </td>
                                        </tr>

                                    </tbody>
                                </Table>
                            </Col>
                            <Col>
                                <Table className="TableData">
                                    <thead className="TableDataHeader">
                                        <tr>
                                            <th>Additional product information :</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <span style={{ float: "left" }}>
                                                    Supplier
                                                </span>

                                                <span style={{ float: "right" }}>
                                                    <Input value={this.props.rowData.Supplier} />

                                                </span>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <span style={{ float: "left" }}>
                                                    Seller
                                                </span>

                                                <span style={{ float: "right" }}>
                                                    <Input value={this.props.rowData.Seller} />
                                                </span>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <span style={{ float: "left" }}>
                                                    SKU
                                                </span>

                                                <span style={{ float: "right" }}>
                                                    <Input value={this.props.rowData.SKU} />
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span style={{ float: "left" }}>
                                                    Item Condition
                                                </span>

                                                <span style={{ float: "right" }}>
                                                    <Input value={this.props.rowData.itemCondition} />
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span style={{ float: "left" }}>
                                                    EAN
                                                </span>

                                                <span style={{ float: "right" }}>
                                                    <Input value={this.props.rowData.EAN} />
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span style={{ float: "left" }}>
                                                    Purchase Price
                                                </span>

                                                <span style={{ float: "right" }}>
                                                    <Input value={this.props.rowData.purchasePrice} />
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span style={{ float: "left" }}>
                                                    Basis Purchase
                                                </span>

                                                <span style={{ float: "right" }}>
                                                    <Input value={this.props.rowData.basisPurchaseCalcPrice} />
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span style={{ float: "left" }}>
                                                    Real Inventory
                                                </span>

                                                <span style={{ float: "right" }}>
                                                    <Input value={this.props.rowData.realInventory} />
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span style={{ float: "left" }}>
                                                    Show Inventory
                                                </span>

                                                <span style={{ float: "right" }}>
                                                    <Input value={this.props.rowData.showInventory} />
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span style={{ float: "left" }}>
                                                    Selling Price
                                                </span>

                                                <span style={{ float: "right" }}>
                                                    <Input value={this.props.rowData.sellingPrice} />
                                                </span>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <span style={{ float: "left" }}>
                                                    Selling Price
                                                </span>

                                                <span style={{ float: "right" }}>
                                                    <Input value={this.props.rowData.sellingPriceNoShip} />
                                                </span>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <span style={{ float: "left" }}>
                                                    Net Ship Cost
                                                </span>

                                                <span style={{ float: "right" }}>
                                                    <Input value={this.props.rowData.netShipCost} />
                                                </span>
                                            </td>
                                        </tr>

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
                                                    <img className='FlagLogo' src={require("../../assets/images/united-kingdom.png")} ></img>
                                                    <span style={{ marginLeft: "5px" }}></span>
                                                    <img className='FlagLogo' src={require("../../assets/images/ivory-coast.png")} ></img>
                                                    <span style={{ marginLeft: "5px" }}></span>
                                                    <img className='FlagLogo' src={require("../../assets/images/france.png")} ></img>
                                                    <span style={{ marginLeft: "5px" }}></span>
                                                    <img className='FlagLogo' src={require("../../assets/images/equatorial-guinea.png")} ></img>
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
                                                <img className="ProductImage" src={require("../../assets/images/shoes.png")} ></img>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>

                                <Table className="TableData">
                                    <thead className="TableDataHeader">
                                        <tr>
                                            <th>Product feature:</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <span style={{ float: "left" }}>
                                                    Supplier
                                                </span>

                                                <span style={{ float: "right" }}>
                                                    <Input value={this.props.rowData.Supplier} />

                                                </span>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <span style={{ float: "left" }}>
                                                    Seller
                                                </span>

                                                <span style={{ float: "right" }}>
                                                    <Input value={this.props.rowData.Seller} />
                                                </span>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <span style={{ float: "left" }}>
                                                    SKU
                                                </span>

                                                <span style={{ float: "right" }}>
                                                    <Input value={this.props.rowData.SKU} />
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span style={{ float: "left" }}>
                                                    Item Condition
                                                </span>

                                                <span style={{ float: "right" }}>
                                                    <Input value={this.props.rowData.itemCondition} />
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span style={{ float: "left" }}>
                                                    EAN
                                                </span>

                                                <span style={{ float: "right" }}>
                                                    <Input value={this.props.rowData.EAN} />
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span style={{ float: "left" }}>
                                                    Purchase Price
                                                </span>

                                                <span style={{ float: "right" }}>
                                                    <Input value={this.props.rowData.purchasePrice} />
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span style={{ float: "left" }}>
                                                    Basis Purchase
                                                </span>

                                                <span style={{ float: "right" }}>
                                                    <Input value={this.props.rowData.basisPurchaseCalcPrice} />
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span style={{ float: "left" }}>
                                                    Real Inventory
                                                </span>

                                                <span style={{ float: "right" }}>
                                                    <Input value={this.props.rowData.realInventory} />
                                                </span>
                                            </td>
                                        </tr>
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