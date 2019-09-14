window.onload = init;
var model = {
    countShips: 7,
    diveShips: 0,
    matrix: 7,
    ships: [3,2,2],
    hit: 0,
    miss: 0,
    countshoots: 0,
    alfabet: ["A","B","C","D","E","F","G","a","b","c","d","e","f","g"],
    coordHits: [],
    coordShips: [
        {locations1: ["03", "51","54"], marker1: [0,0,0]  },    
        {locations2: [["06", "16"],["04","14"]], marker2: [0,0]},
        {locations3: [["05","15","25"], ["61","62","63"]],  marker3: [0,0] },
        
        
    ],

    fire: function() {
            this.countshoots++;
            var input = document.getElementById("coord");
            var fire = document.getElementById("fire");
            console.log(isNaN(+(input.value)[1]));
            if (+(input.value)[1] > 6 || isNaN(+(input.value)[1]) || (input.value).length > 2 || this.alfabet.indexOf((input.value)[0]) == -1) {
                    alert("Вы ввели ошибочные координаты выстрела, повторите еще раз!");
            } else {
               if (this.coordHits.indexOf(input.value) >= 0 ) {
                   alert("Вы уже вводили данные координаты!!!");
                    return;
               };                 
                
                if (this.alfabet.indexOf((input.value)[0]) <= 6)
                var textinput = this.alfabet.indexOf((input.value)[0]) + input.value[1];
                else var textinput = this.alfabet.indexOf((input.value)[0]) -7 + input.value[1];
                // console.log(textinput);
                // view.displayMessage();
                // view.displayHit(textinput);
                // view.displayMiss(textinput);
                controller.checkFire(textinput,input.value);

            }
                if (this.countShips==this.diveShips) view.displayMessage("Вы победили! Враг разбит! Победа за нами!");
    }


}
var view = {
    displayMessage: function(y){

        var messageArea = document.getElementById("output");
        messageArea.textContent = y;
        console.log("ураааааа");
    },

    displayHit: function(x){
        var call = document.getElementById(x);
        call.setAttribute('class',"hit");
        // this.displayMessage("Поздравляем Вы попали в корабль!");


    }, 

    displayMiss: function(x){
        var call = document.getElementById(x);
        call.setAttribute("class","miss");
        // this.displayMessage("Вы промахнулись! Попробуйте еще раз!");



    }

} 

var controller = {

    checkFire: function(textinput, flag){
        var shoot;
        var usercoord = textinput;
        outer: for (var i=0; i<model.countShips; i++){
                    if (i<model.ships[0]) {
                for (var c=0; c<model.ships[0]; c++){
                    if (model.coordShips[0].locations1[c] == usercoord){
                        shoot = true;
                        model.coordShips[0].marker1[c] = 1;
                        model.diveShips++;
                        model.coordHits.push(flag);
                        break outer;

                    }

                            
                }


                     
            }else if (i>=model.ships[0] && i<(model.ships[0] + model.ships[1])){
                for (var c=0; c<model.ships[1]; c++){
                    for (var j=0; j<2; j++){
                        if (model.coordShips[1].locations2[c][j] == usercoord){
                            shoot = true;
                            model.coordShips[1].marker2[c] ++;
                            if (model.coordShips[1].marker2[c] == 2) model.diveShips++;
                            model.coordHits.push(flag);
                            break outer;
    
                            
                        }


                    }

                               


                }

           
            }else if (i>=(model.ships[0] + model.ships[1])){
                
                for (var c=0; c<model.ships[2]; c++){
                    
                    for (var d=0; d<3; d++){
                        console.log(model.coordShips[2].locations3[c][d]);
                        if (model.coordShips[2].locations3[c][d] == usercoord){
                                                   
                            shoot = true;
                            model.coordShips[2].marker3[c] ++;
                            if (model.coordShips[2].marker3[c] == 3) model.diveShips++;
                            model.coordHits.push(flag);
                            break outer;
                        }
    
                            
                    }


                }

               

                        


            }
                


        }
        if (shoot==true){
            view.displayMessage("Поздравляем Вы попали в корабль!");
            view.displayHit(textinput);
            model.hit++;
                
        }else {

            view.displayMessage("Промах! Попробуйте еще раз!");
            view.displayMiss(textinput);
            model.miss++;
        }

    }

}











function init(){ 
    var fire = document.getElementById("fire");

    console.log(fire);

    fire.addEventListener('click', function(event){
        event.preventDefault();
        console.log("test");
        model.fire();
    });
    console.log("заработало!!!!!");

    let input = document.querySelector("#coord");
        console.log(input);

    input.addEventListener("keydown", function(event){

        if ( event.code == "Enter") fire.click();
        return false;

    })


      } 



