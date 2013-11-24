/**
 * Created by pavel on 11/17/13.
 */

function Speaker() {
    this.defaultLanguage = 'en';
    this.audioElementId = 'speaker_audio_element';
    this.audioContainerId = 'audio_container';
};

Speaker.prototype.speak = function(speech, language) {

    if (!language) {
        language = this.defaultLanguage;
    }

    var soundUrl = 'http://translate.google.com/translate_tts?tl=' + language + '&q=' + speech;

    var audioElement = document.getElementById(this.audioElementId);

    if (!audioElement) {
        audioElement = this.insertAudioElement();
    }

    audioElement.setAttribute("src", soundUrl);
    audioElement.play();

};

Speaker.prototype.insertAudioElement = function () {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('id', this.audioElementId);

    var container = document.getElementById(this.audioContainerId);
    container.innerHTML = audioElement;

    return audioElement;
};