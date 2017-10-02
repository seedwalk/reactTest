function returnProduct(id){
    return {
        nombre: 'Producto'+id,
        Descripcion: 'Descripcion '+id,
    }
}

function returnProductList() {
    let productList = [];
    for (let i = 0; i<16; i++){
        productList.push(
            returnProduct(i));
    }
    return productList;
}

const initialState = [{
  	name: 'Jerry',
  	lastName: 'Seinfield',
    tel: '555-9143'
  }, {
  	name: 'George',
  	lastName: 'Costanza',
    tel: '555-6210'
  }, {
  	name: 'Elaine',
  	lastName: 'Benes',
    tel: '555-4040'
  }, {
  	name: 'Cosmo',
  	lastName: 'Kramer',
    tel: '	555-1111'
}];

function clientesReducer(state = initialState, action) {
  switch (action.type) {
      case 'ADD_PRODUCT': {
        let productList = state.productList;
        const nextId = productList.length;
        const nextProduct = returnProduct(nextId);

        const newState = Object.assign({}, state, {
            productList: [
                ...state.productList,
                nextProduct
            ]
        });

        return newState;

      }
      case 'DELETE_CLIENT' : {
        const phoneNumber = action.payload
        const newState = state.filter((item)=> (item.tel != phoneNumber))
        return newState;   
      }
      default: {
          return state;
      }
  }
} 

export default clientesReducer;