// ОБЪЕКТ МОДЕЛИ

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

    // МЕТОД "FIRE", ОТВЕЧАЮЩИЙ ЗА ВЫСТРЕЛЫ В ИГРЕ

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
    },

    loadShips: function() {
            let ship1, ship2, ship3;

            let allCoordShips = [];

            let coordShip1 = [];

            // 1-ПАЛУБНЫЙ КОРАБЛЬ
            ship1 = 0;
            while (ship1<this.ships[0]){
                let randomCoordY = Math.floor(Math.random()*7);
                let randomCoordX = Math.floor(Math.random()*7);
                    console.log(randomCoordX);

                let randomCoordZ = "" + randomCoordY + randomCoordX;

                    console.log(randomCoordZ);
                if (coordShip1.indexOf(randomCoordZ) != -1) continue;
                coordShip1.push(randomCoordZ);
                ship1++;

            }
            console.log(coordShip1);
            this.coordShips[0].locations1 = coordShip1;

            allCoordShips = [...coordShip1];

            // 2-ПАЛУБНЫЙ КОРАБЛЬ

            ship2 = 0;
            let coordShip2 = [];
            while (ship2<this.ships[1]){
                let numberCoordinations = 0;
                let SinglecoordShip2 = [];
                let randomWay = Math.floor(Math.random()*2);   //0 - горизонт. направление корабля, а 1 - вертикал. направление
                while (numberCoordinations<2){
                    if (numberCoordinations == 0){
                        let randomCoordX,randomCoordY;
                        if (randomWay == 0)  {
                            randomCoordX = Math.floor(Math.random()*6);
                            randomCoordY = Math.floor(Math.random()*7);
                        } else {
                            randomCoordY = Math.floor(Math.random()*6);
                            randomCoordX = Math.floor(Math.random()*7);
                        }

                        let randomCoordZ = "" + randomCoordY + randomCoordX;

                            console.log(randomCoordZ);
                        if (allCoordShips.indexOf(randomCoordZ) != -1) continue;
                        
                        
                        SinglecoordShip2.push(randomCoordZ);
                        numberCoordinations++
                        
                    } else {
                        if (randomWay == 0) {
                            console.log(SinglecoordShip2[0]);
                            let coordX = +(SinglecoordShip2[0][1]) + 1;
                            let coordY = +(SinglecoordShip2[0][0]);
                            let randomCoordZ = "" + coordY + coordX;
                            if (allCoordShips.indexOf(randomCoordZ) != -1) {
                                SinglecoordShip2 = [];
                                numberCoordinations = 0;
                                continue;
                            }
                            SinglecoordShip2.push(randomCoordZ);
                            numberCoordinations++
                        } else {
                            console.log(SinglecoordShip2[0][1]);
                            let coordX = +(SinglecoordShip2[0][1]);
                            let coordY = +(SinglecoordShip2[0][0]) + 1;
                            let randomCoordZ = "" + coordY + coordX;
                            if (allCoordShips.indexOf(randomCoordZ) != -1) {
                                SinglecoordShip2 = [];
                                numberCoordinations = 0;
                                continue;
                            }
                            SinglecoordShip2.push(randomCoordZ);
                            numberCoordinations++
                        }

                    }
                }
                coordShip2.push(SinglecoordShip2);
                ship2++;
                allCoordShips.push(...SinglecoordShip2);
            }

            console.log(coordShip2);
          this.coordShips[1].locations2 = coordShip2;
            // 3-ПАЛУБНЫЙ КОРАБЛЬ

            ship3 = 0;
            let coordShip3 = [];
            while (ship3<this.ships[2]){
                let numberCoordinations = 0;
                let SinglecoordShip3 = [];
                let randomWay = Math.floor(Math.random()*2);   //0 - горизонт. направление корабля, а 1 - вертикал. направление
                while (numberCoordinations<3){
                    if (numberCoordinations == 0){
                        let randomCoordX,randomCoordY;
                        if (randomWay == 0)  {
                            randomCoordX = Math.floor(Math.random()*5);
                            randomCoordY = Math.floor(Math.random()*6);
                        } else {
                            randomCoordY = Math.floor(Math.random()*5);
                            randomCoordX = Math.floor(Math.random()*6);
                        }

                        let randomCoordZ = "" + randomCoordY + randomCoordX;

                            console.log(randomCoordZ);
                        if (allCoordShips.indexOf(randomCoordZ) != -1) continue;
                        
                        
                        SinglecoordShip3.push(randomCoordZ);
                        numberCoordinations++
                    } else if (numberCoordinations == 1){
                        if (randomWay == 0) {
                            console.log(SinglecoordShip3[0]);
                            let coordX = +(SinglecoordShip3[0][1]) + 1;
                            let coordY = +(SinglecoordShip3[0][0]);
                            let randomCoordZ = "" + coordY + coordX;
                            if (allCoordShips.indexOf(randomCoordZ) != -1) {
                                SinglecoordShip3 = [];
                                numberCoordinations = 0;
                                continue;
                            }
                            SinglecoordShip3.push(randomCoordZ);
                            numberCoordinations++
                        } else {
                            console.log(SinglecoordShip3[0][1]);
                            let coordX = +(SinglecoordShip3[0][1]);
                            let coordY = +(SinglecoordShip3[0][0]) + 1;
                            let randomCoordZ = "" + coordY + coordX;
                            if (allCoordShips.indexOf(randomCoordZ) != -1) {
                                SinglecoordShip3 = [];
                                numberCoordinations = 0;
                                continue;
                            }
                            SinglecoordShip3.push(randomCoordZ);
                            numberCoordinations++
                        }

                    } else {

                        if (randomWay == 0) {
                            console.log(SinglecoordShip3[0]);
                            let coordX = +(SinglecoordShip3[0][1]) + 2;
                            let coordY = +(SinglecoordShip3[0][0]);
                            let randomCoordZ = "" + coordY + coordX;
                            if (allCoordShips.indexOf(randomCoordZ) != -1) {
                                SinglecoordShip3 = [];
                                numberCoordinations = 0;
                                continue;
                            }
                            SinglecoordShip3.push(randomCoordZ);
                            numberCoordinations++
                        } else {
                            console.log(SinglecoordShip3[0][1]);
                            let coordX = +(SinglecoordShip3[0][1]);
                            let coordY = +(SinglecoordShip3[0][0]) + 2;
                            let randomCoordZ = "" + coordY + coordX;
                            if (allCoordShips.indexOf(randomCoordZ) != -1) {
                                SinglecoordShip3 = [];
                                numberCoordinations = 0;
                                continue;
                            }
                            SinglecoordShip3.push(randomCoordZ);
                            numberCoordinations++
                        }
    
                    }
                }
                coordShip3.push(SinglecoordShip3);
                ship3++;
                allCoordShips.push(...SinglecoordShip3);
            }

            console.log(coordShip3);
          this.coordShips[2].locations3 = coordShip3;

        }      
    
}                
               


// ДИСПЛЕЙ, ПОКАЗЫВАЮЩИЙ ПРОМАХИ ПОПАДАНИЯ ПО КОРАБЛЯМ 

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

// КОНТРОЛЛЕР, ОТВЕЧАЮЩИЙ ЗА ОБЩИЙ ФУНКЦИОНАЛ ИГРЫ (ПОТОПЛЕНИЕ ВСЕХ КОРАБЛЕЙ)

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
    // let audio = document.getElementById("myAudio");
    // audio.play();
    

    model.loadShips();
    
    
    let fire = document.getElementById("fire"),
    input = document.querySelector("#coord"),
    user_ships = document.getElementById('user_ships'),
    area_drop = document.querySelector('table');
    let dragObj = {name: ""};
    

    console.log(fire);

    // document.addEventListener('scroll', function(){
    //     document.getElementById("myAudio").play();
    // });

    fire.addEventListener('click', function(event){
        document.getElementById("myshoot").currentTime = 0.0;
        
        event.preventDefault();
        document.getElementById("myshoot").play();
        console.log("test");
        model.fire();
        input.value = "";
    });
    

    input.addEventListener("keydown", function(event){
        if ( event.key == "Enter") {
            model.fire();
            event.preventDefault();
            event.target.value = "";
        }
    })

    // Перетаскивание кораблей DRAG & DROP
    user_ships.addEventListener("dragstart", function(e) {
        dragObj.name = e.target.id;
        // console.log("Поехали!");
        // console.log(e.target.id);
       e.dataTransfer.setData('content', e.target.id);
        // console.log(e.dataTransfer.getData('content'));
    })
    
    area_drop.addEventListener("dragenter", function(e) {
        switch (dragObj.name) {
            case "drag1" :
                e.target.style.border = "1px solid red";
                console.log("Зашел в гости 1!");
                break
            case "drag2" :
                console.log("Зашел в гости 2!");
                break
            case "drag3" :
                console.log("Зашел в гости 3!");
                break
            default:

                break
        }
        
    })

    area_drop.addEventListener("dragleave", function(e) {
        switch (dragObj.name) {
            case "drag1" :
                e.target.style.border = "1px solid";
                console.log("Вышел 1!");
                break
            case "drag2" :
                console.log("Вышел 2!");
                break
            case "drag3" :
                console.log("Вышел 3!");
                break
            default:

                break
        }
        return false;
    })
    
    area_drop.ondragover = function(){return false};

    area_drop.addEventListener('drop', function(e){
        console.log(e.target);
        e.target.style.background = "url(images/ship.png) center center no-repeat";

        let x = document.getElementById(e.dataTransfer.getData("content")).nextElementSibling.textContent;
        let y = parseInt(x)-1;
        document.getElementById(e.dataTransfer.getData("content")).nextElementSibling.textContent =  `${y}/3`;
        e.target.draggable = false;

        console.log('DROP!');
    })


} 



