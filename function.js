
//this is part I
const paintmaster1 = function (){
    console.log("The wall has been painted red");
};

paintmaster1();

//this is part II

const paintmaster2 = function (color){
    console.log("The wall has been painted " + color);
};

paintmaster2("green");
paintmaster2("red");
paintmaster2();
paintmaster2("");

//this is part III
const paintmaster3 = function (colorNorth, colorS){
    console.log("The north wall has been painted " + colorNorth);
    console.log("The south-east wall has been " + colorS);
};

paintmaster3("orange", "grey");

const paintmaster3 = function (colorS, colorNorth){
    console.log("The north wall has been painted " + colorNorth);
    console.log("The south-east wall has been " + colorS);
};

paintmaster3("orange", "grey");
//you get a reverse answer