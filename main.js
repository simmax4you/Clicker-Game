var currentp = 400;
var addp = 1;
var upgradep = 50;
var multip = 200;
function add_point(){
    currentp = addp + currentp;
    document.getElementById("output_points").innerHTML = currentp;
}
function ppc_upgrade(){
if(currentp >= upgradep){
    addp = addp + 2;
    currentp = currentp - upgradep;
    upgradep = upgradep + 50;
    multip = multip + 100;
    document.getElementById("output_points").innerHTML = currentp;
    document.getElementById("ppcu_cost").innerHTML = upgradep;
    document.getElementById("ppcu2").innerHTML = multip;
    document.getElementById("ppc").innerHTML = addp;
}

}
function multiply_ppc(){
 if(currentp >= multip){
    addp = addp * 2;
    currentp = currentp - multip
    multip = multip * 2;
    document.getElementById("ppcu_cost").innerHTML = multip;
    document.getElementById("ppc").innerHTML = addp;
    document.getElementById("ppcu2").innerHTML = multip;
    document.getElementById("output_points").innerHTML = currentp;
 }
}