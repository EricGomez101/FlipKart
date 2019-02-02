import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return {
            items: [ 
            {id: 1, title: "hello world", price: 11.99, quantity: 1, image: 'assets/images/controller.png'}, 
            {id: 2, title: "hello world", price: 11.99, quantity: 1, image: 'assets/images/controller.png'},
            {id: 3, title: "hat", price: 999.99, quantity: 1, image: 'assets/images/controller.png'},
        ]};
    },
    actions: {
        incrementQuantity(item) {
            console.log(item.quantity + 1);
        }
    }
});
