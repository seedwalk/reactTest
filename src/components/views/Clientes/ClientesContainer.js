// @vendors
import { connect } from 'react-redux';

// @components
import Clientes from './Clientes';
// @actions
import clientesActions from '../../../actions/clientes';

const mapStateToProps = (state) => ({
    clientList: state.clientesReducer
});

const mapDispatchToProps = ({
    borrarCliente: clientesActions.borrarCliente,
});

const ClientesContainer = connect(mapStateToProps, mapDispatchToProps)(Clientes);

export default ClientesContainer;
