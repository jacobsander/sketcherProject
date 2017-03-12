var mode;

function drawGrid(squaresPerSide) {

    //Add rows
    for (var i = 0; i < squaresPerSide; i++) {
        $('#sketchpad').append('<div class="row"></div>');
    }

    //Fill rows
    for (var i = 0; i < squaresPerSide; i++) {
        $('.row').append('<div class="square"></div>');
    }

    //Set square sizes
    var squareDimension = $('#sketchpad').width() / squaresPerSide;
    $('.square').css({
        'height': squareDimension,
        'width': squareDimension
    });
}

function setMode(newMode) {
    mode = newMode;
    $('#' + newMode).addClass('selectedMode').siblings().removeClass('selectedMode');
}

$(document).ready(function() {

    //Set up
    var squaresPerSide = 16;
    drawGrid(squaresPerSide);
    setMode('pen');

    //Draw!
    $('#sketchpad').on('mouseenter', '.square', function() {
        var opacity = +$(this).css('opacity');
        switch (mode) {
            case 'pen':
                $(this).css({
                    'opacity': 1,
                    'background-color': 'black'
                });
                break;
            
            case 'rainbow':
                var r = Math.floor(Math.random() * 256);
                var g = Math.floor(Math.random() * 256);
                var b = Math.floor(Math.random() * 256);
                $(this).css({
                    'opacity': 1,
                    'background-color': 'rgb(' + r + ',' + g + ',' + b + ')'
                });
                break;
            case 'eraser':
                if (opacity > 0) {
                    $(this).css({
                        'opacity': opacity - .2
                    });
                }     
                   
        }
    });

    //Change mode
    $('#modes').on('click', 'button', function() {
        setMode($(this).attr('id'));
    });
});