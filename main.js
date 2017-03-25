( function ( glob ) {

    var
        ot  = document.getElementById ( 'options-table' ),
        img = document.getElementById ( 'image'         ),
        css = document.getElementById ( 'css-side-p'    )
    ;

    const options = [
        {
            fname : 'blur',
            dflt  : 0,
            min   : 0,
            max   : 100,
            unit  : 'px'
        },
        {
            fname : 'brightness',
            dflt  : 100,
            min   : 0,
            max   : 500,
            unit  : '%'
        },
        {
            fname : 'grayscale',
            dflt  : 0,
            min   : 0,
            max   : 100,
            unit  : '%'
        },
        {
            fname : 'hue-rotate',
            dflt  : 0,
            min   : 0,
            max   : 360,
            unit  : 'deg'
        },
        {
            fname : 'invert',
            dflt  : 0,
            min   : 0,
            max   : 100,
            unit  : '%'
        },
        {
            fname : 'opacity',
            dflt  : 100,
            min   : 0,
            max   : 100,
            unit  : '%'
        },
        {
            fname : 'saturate',
            dflt  : 100,
            min   : 0,
            max   : 500,
            unit  : '%'
        },
        {
            fname : 'sepia',
            dflt  : 0,
            min   : 0,
            max   : 100,
            unit  : '%'
        }
    ];

    makeOptionsTable ( ot, img, css, options );

} ( window ) );
