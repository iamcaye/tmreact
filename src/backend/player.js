class Player{
  constructor(props){
    this.name = props['name'];
    this.num = props['num'];
    this.lvl = props['lvl'];
    this.absences = [];
    this.trainings = [];
    this.description = "";
    this.improvement = 0;
  }
  show(){
    console.log("Nombre: " + this.name);
    console.log("Dorsal: " + this.num);
    console.log("Nivel: " + this.lvl);
    console.log("Entrenamientos: " + this.trainings);
    console.log("Faltas: " + this.absences);

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

  addTraining(date, ...absences){
    let training = [];
    if(date === null){
      let day = new Date();
      training = [day.getDate(), day.getMonth(), day.getFullYear()];
    }else{
      training = date;
    }
    for(let player of this.players){
      for(let fault of absences){
        if(player.num === fault){
          player.absences.push(training)
          break;
        }
        player.trainings.push(training);
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

y.addTraining([11,7,2020], 11);
y.addTraining(null, [0]);
y.addTraining([13,7,2020], [17]);
console.log(y.players);
y.show();
