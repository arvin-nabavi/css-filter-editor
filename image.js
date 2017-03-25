( function ( glob ) {

    const initalImageUrl = "img.jpg";

    var
        imgInput = document.getElementById ( 'img-src'  ),
        imgFile  = document.getElementById ( 'img-file' ),
        imgSelf  = document.getElementById ( 'image'    )
    ;

    glob.syncImageUrl = function () {
        imgSelf.setAttribute (
            'src',
            imgInput.value
        );
    };

    // Opening image files
    imgFile.addEventListener ( 'change', function () {
        if ( imgFile.files && imgFile.files [ 0 ] ) {
            var reader = new FileReader ();

            reader.onload = function ( e ) {
                imgInput.value = ':D';
                imgSelf.setAttribute (
                    'src',
                    e.target.result
                );
            }

            reader.readAsDataURL ( imgFile.files [ 0 ] );
        }
    }, false );

    glob.syncImageUrl.reset = function () {
        imgInput.value = initalImageUrl;
        syncImageUrl ();
    };

    // For initialization
    syncImageUrl.reset ();

} ( window ) );
