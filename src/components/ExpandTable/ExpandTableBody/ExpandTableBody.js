import React from 'react'


const expandTableBody = (props) => {
    return (
        <tr>
            <td>
                <span style={{ float: "left" }}>
                    {props.head}
                </span>

                <span style={{ float: "right" }}>
                    {props.rowData}
                </span>
            </td>
        </tr>
    )
}

export default expandTableBody