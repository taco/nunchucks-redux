import { ProductListing } from './product-listing';

import { VNode, VText, patch, diff, create } from 'virtual-dom';
import htmlToVdom from 'html-to-vdom';

import $ from 'jquery';

import store from './store';
import { addProduct } from './actions';

const convert = htmlToVdom({ VNode, VText });

let rootNode;
let tree;

$(() => {
    rootNode = document.getElementById('mount');

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

    const newTree = convert(html);

    if (tree) {
        const patches = diff(tree[0], newTree[0]);
        console.log(patches);
        rootNode = patch(rootNode, patches);
    }
    else {
        rootNode = create(newTree[0]);
        $('#mount').append(rootNode);
        $('#add').on('submit', handleSubmit);
    }

    tree = newTree;
};
