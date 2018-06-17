"use strict";

export default class Score {
    constructor() {
        this.scoreTable = document.getElementById('scoreTable');
    }

    render() {
        this.scoreTable.innerHTML = "";
        this.localObjectCollection = Object.entries(localStorage).sort((a, b) => b[1] - a[1]);
        console.log(this.localObjectCollection);
        if (this.localObjectCollection.length > 10) {
            this.localObjectCollection.splice(10);
        }
        this.localObjectCollection.forEach(player => {
            this.playerScoreInfoRow = document.createElement("tr");
            this.playerScoreFullName = document.createElement("td");
            this.playerScoreRound = document.createElement("td");
            this.scoreTable.appendChild(this.playerScoreInfoRow);
            this.playerScoreInfoRow.appendChild(this.playerScoreFullName);
            this.playerScoreInfoRow.appendChild(this.playerScoreRound);
            this.playerScoreFullName.innerHTML = player[0];
            if (player[1] == 1) {
                this.playerScoreRound.innerHTML = player[1] + " " + "Monster";
            } else {
                this.playerScoreRound.innerHTML = player[1] + " " + "Monsters";
            }
        });
    }

}