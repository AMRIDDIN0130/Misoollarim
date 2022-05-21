console.log("Son topar o'yini");
console.log("3 xonali sonni toping");
let tasSon = Math.floor(Math.random()*900) + 100;

let i;

for( i = 1; i<=10; i++){
    let a = parseInt(prompt(i + "-chi o'rinish."));
    if(a > tasSon){
        console.log(a + " sonidan kichik");
    } else if(a < tasSon){
        console.log(a + " sonidan katta");
    } else {
        console.log("Tabriklaymiz! Yutdingiz. Biz o'ylagan son: " + tasSon);
        console.log("Ochko: " + (10 - i+1) * 100);
        break;
    }
}
if(i > 10){
    console.log("Siz yutqazdingiz! Biz o'ylagan son: " + tasSon);
}