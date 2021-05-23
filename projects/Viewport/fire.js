var fire = [75, 150, 255, "bf"]
var yfire = [255, 255, 0, "mlf"]
var rfire = [255, 0, 0, "mhf"]
var smoke = [100, 100, 100, "ef"]

render = (y, x) => {
    if(y == resolution-1){
        return fire;
    }

    if(getTileColor(x, y+1) == fire[3] && chance(30)){
        return fire
    }

    if(getTileColor(x, y+1) == fire[3]){
        return yfire;
    }
    if(getTileColor(x, y+1) == yfire[3] && chance(50)){
        return yfire;
    }

    if(getTileColor(x, y+1) == yfire[3] && chance(70)){
        return rfire;
    }
    if(getTileColor(x, y+1) == rfire[3] && chance(80)){
        return rfire
    }

    if(getTileColor(x, y+1) == rfire[3] && chance(30)){
        return smoke
    }

    if(getTileColor(x, y+1) == smoke[3]){
        return smoke
    }
    if(getTileColor(x, y+2) == smoke[3]){
        return 255
    }
}