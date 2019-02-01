import Route from "@ember/routing/route";

export default Route.extend({
  model() {
    return {
      items: [
        { title: "hat", price: 11.99, quantity: 1 },
        { title: "bat", price: 31.99, quantity: 1 }
      ]
    };
  },
  actions: {}
});
