import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return ['Hello', 'world', 'ya', 'mum'];
    }
});
