/**
 * Created by pavel on 11/17/13.
 */

var DEFAULTS = {
    'cs' : 'Tak tohle je paráda',
    'en' : 'Well, this is cool'
};

// connect Speaker to the input form
$('form').submit(function(e) {

    e.preventDefault();

    var speech = $('input:text').val();
    var lang = $('input:radio[name=lang]:checked').val();

    console.log('Speaking in ' + lang + ': ' + speech);
    var speaker = new Speaker();
    speaker.speak(speech, lang);


});

var fillLanguageSentence = function(language) {
    var speechInput = $('input:text');
    if (DEFAULTS[language]) {
        speechInput.val(DEFAULTS[language]);
    }
}

// make sure Czech input will not contain the original phrase by default
$( "input[type=radio]" ).change(function(e) {
    fillLanguageSentence(e.target.id);
});
$(document).ready(function() {
    fillLanguageSentence('en');
});