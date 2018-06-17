"use strict";

const _ = require('lodash');
import {
    translateWordLibrary
} from "./wordTranslateLibrary";

export default class Task {
    constructor() {
        this.taskWindowConteiner = document.getElementById('taskWindowConteiner');
        this.mediaBlock = document.getElementById('mediaBlock');
        this.task = document.getElementById('taskHeading');
        this.mathOperationsCollection = ['+', '-', '*', '/'];
        this.taskCollection = [this.mathTask, this.transateEngTask, this.listeningTask];
    }

    random() {
        this.taskRandomResult = this.taskCollection[_.random(0, this.taskCollection.length - 1)];
        this.taskRandomResult.call(this);
    }

    mathTask() {
        this.mediaBlock.innerHTML = "";
        this.taskWindowConteiner.style.display = "flex";
        this.mathOperationsCollectionIndex = _.random(0, this.mathOperationsCollection.length - 1);
        if (this.mathOperationsCollectionIndex === 3) {
            this.taskExpression = (_.random(0, 50) + _.random(0, 50)) + " " + "/" + " " + 2;
        } else if (this.mathOperationsCollectionIndex === 2) {
            this.taskExpression = _.random(0, 50) + " " + "*" + " " + 3;
        } else {
            this.taskExpression = _.random(0, 50) + " " + this.mathOperationsCollection[this.mathOperationsCollectionIndex] + " " + _.random(0, 50);
        }
        this.task.innerHTML = "Solve The Task: " + '\"' + this.taskExpression + '\"';
        this.taskExpressionResult = [String(eval(this.taskExpression))];
    }

    transateEngTask() {
        this.mediaBlock.innerHTML = "";
        this.taskWindowConteiner.style.display = "flex";
        this.randomWord = Object.keys(translateWordLibrary)[_.random(0, Object.keys(translateWordLibrary).length - 1)];
        this.task.innerHTML = "Translate the word: " + '\"' + this.randomWord + '\"';
        this.transateTaskResult = translateWordLibrary[this.randomWord];
    }


    listeningTask() {
        this.mediaBlock.innerHTML = "<button class=\"play-btn\">Play</button>";
        this.taskWindowConteiner.style.display = "flex";
        this.task.innerHTML = '\"' + "Type what you heard" + '\"';
        this.message = Object.keys(translateWordLibrary)[_.random(0, Object.keys(translateWordLibrary).length - 1)];
        this.listeningTaskResult = this.message;
        document.querySelector(".play-btn").onclick = () => {
            console.log(this.message);
            var msg = new SpeechSynthesisUtterance(this.message);
            var voices = window.speechSynthesis.getVoices();
            msg.voice = voices[6];
            window.speechSynthesis.speak(msg);
        }
    }

    getTaskResult() {
        if (this.taskRandomResult === this.mathTask) {
            return this.taskExpressionResult;
        } else if (this.taskRandomResult === this.transateEngTask) {
            return this.transateTaskResult;
        } else if (this.taskRandomResult === this.listeningTask) {
            return this.listeningTaskResult;
        }
    }

}