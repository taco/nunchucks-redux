import { ProductListing } from './product-listing';

import $ from 'jquery';

import store from './store';
import { addProduct } from './actions';

$(() => {
    render();
});

const handleSubmit = e => {
    e.preventDefault();
    const [name, code] = $(e.target).serializeArray();

    store.dispatch(addProduct(name.value, code.value));
    render();
}

const render = () => {
    const html = ProductListing.render({
        items: store.getState().products
    });

    $('#mount').html(html);

    $('#add').on('submit', handleSubmit);
};
