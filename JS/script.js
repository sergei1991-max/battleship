window.onload = init;
var model = {
    countShips: 4,
    diveShips: 0,
    matrix: 7,
    ships: [1,2,1],
    hit: 0,
    miss: 0,
    alfabet: ["A","B","C","D","E","F","G","a","b","c","d","e","f","g"],
    coordShips: [
        {locations1: ["03"], marker1: [0]  },    
        {locations2: [["06", "16"],["04","14"]], marker2: [[0][0]]},
        {locations3: ["05","15","25"], marker3: [0] },
        
        
    ],

    fire: function() {
            var input = document.getElementById("coord");
            var fire = document.getElementById("fire");
            console.log(isNaN(+(input.value)[1]));
            if (+(input.value)[1] > 6 || isNaN(+(input.value)[1]) || (input.value).length > 2 || this.alfabet.indexOf((input.value)[0]) == -1) {
                    alert("Вы ввели ошибочные координаты выстрела, повторите еще раз!");
            } else {
                if (this.alfabet.indexOf((input.value)[0]) <= 6)
                var textinput = this.alfabet.indexOf((input.value)[0]) + input.value[1];
                else var textinput = this.alfabet.indexOf((input.value)[0]) -7 + input.value[1];
                console.log(textinput);
                view.displayMessage();
                view.displayHit(textinput);
                view.displayMiss(textinput);
            }


    }


}
var view = {
    displayMessage: function(){

        var messageArea = document.getElementById("output");
        messageArea.textContent = "Вы попали в корабль!"
        console.log("ураааааа");
    },

    displayHit: function(x){
        var call = document.getElementById(x);
        call.setAttribute('class',"hit");


    }, 

    displayMiss: function(x){
        var call = document.getElementById(x);
        call.setAttribute("class","miss");


    }

} 

var controller = {

    checkFire: function(){
        var shoot;
        var usercoord = textinput;
        for (var i=0; i<model.countShips; i++){
                


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


      } 



