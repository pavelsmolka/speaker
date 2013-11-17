/**
 * Created by pavel on 11/17/13.
 */

// connect Speaker to the input form
$('form').submit(function(e) {

    var speech = $('input:text').val();
    var lang = $('input:radio[name=lang]:checked').val();

    Speaker.speak(speech, lang);

    e.preventDefault();

});

// make sure Czech input will not contain the original phrase by default
$( "input[type=radio]" ).change(function(e) {
    var speechInput = $('input:text');
    if (e.target.id === 'cs' && speechInput.val() === 'This is amazing') {
        speechInput.val('Tak tohle je paráda');
    } else if (e.target.id === 'en' && speechInput.val() === 'Tak tohle je paráda') {
        speechInput.val('This is amazing');
    }
});