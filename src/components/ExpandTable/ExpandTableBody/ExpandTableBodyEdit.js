import React from 'react'
import { Input } from 'reactstrap';

const expandTableBodyEdit = (props) => {
    return (
        <tr>
            <td>
                <span style={{ float: "left" }}>
                {props.head}
                                                </span>

                <span style={{ float: "right" }}>
                    <Input value={props.rowData} />

                </span>
            </td>
        </tr>
    )
}

export default expandTableBodyEdit