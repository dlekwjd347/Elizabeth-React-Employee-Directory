import React, { useContext } from "react";
import TableBody from "../TableBody";
import "./style.css";
import DataAreaHook from '../../utils/dataHook';

const TableRow = () => {
    const hook = useContext(DataAreaHook);

    return (

        <div className="datatable mt-5">
            <table
                id="table"
                className="table table-striped table-hover table-condensed"
            >
                <thead>
                    <tr>
                        {hook.developerState.headings.map(({ name, width }) => {
                            return (
                                <th
                                    className="col"
                                    key={name}
                                    style={{ width }}
                                    onClick={() => {
                                        hook.handleSort(name.toLowerCase());
                                    }}
                                >
                                    {name}
                                    <span className="pointer"></span>
                                </th>
                            );
                        })}
                    </tr>
                </thead>

                <TableBody />
            </table>
        </div>
    );
}

export default TableRow;