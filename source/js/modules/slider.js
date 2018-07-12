module.exports = function() {
    const slickSlider = require('slick-carousel');
    const $ = require('jquery');    
    const dots = [
        {
            dot: 'dot-1'
        },
        {
            dot: 'dot-2'
        },
        {
            dot: 'dot-3'
        }
    ];
    let i = 0;
        // INDEX SlIDER
    $('.js-index-slider').slick({
        arrows: false,
        dots: true,
        customPaging : function() {
                return `<a class="index-slider__dots">${dots[i++].dot}</a>`;
        },
        vertical: true,
    });
}