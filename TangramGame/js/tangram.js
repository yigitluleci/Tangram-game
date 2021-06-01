$(document).ready(function() {
        
    $('.block').draggable({
        containment:'window',
        stack: '.block',
        snap: true,
        snapMode: 'outer',
        snapTolerance: 13,
    });
    $('.parallelogram').draggable({
        containment:'window',
        stack: '.block',
        snap: true,
        snapMode: 'outer',
        snapTolerance: 13,
    });
// Make blocks rotate 15 deg on each click
    var angle = 15;    

    $('.block').click(function() {
       
        $(this).css ({
            '-webkit-transform': 'rotate(' + angle + 'deg)',
               '-moz-transform': 'rotate(' + angle + 'deg)',
                 '-o-transform': 'rotate(' + angle + 'deg)',
                '-ms-transform': 'rotate(' + angle + 'deg)'
        });
        angle+=15;
    });
});