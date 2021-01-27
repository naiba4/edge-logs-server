import React, { Component } from 'react'
import DataTable from 'react-data-table-component'
import { UIButton } from './Buttons'

interface ListProps {
  data: any[]
  getLog: Function
  loginUser: string
  loginPassword: string
}

class List extends Component<ListProps, {}> {
  cellFunction = (row: any, field: string): JSX.Element => {
    return (
      <UIButton
        onClick={() =>
          this.props.getLog({
            _id: row._id,
            loginUser: this.props.loginUser,
            loginPassword: this.props.loginPassword
          })
        }
        label={row[field]}
      />
    )
  }

  render(): JSX.Element {
    const columns = [
      {
        name: 'Log ID',
        selector: '_id',
        sortable: true,
        cell: row => this.cellFunction(row, '_id')
      },
      {
        name: 'Timestamp',
        selector: 'timestamp',
        sortable: true,
        cell: row => this.cellFunction(row, 'timestamp')
      },
      {
        name: 'OS',
        selector: 'OS',
        sortable: true,
        cell: row => this.cellFunction(row, 'OS')
      },
      {
        name: 'Device Type',
        selector: 'deviceInfo',
        sortable: true,
        cell: row => this.cellFunction(row, 'deviceInfo')
      },
      {
        name: 'User Message',
        selector: 'userMessage',
        sortable: true,
        cell: row => this.cellFunction(row, 'userMessage')
      }
    ]

    return (
      <>
        <DataTable
          columns={columns}
          data={this.props.data}
          defaultSortField="timestamp"
          noHeader
          pagination
          pointerOnHover
          highlightOnHover
        />
      </>
    )
  }
}
export default List
