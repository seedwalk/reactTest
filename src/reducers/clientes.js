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
      case 'ADD_CLIENT': {
        const newState = state.slice(0);
        newState.push(action.payload);
        return newState;
      }
      case 'DELETE_CLIENT' : {
        const phoneNumber = action.payload
        const newState = state.filter((item)=> (item.tel !== phoneNumber))
        return newState;   
      }
      default: {
          return state;
      }
  }
} 

export default clientesReducer;