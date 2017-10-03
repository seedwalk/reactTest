function borrarCliente(index) {
    return {
        type: 'DELETE_CLIENT',
        payload: index
    };
}

function agregarCliente(client) {
    return {
        type: 'ADD_CLIENT',
        payload: client
    };
} 

export default {
    borrarCliente,
    agregarCliente
}