import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return {items: [ 
            {title: "hello world", price: 11.99, quantity: 1}, 
            {title: "hello world", price: 11.99, quantity: 1}
        ]};
    },
    actions: {
        
    }
});
