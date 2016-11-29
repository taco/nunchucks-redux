export const addProduct = (name, code) => ({
    type: 'ADD_PRODUCT',
    product: { name, code }
});
