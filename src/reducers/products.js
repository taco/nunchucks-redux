const initialState = {
    products: [
        { code: 'P1', name: 'Product 1' },
        { code: 'P2', name: 'Product 2' }
    ]
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            state.products.push(action.product);
            return state;
        default:
            return state;
    }
};
