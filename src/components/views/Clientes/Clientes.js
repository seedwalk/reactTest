import React, { Component } from 'react';
import TableList from '../../modules/TableList/TableList';

class Clientes extends Component {

    constructor(props){
        super(props);
        this.state ={
            activeClient: 'Nothing selected',
            newName: '',
            newLastName: '',
            newPhone: '',
        };
        
        this.handleAgregarCliente = this.handleAgregarCliente.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleRowClick = this.handleRowClick.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleAgregarCliente(event) {

        event.preventDefault();
        console.log('hola')
        const { newName, newLastName, newPhone } = this.state;
        if (newName.trim() !== '' && newLastName.trim() !== '' && newPhone.trim() !== '') {
            const nuevoCliente = {
                name: newName,
                lastName: newLastName,
                tel: newPhone
            }
            this.props.agregarCliente(nuevoCliente);    
        }
        
    }

    handleRowClick(rowData) {
        const newState = {
            activeClient: rowData.name+' '+rowData.lastName+' '+rowData.tel
        }
        this.setState(newState)
    }

    handleChange(e) {
        const newState = {
            [e.target.attributes.name.value] : e.target.value
        };
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
                <form>
                    <div className="row">
                        <div className="col">
                            <input type="text" className="form-control" name="newName" value={this.state.newName} placeholder="Nombre" onChange={this.handleChange} />
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" name="newLastName" value={this.state.newLastName} placeholder="Apellido" onChange={this.handleChange} />
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" name="newPhone" value={this.state.newPhone} placeholder="Telefono" onChange={this.handleChange} />
                        </div>
                        <div className="col">
                            <button className="btn btn-primary" onClick={this.handleAgregarCliente}>Agregar</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}


export default Clientes;
    

