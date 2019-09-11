$(document).ready(function(){
    $(window).on('scroll', function(){
        if($(window).scrollTop()>=100){
            $('.navbar').css({
                'background-color': 'rgba(0,0,0,0.5)',
                'padding-bottom': '5px'
            });
        }else{
            $('.navbar').css({
                'background-color': 'transparent',
            });
        }
    });
});

