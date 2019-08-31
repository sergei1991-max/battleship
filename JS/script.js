window.onload = init;
var model = {
    countShips: 4,
    diveShips: 0,
    matrix: 7,
    ships: [1,2,1],
    hit: 0,
    miss: 0,
    alfabet: ["A","B","C","D","E","F","G"],
    coordShips: [
        {locations: ["03"]},    
        {locations: [["06", "16"],["04","14"]]},
        {locations: ["05","15","25"]},
        
    ],

    fire: function() {
            var input = document.getElementById("coord");
            var fire = document.getElementById("fire");
            console.log("МЕТОД FIRE РАБОТАЕТ");
            if (typeof((input.value)[1]) == NaN && (input.value).length > 2 && this.alfabet.indexOf(input.value) == -1) {
                    alert("Вы ввели ошибочные координаты выстрела, повторите еще раз!");
                    
                
            }


    }


}
    function init(){ 
        var fire = document.getElementById("fire");
        console.log(fire);

        fire.addEventListener('click', function(event){
            // event.preventDefault();
            console.log("test");
            model.fire();
        });
        console.log("заработало!!!!!");









      } 



