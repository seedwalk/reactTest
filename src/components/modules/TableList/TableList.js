import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TableList extends Component {

  buildHeaders(headers) {
    headers.unshift('#')
    headers.push('Delete')
    const header = headers.map(( value , index) =>
        <th key={index}>{value}</th>
    );
    return header
  }


  buildRows(tableData, headers) {
    const rows = tableData.map(( row , index) => 
        <tr key={index} onClick={()=>this.props.handleRowClick(row)}>
            <td>{index}</td>
            {headers.map((header, index) =>
              <td key={index}>{row[header]}</td>
            )}
            <td><button className="btn btn-default" attr-data={row.tel} onClick={this.props.handleDelete}>Delete</button></td>
        </tr>
    );
    return rows;
  }

  buildTable(tableData) {
    const headers = Object.keys(tableData[0])
    const rows = this.buildRows(tableData, headers)
    const header = this.buildHeaders(headers);

    const toReturn = (
      <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                {header}
              </tr>
            </thead>
            <tbody>
              {rows}
            </tbody>
          </table>
        </div>
    );
    return toReturn
  }

  render() {
    let toReturn = (<p>No data to show</p>);
    const { tableData } = this.props;

    if (tableData.length > 0) {
      toReturn = this.buildTable(tableData);
    }

    return toReturn;
  }
}


TableList.propTypes = {
   tableData: PropTypes.array,
   handleRowClick: PropTypes.func,
   handleDelete: PropTypes.func
}
export default TableList;




