"use strict";

import Task from "./task";

export default class Spell {
    constructor() {
        this.spellWindowConteiner = document.getElementById('spellWindowConteiner');
        this.attackSpellAudio = new Audio('audio/attackSpellAudio.mp3');
        this.deadAudio = new Audio('audio/deadAudio.mp3');
        this.healthAudio = new Audio('audio/healthAudio.mp3');
    }

    spellRender() {
        this.spellWindowConteiner.style.display = "flex";
    }

    attackSpellAudioPlay() {
        this.attackSpellAudio.play();
    }

    deadAudioPlay() {
        this.deadAudio.play();
    }

    healthAudioPlay() {
        this.healthAudio.play();
    }

}