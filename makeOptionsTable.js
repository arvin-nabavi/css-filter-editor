( function ( glob ) {

    const cssPropName = 'filter'; // Must be camel-case
    var
        options = {}, // This is the source of truth
        ot, img, css,
        controls = {}, nums = {}, resets = {}
    ;

    /**
        * This is the main function which
        basicly wraps other fucntions.

        @param {HTMLElement} ot       The options table
        @param {HTMLElement} img      The image you are going to modify
        @param {Option[]}    _options An array of options
    */
    glob.makeOptionsTable = function ( _ot, _img, _css, _options ) {
        ot = _ot;
        img = _img;
        css = _css;

        var temp = _options.map ( o => { o.current = o.dflt; return o; } );
        for ( t of temp )
            options [ t.fname ] = t;

        makeTableHeadings ();
        for ( let key in options )
            addOption ( options [ key ] );
        setNumsAndControls ();

        applyChanges ();
    };

    glob.makeOptionsTable.update = function ( fname ) {
        var value = controls [ fname ].value;
        options [ fname ].current = value;
        nums [ fname ].innerHTML = u ( options [ fname ], 'current' );
        applyChanges ();
    };

    glob.makeOptionsTable.reset = function reset ( fname ) {
        if ( fname ) {
            controls [ fname ].value = options [ fname ].dflt;
            glob.makeOptionsTable.update ( fname );
        } else
            for ( let key in options )
                reset ( options [ key ].fname );
    };


    function makeTableHeadings () {
        ot.innerHTML = `
            <tr>
                <th>
                    FName
                </th>
                <th>
                    Range
                </th>
                <th>
                    Value
                </th>
                <th>
                    Actions
                </th>
            </tr>
        `;
    }

    function addOption ( option ) {
        ot.innerHTML += `
            <tr>
                <td>${ option.fname }</td>
                <td>
                    <input
                        type="range"
                        id="${ option.fname }-rng"
                        min="${ option.min }" max="${ option.max }"
                        value="${ option.current }" step="1"
                        oninput="makeOptionsTable.update ( '${ option.fname }' );"
                    />
                </td>
                <td id="${ option.fname }-num">${ u ( option, 'dflt' ) }</td>
                <td>
                    <button
                        id="${ option.fname }-rst"
                        onclick="makeOptionsTable.reset ( '${ option.fname }' );"
                    >
                        Reset
                    </button>
                </td>
            </tr>
        `;
    }

    function u ( opt, key ) {
        return opt [ key ] + opt.unit;
    }

    function setNumsAndControls () {
        var option;
        for ( var key in options ) {
            option = options [ key ];
            controls [ option.fname ] = document.getElementById ( option.fname + '-rng' );
            nums     [ option.fname ] = document.getElementById ( option.fname + '-num' );
            resets   [ option.fname ] = document.getElementById ( option.fname + '-rst' );
        }
    }


    /**
        * This function applies changes from the
        source of truth.
    */
    function applyChanges () {
        var ostring = '', o;
        for ( var key in options ) {
            o = options [ key ];
            ostring +=
                o.fname +
                "(" +
                u ( o, 'current' ) +
                ") "
            ;
        }
        img.style [ cssPropName ] = ostring;

        ostring = '', o = null;
        for ( let key in options ) {
            o = options [ key ];
            if ( o.dflt == o.current ) continue;
            ostring +=
                "<span class='func'>" + o.fname + "</span>" +
                "<span class='char'>(</span>" +
                "<span class='num'>" + o.current + "</span>" +
                "<span class='unit'>" + o.unit + "</span>" +
                "<span class='char'>)</span>" +
                " "
            ;
        }
        ostring = ostring.trim ();
        ostring = ostring ? ostring : "<span class='unit'>none</span>";
        ostring += "<span class='char'>;</span>";
        css.innerHTML =
            "<span class='prop'>" + cssPropName + "</span>" +
            "<span class='char'>: </span>" +
            ostring
        ;
    }

} ( window ) );
