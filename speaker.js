/**
 * Created by pavel on 11/17/13.
 */

Speaker = (function($) {

    this.audioContainer = 'body';
    this.defaultLanguage = 'en';

    this.speak = function(speech, language) {

        if (!language) {
            language = this.defaultLanguage;
        }

        var soundUrl = 'http://translate.google.com/translate_tts?tl=' + language + '&q=' + speech;

        $('<audio />').appendTo(this.audioContainer).attr("src", soundUrl);

        document.getElementsByTagName('audio')[0].play();

        // the audio element should be reused or removed after

    };

    return this;

}(jQuery));
