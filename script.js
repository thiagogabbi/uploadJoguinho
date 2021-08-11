                      
 onload = init;

function init() {
    var onclick = clickUpdates();
    var btn = document.getElementById("btn");
    btn.addEventListener("click", onclick, false);
}

function clickUpdates() {
    var count = 0;
    var par; //função para gerar número par aleatório//
    do {
        par = Math.floor(Math.random()*40 + 1)
        } while( par % 2 == 1 );
    var next = function() {
        switch(count) {
            
            case 0:
            document.getElementById("1msg").innerHTML = "Pense em um número de 1 a 10";
            break;
            
            case 1:
            
            document.getElementById("1msg").innerHTML = "Multiplique este número por 2";
            break;
           
            case 2: //caso que faz a função geradora do número par//       
            document.getElementById("1msg").innerHTML = "Some com "+par; 
            break;

            case 3:
            document.getElementById("1msg").innerHTML = "Divida por 2";
            break;

            case 4:
            document.getElementById("1msg").innerHTML = "Subtraia por aquele número que você escolheu de 1 a 10"
            break;

            case 5:
            document.getElementById("1msg").innerHTML = "O resultado da conta é " + (par/2);
            break;
            
            case 6: 
            document.getElementById("1msg").innerHTML ="Jogar novamente?";
            init();
            break;           
            }
        count = count<300?count+1:300;
        
    }
    return next;
   
}
