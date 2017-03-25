( function ( glob ) {

    var
        asideArrow   = document.getElementById ( 'aside-arrow'    ),
        asideMenu    = document.getElementById ( 'aside-menu'     ),
        asideContent = document.getElementById ( 'aside-content'  )
    ;

    const toggles = [
        // Aside
        {
            toggler   : asideArrow,
            toggled   : asideMenu,
            className : 'open'
        },
        {
            toggler   : asideArrow,
            toggled   : asideArrow,
            className : 'close'
        },
        {
            toggler   : asideMenu,
            toggled   : asideMenu,
            className : 'open'
        },
        {
            toggler   : asideMenu,
            toggled   : asideArrow,
            className : 'close'
        },

        // Sides
        {
            toggler   : document.getElementById ( 'toggle-img-side' ),
            toggled   : document.getElementById ( 'img-side'        ),
            className : 'display-none'
        },
        {
            toggler   : document.getElementById ( 'toggle-options-side' ),
            toggled   : document.getElementById ( 'options-side'        ),
            className : 'display-none'
        },
        {
            toggler   : document.getElementById ( 'toggle-css-side' ),
            toggled   : document.getElementById ( 'css-side'        ),
            className : 'display-none'
        }
    ];

    toggleClass = function ( elem, className ) {
        if ( elem.classList.contains ( className ) )
            elem.classList.remove ( className );
        else
            elem.className += " " + className;
    };

    for ( let i = 0, l = toggles.length; i < l; i ++ )
        toggles [ i ].toggler.addEventListener ( 'click', () =>
            toggleClass ( toggles [ i ].toggled, toggles [ i ].className )
        , false );

    asideContent.addEventListener ( 'click', e =>
        ( e || window.event ).stopPropagation ()
    , false );

} ( window ) );
