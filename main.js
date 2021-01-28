let comp = {
    HTML: 100,
    CSS: 100,
    JS: 30,
    React: 65, 
    Laravel: 0
}
function bgColor(val){
    let col;
    switch(true){
        case (val <= 25): col="red"; break; 
        case (val >= 26 && val <= 50):  col="orange";   break; 
        case (val > 50 && val <= 75): col="lightgreen"; break;
        case (val > 75): col="green"; break; 
        default:  col="grey";  break;
    }
    return col;
}
const cont = document.querySelector('#liste-competences'); 
let count=0;
for(key in comp){
    if(key == cont.children[count].innerHTML){
        let bgc = bgColor(comp[key]);
        cont.children[count].innerHTML+=` ${comp[key]}%`;
        cont.children[count].style.width=comp[key]+"%";
        cont.children[count].style.backgroundColor=bgc;
    }
    count++;
}