import Component from '@ember/component';

export default Component.extend({
    actions: {
        showRental(rental) {
            alert(rental);
        }
    }
});
