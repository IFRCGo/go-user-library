import React from 'react'
import {useTable, useSortBy} from 'react-table'

import makeData from '../../utils/makeData'

function Table({columns, data}) {
    // Use the state and functions returned from useTable to build your UI
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        rows,
        prepareRow,
    } = useTable(
        {
            columns,
            data,
        },
        useSortBy
    )

    console.log(columns[0].Footer);

    // Render the UI for your table
    return (
        <table className='tc-table table table--border-bottom'>
            <thead>
            {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                        // Add the sorting props to control sorting. For this example
                        // we can add them into the header props
                        <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                            {column.render('Header')}
                            {/* Add a sort direction indicator */}
                            <span>
                    {column.isSorted
                        ? column.isSortedDesc
                            ? <span className='f-icon-chevron-down font-size-sm spacing-half-r'></span>
                            : <span className='f-icon-chvron-up font-size-sm spacing-half-r'></span>
                        : ''}
                  </span>
                        </th>
                    ))}
                </tr>
            ))}
            </thead>
            <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
                prepareRow(row)
                return (
                    <tr {...row.getRowProps()}>
                        {row.cells.map(cell => {
                            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                        })}
                    </tr>
                )
            })}
            </tbody>
            {(() => {
                if (columns[0].Footer) {
                    return (
                        <tfoot>
                                {footerGroups.map(group => (
                                    <tr {...group.getFooterGroupProps()}>
                                        {group.headers.map(column => (
                                            <td {...column.getFooterProps()}>{column.render('Footer')}</td>
                                        ))}
                                    </tr>
                                ))}
                        </tfoot>
                    );
                }
            })()}
        </table>
    )
}

function DisplayTable(props) {

    const type = props.type;
    let columns = props.columns;
    let rows = props.rows;

    //EXAMPLE TABLE CODE
    // if (type === "memo") {
    //      columns = React.useMemo(
    //         () => [
    //             {
    //                 Header: 'Name',
    //                 Footer: 'Name',
    //                 columns: [
    //                     {
    //                         Header: 'First Name',
    //                         accessor: 'firstName',
    //                         Footer: 'First Name',
    //                     },
    //                     {
    //                         Header: 'Last Name',
    //                         accessor: 'lastName',
    //                         Footer: 'Last Name',
    //                     },
    //                 ],
    //             },
    //             {
    //                 Header: 'Info',
    //                 Footer: 'Info',
    //                 columns: [
    //                     {
    //                         Header: 'Age',
    //                         accessor: 'age',
    //                         Footer: 'Age',
    //                     },
    //                     {
    //                         Header: 'Visits',
    //                         accessor: 'visits',
    //                         Footer: info => {
    //                             // Only calculate total visits if rows change
    //                             const total = React.useMemo(
    //                                 () =>
    //                                     info.rows.reduce((sum, row) => row.values.visits + sum, 0),
    //                                 [info.rows]
    //                             )
    //
    //                             return <>Total: {total}</>
    //                         },
    //                     },
    //                     {
    //                         Header: 'Status',
    //                         accessor: 'status',
    //                         Footer: 'Status',
    //                     },
    //                     {
    //                         Header: 'Profile Progress',
    //                         accessor: 'progress',
    //                         Footer: 'Profile Progress',
    //                     },
    //                 ],
    //             },
    //         ],
    //         []
    //     )
    //     rows = React.useMemo(() => makeData(20), [])
    // }

    return (
        <Table columns={columns} data={rows}/>
    )
}

export default DisplayTable
