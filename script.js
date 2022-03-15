
// função para calcular quantidade de carne;
function resultado() {
    var d = document.getElementById("duraçao");
    var vD = d.value;

    var c = document.getElementById("criança");
    var vC = c.value;

    var a = document.getElementById("adultos");
    var vA = a.value;

    var cpA = 100 * vD * vA;
    var cpC = 50 * vD * vC;
    let R = cpA + cpC;
    return R
}

// Função para calcular cerveja;

function cerveja() {
    var d = document.getElementById("duraçao");
    var vD = d.value;

    var a = document.getElementById("adultos");
    var vA = a.value;

    let Rcer = 1.5 * vD * vA;
    return Rcer
}

//Função para calcular garrafas;

function ga() {
    let ga = 0.5 * vD * vC;
    return ga
}

// Fução para calcular Refrigerante;
function refri() {
    var d = document.getElementById("duraçao");
    var vD = d.value;

    var c = document.getElementById("criança");
    var vC = c.value;

    let Rref = 2 * vD * vC;

    function ga() {
        let ga = 0.7 * vD * vC;
        return ga
    };

    if (Rref >= 6) {
        Rref = Rref + " Latinhas de refrigerante" + "<li>" + " Ou " + Math.floor(ga()) + " garrafas de 2 Litros" + "</li>";
    }
    else {
        Rref = Rref + " Latinhas de refrigerante"
    }
    return Rref

}

// Função para calcular água;
function agua() {

    var d = document.getElementById("duraçao");
    var vD = d.value;

    var c = document.getElementById("criança");
    var vC = c.value;

    var a = document.getElementById("adultos");
    var vA = a.value;

    let tp = vC + vA
    let ag = 100 * vD * tp
    return ag
}






// Calculos dos alimentos,


function churrasco() {
    let h1 = document.getElementById("resultado");

    // Cálculo da carne;

    let Rcar = resultado();
    let R = Rcar / 1000;

    // Cálculo da cerveja;

    let Rcer = cerveja();

    // Cálculo do refrigerante; 

    let Rref = refri();

    // Cálculo de água;

    let ag = agua() / 1000;

    // Passando para HTML;

    h1.innerHTML = "<h2>" + "Você precisará comprar: " + "</h2>" +   
        "<li>" + R + " Kg de carne;" + "</li>" +  
        "<li>" + Rcer + " latinhas de cerveja; " +  "</li>" + 
       "<li>" + Rref + "</li>" +  
        "<li>" + ag + " litros de água;" + "</li>"
        
        
}