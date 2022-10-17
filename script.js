function calcularIdadePet(idadePet, taxaConversao){
    let idade = idadePet*taxaConversao;

    return(alert("Seu pet tem " + idade + " anos em anos humanos!"));
}

calcularIdadePet(5, 7);
 calcularIdadePet(5, 10);
 calcularIdadePet(3, 8);

function calcularIdadePetEspecie(idadePet, taxaConversao, nomePet, especiePet){
    let idade = 0;

    if(especiePet != "gato"){
        idade = idadePet*taxaConversao;
        return(alert(nomePet + " tem " + idade + " anos em anos de verdade! Um(a) " + especiePet + " tem uma relação de " + taxaConversao + " anos de " + especiePet + " para cada 1 ano humano."));
    }else{
        if(idadePet == 1){
            idade = 15;
            return(alert(nomePet + " tem " + idade + " anos em anos de verdade! Um(a) " + especiePet + " tem 15 anos humanos com 1 ano de idade."));
        }else if(idadePet == 2){
            idade = 24;
            return(alert(nomePet + " tem " + idade + " anos em anos de verdade! Um(a) " + especiePet + " tem 24 anos humanos com 2 ano de idade."));
        }else{
            idade = 24 + ((idadePet-2)*4);
            return(alert(nomePet + " tem " + idade + " anos em anos de verdade! Um(a) " + especiePet + " com mais de 2 anos de idade tem relação de 4 anos humanos, somando 4 anos humanos (para cada nova idade) aos 24 anos humanos quando tinha 2 anos de idade."));
        }
    }
}

calcularIdadePetEspecie(5, 7, "Med" , "cachorro");
calcularIdadePetEspecie(4, 4, "Garfield", "gato");
calcularIdadePetEspecie(8, 1, "Laboon", "baleia");

function calcularMeuLanche(idade, quantLanchesDia){
    const idadeMax = 100;

    let idadeFalta = idadeMax-idade;
    let quantLanchesAno = quantLanchesDia*365;
    let quantLanchesVida = quantLanchesAno*idadeFalta;

    return(alert("Você precisará de " + quantLanchesVida + " lanches para durar até a idade " + idadeMax));
}

 calcularMeuLanche(99, 5);
 calcularMeuLanche(25, 4);
 calcularMeuLanche(12,3);


function calcularCircunferencia(raio){
    let c = 2*Math.PI*raio;

    return(document.write("A circunferência é " + c.toFixed(2) + "<br>"));
}

function calcularArea(raio){
    let a = Math.PI*raio**2;

    return(document.write("A área é " + a.toFixed(2) + "<br>"));
}

 calcularCircunferencia(5);
 calcularCircunferencia(10);
 calcularCircunferencia(7.5);
 document.write("<hr>");
 calcularArea(8);
 calcularArea(9);
 calcularArea(3);

function converterCelsiusFahrenheit(temp){
    let celsius = temp;
    let fahrenheit = 1.8*celsius + 32;

    return(alert(celsius + "° C é igual a " + fahrenheit.toFixed(2) + "° F"));
}

function converterFahrenheitCelsius(temp){
    let fahrenheit = temp;
    let celsius = (fahrenheit-32)/1.8;

    return(alert(fahrenheit + "° F é igual a " + celsius.toFixed(2) + "° C"));
}

converterCelsiusFahrenheit(1);
converterCelsiusFahrenheit(45.3);
converterCelsiusFahrenheit(100);

converterFahrenheitCelsius(1);
converterFahrenheitCelsius(50);
converterFahrenheitCelsius(450)
