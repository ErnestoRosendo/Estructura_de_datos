class Tortuga {
    constructor(name) {
      this.name = name;
      this.position = 0;
    }
    
    rollDice() {
      return Math.floor(Math.random() * 100) + 1;
    }
    
    move() {
      const roll = this.rollDice();
      if (roll > 70) {
        this.position += 1;
      } else if (roll > 45) {
        this.position -= 6;
      } else {
        this.position += 3;
      }
    }
  }
  

  class Liebre {
    constructor(name) {
      this.name = name;
      this.position = 0;
    }
    
    rollDice() {
      return Math.floor(Math.random() * 100) + 1;
    }
    
    move() {
      const roll = this.rollDice();
      if (roll > 80) {
        this.position += 0;
      } else if (roll > 60) {
        this.position += 9;
      } else if (roll > 50) {
        this.position -= 12;
      } else if (roll > 15) {
        this.position++;
      } else {
        this.position -= 2;
      }
    }
  }
  class Game {
    constructor(tortuga, liebre) {
      this.tortuga = new Tortuga(tortuga);
      this.liebre = new Liebre(liebre);
      this.turns = 0;
    }
    
    playTurn() {
      this.tortuga.move();
      this.liebre.move();
      this.turns++;
      console.log(`Turno ${this.turns}:`);
      console.log(`${this.tortuga.name} está en la posición ${this.tortuga.position}`);
      console.log(`${this.liebre.name} está en la posición ${this.liebre.position}`);
      console.log("-------------------");
    }
    
    play() {
      while (this.tortuga.position < 100 && this.liebre.position < 100) {
        this.playTurn();
      }
      
      console.log(`${this.tortuga.name} terminó en la posición ${this.tortuga.position}`);
      console.log(`${this.liebre.name} terminó en la posición ${this.liebre.position}`);
      
      if (this.tortuga.position >= 100 && this.liebre.position >= 100) {
        console.log("¡Empate!");
      } else if (this.tortuga.position >= 100) {
        console.log(`${this.tortuga.name} ganó en ${this.turns} turnos.`);
      } else {
        console.log(`${this.liebre.name} ganó en ${this.turns} turnos.`);
      }
    }
  }
  
  const game = new Game("tortu", "liebre");
  game.play();