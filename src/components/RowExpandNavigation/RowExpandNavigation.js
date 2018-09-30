import React from 'react'
import { NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';

const rowExpandNavigation = (props) => {
    return (
        <NavItem>
            <NavLink
                className={classnames({ active: props.activeTab === props.tabValue })}
                onClick={() => { props.clicked(props.tabValue); }}
            >
                {props.children}
            </NavLink>
        </NavItem>
    );
}

export default rowExpandNavigation