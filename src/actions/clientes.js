function borrarCliente(index) {
    return {
        type: 'DELETE_CLIENT',
        payload: index
    };
} 

export default {
    borrarCliente
}