class Player{
  constructor(props){
    this.name = props['name'];
    this.num = props['num'];
    this.lvl = props['lvl'];
    this.absences = [];
    this.description = "";
    this.improvement = 0;
  }
  show(){
    console.log("Nombre: " + this.name);
    console.log("Dorsal: " + this.num);
    console.log("Nivel: " + this.lvl);
  }

  addAbsence(date){
    this.absences.push(date);
  }

  get getclass(){
    return "Player"
  }
}


class Team{
  constructor(props){
    this.name = props['name'];
    this.players = [];
  }

  show(){
    console.log("Nombre del Equipo: " + this.name);
    for(let player of this.players){
      player.show()
    }
  }

  addPlayer(player){
    if(player.getclass == 'Player' && player.getclass != null){
      this.players.push(player);
      console.log("aceptado");
    }
  }

  deletePlayerByID(id){
    this.players.splice(id, 1);
  }

  deletePlayerByName(name){
    for(let i = 0 ; i < this.players.length ; i++){
      if(this.players[i].name == name){
        this.players.splice(i,1);
        break;
      }
    }
  }

  deletePlayerByNum(num){
    for(let i = 0 ; i < this.players.length ; i++){
      if(this.players[i].num == num){
        this.players.splice(i,1);
        break;
      }
    }
  }
}

let y = new Team({name : 'Premini'});
let x = new Player({name:'caye', num:17, lvl:10});
let z = new Player({name:'curro', num:18, lvl:10});
let m = new Player({name:'arnold', num:11, lvl:10});
y.addPlayer(x);
y.addPlayer(z);
y.addPlayer(m);
y.deletePlayerByNum(18);
console.log(y.players);