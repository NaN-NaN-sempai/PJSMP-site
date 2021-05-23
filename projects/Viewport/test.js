var test = [255, 0, 0, "teste"];
var test2 = [0, 0, 255, "teste2"];

render = (y, x) => {    
    if(x == dinRes/2 && y == (dinRes/2) - 7){
        return test2
    }

    if(x == dinRes/2 && y == (dinRes/2) - 4){
        return test2
    }
    
    if(x == (dinRes/2) + 2 && y == (dinRes/2) +3){
        return test2
    }


    
    if(x == dinRes/2 && y == dinRes/2){
        return test
    }
}