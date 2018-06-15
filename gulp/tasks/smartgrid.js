'use strict';

module.exports = function () {
    $.gulp.task('smartgrid', function () {
        /* It's principal settings in smart grid project */
        var settings = {
            outputStyle: 'scss',
            /* less || scss || sass || styl */
            columns: 12,
            /* number of grid columns */
            offset: "20px",
            /* gutter width px || % */
            container: {
                maxWidth: '1900px',
                /* max-width оn very large screen */
                fields: '10px' /* side fields */
            },
            breakPoints: {
                lg: {
                    'width': '1200px',
                    /* -> @media (max-width: 1100px) */
                    'fields': '10px' /* side fields */
                },
                md: {
                    'width': '992px',
                    'fields': '10px'
                },
                sm: {
                    'width': '760px',
                    'fields': '10px'
                },
                xs: {
                    'width': '480px',
                    'fields': '10px'
                }
                /* 
                We can create any quantity of break points.

                some_name: {
                    some_width: 'Npx',
                    some_offset: 'N(px|%)'
                }
                */
            }
        };

        $.smartgrid('./source/style/layout', settings);
    });


};