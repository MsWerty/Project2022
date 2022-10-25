//с кнопкой

/*$('#okno').on ('click', (event) => {
    $('#okno').fadeOut(3000)
})

$('#knopka').on('click', (event) => {
    $('#okno').fadeIn(3000)     
})*/

//без кнопки
$('#okno').slideUp(3000, function (){
      $('#okno').slideDown(3000)
      
});