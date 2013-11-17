/**
 * Created by pavel on 11/17/13.
 */

Speaker = (function() {

    this.DEFAULT_LANGUAGE = 'en';

    this.speak = function(speech, language) {
        if (!language) {
            language = this.DEFAULT_LANGUAGE;
        }
        var url = 'http://translate.google.com/translate_tts?tl=' + language + '&q=' + speech;
        $('body').append('<audio />');
        $("audio").attr("src", url);
        document.getElementsByTagName('audio')[0].play();
    }

    return this;

}(jQuery));
