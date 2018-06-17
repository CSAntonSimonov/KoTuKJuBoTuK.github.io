"use strict";

import Monster from "./monster";

export default class Player {
  constructor() {
    this.firstName = document.getElementById('playerFirstName');
    this.lastName = document.getElementById('playerLastName');
    this.fullNameBlock = document.getElementById('playerName');
    this.playerBlock = document.getElementById('playerBlock');
    this.healthPointsBlock = document.getElementById('playerHealthPoints');
    this.hpGreenLine = document.getElementById('playerHpGreenLine');
    this.healthPoints = 0;
    this.healthPointsLine = 0;
    this.monster = new Monster();
  }

  render() {
    this.fullNameBlock.innerHTML = this.firstName.value + " " + this.lastName.value;
    this.healthPointsBlock.innerHTML = `${this.healthPoints}hp`;
    if (this.healthPoints === 100) {
      this.hpGreenLine.classList.add('character-health-render');
    }
    this.playerBlock.classList.remove('player-dead-sprite');
    this.playerBlock.classList.add('player-idle-sprite');
    this.playerBlock.classList.remove('player-dead-animation');
    this.playerBlock.classList.remove('player-damage-animation');
    this.playerBlock.classList.remove('player-attack-animation');
    this.playerBlock.classList.add('player-idle-animation');
  }

  attack() {
    this.playerBlock.classList.remove('player-idle-sprite');
    this.playerBlock.classList.add('player-attack-sprite');
    this.playerBlock.classList.remove('player-idle-animation');
    this.playerBlock.classList.add('player-attack-animation');
    setTimeout(() => {
      this.playerBlock.classList.remove('player-attack-sprite');
      this.playerBlock.classList.add('player-idle-sprite');
      this.playerBlock.classList.remove('player-attack-animation');
      this.playerBlock.classList.add('player-idle-animation');
    }, 1500)
  }

  damage() {
    this.playerBlock.classList.remove('player-idle-sprite');
    this.playerBlock.classList.add('player-damage-sprite');
    this.playerBlock.classList.remove('player-idle-animation');
    this.playerBlock.classList.add('player-damage-animation');
    setTimeout(() => {
      this.playerBlock.classList.remove('player-damage-sprite');
      this.playerBlock.classList.add('player-idle-sprite');
      this.playerBlock.classList.remove('player-damage-animation');
      this.playerBlock.classList.add('player-idle-animation');
    }, 200)
  }

  dead() {
    this.playerBlock.classList.remove('player-idle-sprite');
    this.playerBlock.classList.add('player-dead-sprite');
    this.playerBlock.classList.add('player-dead-animation');
    this.playerBlock.classList.remove('player-damage-animation');
    this.playerBlock.classList.remove('player-idle-animation');
  }

  healthDecrease() {
    this.healthPoints -= 20;
    this.healthPointsLine -= 50;
    this.healthPointsBlock.innerHTML = `${this.healthPoints}hp`;
    this.hpGreenLine.style.width = `${this.healthPointsLine}px`;
  }

  healthIncrease() {
    this.healthPoints += 20;
    this.healthPointsLine += 50;
    this.healthPointsBlock.innerHTML = `${this.healthPoints}hp`;
    this.hpGreenLine.style.width = `${this.healthPointsLine}px`;
  }
}