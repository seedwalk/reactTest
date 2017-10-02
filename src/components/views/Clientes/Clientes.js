import React, { Component } from 'react';
import TableList from '../../modules/TableList/TableList';

class Clientes extends Component {

    constructor(props){
        super(props);
        this.state ={
            activeClient: 'Nothing selected'
        };
        
        this.handleRowClick = this.handleRowClick.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleRowClick(rowData) {
        const newState = {
            activeClient: rowData.name+' '+rowData.lastName+' '+rowData.tel
        }
        this.setState(newState)
    }

    handleDelete(event) {
        event.stopPropagation();
        const phoneNumber = event.target.attributes['attr-data'].value;
        this.props.borrarCliente(phoneNumber);
    }

    render() {
        return (
            <div className="container">
                <TableList handleRowClick={this.handleRowClick} handleDelete={this.handleDelete} tableData={this.props.clientList} />
                <p>Result: {this.state.activeClient}</p>
            </div>
        );
    }
}


export default Clientes;
    

