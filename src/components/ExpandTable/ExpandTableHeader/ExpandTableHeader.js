import React from 'react'
import './ExpandTableHeader.css'

const expandTableHeader = (props) => {
    return (
        <thead className="TableDataHeader">
            <tr>
                <th>{props.header}</th>
            </tr>
        </thead>
    )
}

export default expandTableHeader