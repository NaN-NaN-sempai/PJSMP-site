var skinColor = [236, 188, 180] // SKIN COLOR
var skinOutLine = [80, 51, 53] // SKIN OUTLINE
var hair = [255, 255, 0] // HAIR COLOR
var capColor = [0, 120, 60] // CAP COLOR
var capOutline = [0, 50, 50] // CAP OUTLINE
var eyes = [0, 120, 255] // EYES COLOR

render = (y,x)=>{
    // SKIN COLOR
    b1 = (y == es(f, -4)) && (cl(x, -9, -6) || cl(x, 1, 3) || cl(x, 5, 8)) ||
        (y == es(f, -3)) && (cl(x, -8, -6) || cl(x, 0, 3) || cl(x, 5, 7)) || 
        (y == es(f, -2)) && (cl(x, -1, 4)) ||
        (y == es(f, -1)) && (cl(x, -2, 2)) ||
        (y == f || y == es(f, 1)) && (x > hr-2 && x < hr+1) ||
        (y == es(f, 1)) && ((x > hr-5 && x < hr-3) || (x > hr+2 && x < hr+4)) ||
        (y == es(f, 2)) && (x > hr-4 && x < hr+3)
    if(b1){ return skinColor }

    // SKIN OUTLINE
    b2 = (y == es(f, 3)) && (x > hr-5 && x < hr+4) ||
        (y == es(f, 2)) && ((x > hr-6 && x < hr-3) || (x > hr+2 && x < hr+5)) ||
        (y == es(f, 1)) && ((x > hr-7 && x < hr-3) || (x > hr+2 && x < hr+6)) ||
        (y == f) && ((x > hr-8 && x < hr-6) || (x > hr+5 && x < hr+7) || (x > hr-6 && x < hr-4) || (x > hr+3 && x < hr+5) || (x > hr-3 && x < hr-1) || (x > hr && x < hr+2)) ||
        (y == es(f, -1)) && ((x > hr-8 && x < hr-6) || (x > hr+5 && x < hr+7) || (x > hr-6 && x < hr-4) || (x > hr+3 && x < hr+5) || (x > hr-4 && x < hr-1) || (x > hr+1 && x < hr+3)) ||
        (y == es(f, -2)) && ((x > hr-8 && x < hr-6) || (x > hr+5 && x < hr+7) || (x > hr-6 && x < hr-4) || (x > hr+3 && x < hr+5) || (x > hr-3 && x < hr)) ||
        (y == es(f, -3)) && ((x > hr-9 && x < hr-7) || (x > hr-7 && x < hr-4) || (x > hr-1 && x < hr+1) || (x > hr+2 && x < hr+4) || (x > hr+4 && x < hr+6) || (x > hr+6 && x < hr+8)) ||
        (y == es(f, -4)) && ((x > hr-10 && x < hr-8) || (x > hr-7 && x < hr-5) || (x > hr-5 && x < hr-3) || (x > hr && x < hr+2) || cl(x, 2, 4) || cl(x, 4, 6) || cl(x, 7, 9)) ||
        (y == es(f, -5)) && (cl(x, -10, -5) || cl(x, 1, 3) || cl(x, 4, 9)) || 
        (y == es(f, -6)) && (cl(x, -6, -4) || cl(x, 3, 5)) ||
        (y == es(f, -7)) && (cl(x, -5, -3) || cl(x, 2, 4))
    if(b2){ return skinOutLine }

    // HAIR
    b3 = (y == f) && (cl(x, -7, -5) || cl(x, 4, 6)) ||
        (y == es(f, -1)) && (cl(x, -7, -5) || cl(x, 4, 6)) ||
        (y == es(f, -2)) && (cl(x, -7, 6)) ||
        (y == es(f, -3)) && (cl(x, -5, 5)) ||
        (y == es(f, -4)) && (cl(x, -6, 5)) ||
        (y == es(f, -5)) && (cl(x, -6, 5)) ||
        (y == es(f, -6)) && (cl(x, -5, 4)) ||
        (y == es(f, -7)) && (cl(x, -4, 3));
    if(b3){ return hair }

    // CAP OUTLINE
    b4 = (y == es(f, -6)) && (cl(x, -8, -6) || cl(x, 5, 7)) ||
        (y == es(f, -7)) && (cl(x, -7, -5) || cl(x, 4, 6)) ||
        (y == es(f, -8)) && (cl(x, -7, -5) || cl(x, 4, 6)) ||
        (y == es(f, -9)) && (cl(x, -6, -4) || cl(x, 3, 5)) ||
        (y == es(f, -10)) && (cl(x, -5, -3) || cl(x, 2, 4)) ||
        (y == es(f, -11)) && (cl(x, -4, -2) || cl(x, 1, 3))
    if(b4){ return capOutline }

    // CAP COLOR
    b5 = (y == es(f, -6)) && (cl(x, -7, 6)) ||
        (y == es(f, -7)) && cl(x, -6, 5) ||
        y == es(f, -8) && cl(x, -6, 5) ||
        y == es(f, -9) && cl(x, -5, 4) ||
        y == es(f, -10) && cl(x, -4, 3) ||
        y == es(f, -11) && cl(x, -3, 2)
    if(b5){ return capColor }

    // EYES
    b6 = y == f && cl(x, -4, 3) || 
        y == es(f, 1) && (cl(x, -4, -2) || cl(x, 1, 3));
    if(b6){ return eyes }

    // GREY DETAILS
    b7 = y == es(f, -1) && (cl(x,-5,5)) ||
        y == es(f, -12) && (cl(x, -3, 2))
    if(b7){ return 50}
}