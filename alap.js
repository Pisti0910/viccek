var viccek=[
    {
        "szoveg":`- Hogy csinál egy szőke nő lekvárt?<br>
        - ???<br>
        - Kinyomja a buktából.`,
        "kep":"0.jpg"
    },
    {
        "szoveg":`A fiatal feleség idegesen telefonál a férjének.<br>
        - Drágám, a mama leesett a lépcsőn, beütötte a fejét, vérzik. Most mit csináljak?<br>
        - Krumplistésztát.`,
        "kep":"1.jpg"
    },
    {
        "szoveg":`A szőke nő mondja a barátjának:<br>
        - Nagyon kíváncsi vagyok a jövőmre. Szeretnék elmenni egy jósnőhöz, csak nem tudom, hogy tenyérjós, vagy gondolatolvasó legyen-e.<br>
        - Szerintem tenyérjós, mert tenyered, az van...`,
        "kep":"2.jpg"
    },
    {
        "szoveg":`A főnök diktál az új titkárnőjének:<br>
        - Írja, hogy összehívunk egy megbeszélést a témában keddre.<br>
        - Főnök, a keddet egy vagy két d-vel írjuk?<br>
        - Tudja mit? Legyen a megbeszélés szerdán...`,
        "kep":"3.jpg"
    },
    {
        "szoveg":`- Mi az: Öreg emberek ugrálnak le a hídról, lábukon gumikötéllel?<br>
        - Bácsijumping.`,
        "kep":"4.jpg"
    },
]
console.log(viccek)
var veletlen=-1;
sorsolas()
console.log("Globális változó:"+veletlen)

function sorsolas(){
    document.getElementById("kesleltetes").innerHTML=""
    do{
        var ujveletlen= Math.floor(Math.random() * viccek.length);
        console.log("újból kisorsolta:"+ujveletlen)
    }
    while(veletlen==ujveletlen)
    veletlen=ujveletlen
    console.log(veletlen)
    document.getElementById("szoveghely").innerHTML=viccek[veletlen].szoveg
    document.getElementById("kephely").innerHTML=`<img src="kepek/${viccek[veletlen].kep}" alt="" title="">`
}
function kattintas(){
    document.getElementById("szoveghely").innerHTML=""
    document.getElementById("kephely").innerHTML=""
    document.getElementById("kesleltetes").innerHTML=`<img src="kepek/mozgogif.gif">`
    const myTimeout = setTimeout(sorsolas, 5000);
}