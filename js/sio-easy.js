
function prepareGhostImages()
{
    $('.img-ghost').each(function(){
        $(this).parent().css({'background-image':'url('+$(this).attr('src')+')'});
    });
}


$(document).ready(function($){
    prepareGhostImages();
});