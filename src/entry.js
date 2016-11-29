import { ProductListing } from './product-listing';

document.addEventListener("DOMContentLoaded", () => {
    const html = ProductListing.render({
        items: [
            {
                name: 'Thing 1',
                code: 'thing-1'
            },
            {
                name: 'Food 2',
                code: 'food-2'
            }
        ]
    });

    document.getElementById('mount').innerHTML = html;
});
