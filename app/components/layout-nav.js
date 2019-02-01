import Component from '@ember/component';

export default Component.extend({
    actions: {
        handleBurger() {
            const burger = document.querySelector('.navbar-burger');
            const menu = document.querySelector('.navbar-menu');
            if (burger && menu) {
                burger.classList.toggle('is-active');
                menu.classList.toggle('is-active');
            }
        }
    }
});
