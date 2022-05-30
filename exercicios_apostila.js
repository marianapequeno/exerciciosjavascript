
//Exercícios da Apostila

//PASSO 01 - SEQUÊNCIAS BÁSICAS: 
/*1*/
console.log(`Olá, mundo!`); 
//OU
document.write("Olá, mundo!");

/*2*/
let nome1 = prompt(`Digite seu nome: `);
console.log(`Olá, ${nome1}, é um prazer te conhecer. `);


/*3*/
let funcionario1 = prompt(`Digite o nome do funcionário: `);
let salario1 = Number.parseFloat(prompt(`Digite o salário do funcionário: `));
console.log(`O funcionário ${funcionario1} tem um salário de R$ ${salario1.toFixed(2).replace(".",",")}.`);

/*4*/
let n1 = Number.parseInt(prompt(`Digite um número inteiro positivo: `)); 
let n2 = Number.parseInt(prompt(`Digite outro número inteiro positivo: `)); 
console.log(`Total ${n1} + ${n2}: ${n1+n2}`);

/*5*/
let nota1 = Number.parseInt(prompt(`Digite a primeira nota: `)); 
let nota2 = Number.parseInt(prompt(`Digite a segunda nota: `)); 
let media1 = (nota1+nota2)/2;
console.log(`Nota 1: ${nota1}`);
console.log(`Nota 2: ${nota2}`);
console.log(`Média: ${media1.toFixed(1)}`);

/*6*/
let num = Number.parseInt(prompt(`Digite um número do conjunto dos inteiros: `)); 
console.log(`Número digitado: ${num}`); 
console.log(`Antecessor: ${num-1}`);
console.log(`Sucessor: ${num+1}`);

/*7*/
let num_real = Number(prompt(`Digite um número do conjunto dos reais: `)); 
console.log(`Número digitado: ${num_real}`);
console.log(`Dobro: ${num_real*2}`);
console.log(`Terça parte: ${num_real/3}`);

/*8*/
let metros = Number(prompt(`Digite a distância em metros(m): `));
console.log(`A distância de ${metros} m corresponde a: `);

console.log(`Quilômetro: ${metros/1000} km `);
console.log(`Hectômetro: ${metros/100} hm`);
console.log(`Decâmetro: ${metros/10} dam`);

console.log(`Decímetro: ${metros*10} dm`);
console.log(`Centímetro: ${metros*100} cm`);
console.log(`Milímetro: ${metros*1000} mm`);

/*9*/
let real = Number.parseFloat(prompt(`Digite o valor em reais(R$): `));
console.log(`Com o valor R$ ${real.toFixed(2).replace(".",",")} é possível comprar US$ ${(real*3.45).toFixed(2).replace(".",",")}.`);


/*10*/
let altura = Number.parseFloat(prompt(`Digite a altura da parede: `));    //1,50 cm
let largura = Number.parseFloat(prompt(`Digite a largura da parede: `));  //1,20 cm
let area1 = altura*largura;
console.log(`Altura: ${altura} cm X Largura: ${largura} cm = ${area1.toFixed(2)} m²`);
console.log(`Área a ser pintada: ${area1.toFixed(2)} m²`);
console.log(`Quantidade de tinta necessária para o serviço: ${(area1/2).toFixed(2)} litros.`);

/*11*/
let a1 = Number(prompt(`Digite o valor de a: `));
let b1 = Number(prompt(`Digite o valor de b: `));
let c1 = Number(prompt(`Digite o valor de c: `));
let delta = b1**2 - 4*a1*c1;
console.log(`Delta de a:${a1}, b:${b1}, c:${c1} = ${delta}`);

/*12*/
let preco = Number(prompt(`Digite o preço do produto: `));
let desconto = preco*5/100;
console.log(`Preço do produto: R$ ${preco.toFixed(2).replace(".",",")}. `);
console.log(`Valor do desconto de 5%: R$ ${desconto.toFixed(2).replace(".",",")}`);
console.log(`Preço final com desconto aplicado: R$ ${(preco-desconto).toFixed(2).replace(".",",")}`);

/*13*/
let funcionario2 = prompt(`Digite o nome do funcionário: `);
let salario2 = Number.parseFloat(prompt(`Digite o salário do funcionário: `));
let aumento = salario2+(salario2*15/100);
console.log(`O funcionário ${funcionario2} receberá o total de R$ ${aumento.toFixed(2).replace(".",",")}, já com aumento de 15% aplicado`);

/*14*/
let km1 = Number.parseFloat(prompt(`Digite a quantidade de Km percorridos: `));
let dias1 = Number.parseInt(prompt(`Digite a quantidade de dias alugados: `));
let preco_total = (dias1*90) + (km1*0.2);
console.log(`Total de dias alugados: ${dias1} dias.`);
console.log(`Total de km rodados: ${km1.toFixed(2)} km.`);
console.log(`Valor total a pagar: R$ ${preco_total.toFixed(2).replace(".",",")}`);

/*15*/
let funcionario3 = prompt(`Digite o nome do funcionário: `);
let dias2 = Number.parseInt(prompt(`Digite o número de dias trabalhados em um mês: `));
let salario3 = (25*8)*dias2;
console.log(`Funcionário ${funcionario3} recebe R$ 25 por hora e o total de R$ 200,00 por dia.`);
console.log(`${funcionario3} trabalhou ${dias2} dias neste mês.`);
console.log(`Deve receber R$ ${salario3.toFixed(2).replace(".",",")}`);

/*16*/
let dia = Number.parseInt(prompt(`Digite a quantidade de cigarros fumados por dias: `));
let anos1 = Number.parseInt(prompt(`Há quantos anos já é fumante?`));
let minutos = anos1 * 365 * dia * 10;
let perda_dias = minutos/ (24*60);
console.log(`Um fumante perde 10 min de vida a cada cigarro. Você perdeu até o momento ${perda_dias.toFixed(1)} dias de vida.`)

//PASSO 02 - CONDIÇÕES BÁSICAS: 

/*17*/
let velocidade = Number.parseFloat(prompt(`Digite a velocidade do veículo: `));
console.log(`Limite de velocidade desta via é 80Km/h. Motorista chegou em R$ ${velocidade.toFixed(1)} km`);
if(velocidade>80){
    let multa = (velocidade-80)*5
    console.log(`Motorista ultrapassou o limite. Será Multado em R$ ${multa.toFixed(2).replace(".",",")} `);
}else{
    console.log(`Motorista dentro do limite de velocidade permitido.`);
}

/*18*/
let ano1 = Number.parseInt(prompt(`Digite o ano de nascimento: `));
let idade1 = 2022-ano1;
console.log(`Cidadão tem ${idade1} anos.`);
if(idade1>=18 && idade1<=70){ 
    console.log(`Voto obrigatório nesta idade.`)
}else if(idade1>=16 || idade1>70){ 
    console.log(`Possui idade para votar porém o voto não é obrigatório.`);
}else{
    console.log(`Ainda não tem idade para votar.`);
}

/*19*/
let nome2 = prompt(`Digite o nome do aluno:`);
let nota3 = Number(prompt(`Digite a primeira nota:`));
let nota4 = Number(prompt(`Digite a segunda nota:`));
let media2 = (nota1+nota2)/2;
console.log(`Média: ${media2.toFixed(1)}`);
if(media2>=7){
    console.log(`Aluno ${nome2} aprovado(a). Parabéns!`);
}else{
    console.log(`Aluno ${nome2} reprovado(a).`);
}

/*20*/
let numero = Number.parseInt(prompt(`Digite um número do conjuntos dos naturais: `));
if(numero%2===0){
    console.log(`Número: ${numero} é PAR.`);
}else{
    console.log(`Número: ${numero} é ÍMPAR.`);
}

/*21*/
let ano2 = Number.parseInt(prompt(`Digite o ano: `));
if(ano2%4===0 && ano2%100!==0 || ano2%400===0){ 
    console.log(`${ano2} é bissexto.`);
}else{
    console.log(`${ano2} não é bissexto.`);
}

/*22*/
let ano3 = Number.parseInt(prompt(`Digite o ano de nascimento: `)); //2010
let idade2 = 2022-ano3; //12
let sexo1 = prompt(`Digite o sexo: `); //m
console.log(`Nasceu em ${ano3}.`);
console.log(`${idade2} anos.`); 
console.log(`Sexo: ${sexo1}`);

if(idade2===18 && (sexo1=="M" || sexo1=="m")){ 
    console.log(`Alistamento militar obrigatório.`);
}else if(idade2>18 && (sexo1=="M" || sexo1=="m")){ 
    console.log(`Passou ${idade-18} ano(s) desde a idade oficial de alistamento militar.`);
}else if(idade2<18 && (sexo1=="M" || sexo1=="m")){ 
    console.log(`Ainda não tem idade para alistamento. Faltam ${18-idade2} anos.`);
}else{
    console.log(`Alistamento não obrigatório.`);
}

/*23*/
let nome3 = prompt(`Digite o nome do(a) cliente:`);
let sexo2 = prompt(`Digite o sexo do(a) cliente: `);
let valor1 = Number.parseFloat(prompt(`Digite o valor total das compras deste cliente: `));
if(sexo2==="F" || sexo2==="f" || sexo2==="Feminino" || sexo2==="feminino"){
    let desconto = valor1-(valor1*13/100);
    console.log(`Teve desconto de 13%, total da compra: R$ ${desconto.toFixed(2).replace(".",",")}`);
}else{
    let desconto = valor1-(valor1*5/100);
    console.log(`Teve desconto de 5%, total da compra: R$ ${desconto.toFixed(2).replace(".",",")}`);
}

/*24*/
let km2 = Number(prompt(`Digite a distância que deseja percorrer em km: `));
if(km2<=200){
    let passagem = km2*0.5; //Até 200km
    console.log(`São R$ 0,50 por quilômetro, até 200 km percorridos.`);
    console.log(`Você percorreu ${km2} km.`);
    console.log(`Preço da passagem: R$ ${passagem.toFixed(2).replace(".",",")}`);
}else{
    let passagem = km2*0.45; //Mais de 200km
    console.log(`São R$ 0,45 por quilômetro, mais 200 km percorridos.`);
    console.log(`Você percorreu ${km2} km.`);
    console.log(`Preço da passagem: R$ ${passagem.toFixed(2).replace(".",",")}`);
}

/*25*/
let r1 = Number.parseFloat(prompt(`Digite o primeiro tamanho da reta: `));
let r2 = Number.parseFloat(prompt(`Digite o segundo tamanho da reta: `));
let r3 = Number.parseFloat(prompt(`Digite o terceiro tamanho da reta: `));

if(r1<r2+r3 && r2<r1+r3 && r3<r1+r2){
    console.log(`É possível formar um triângulo.`);
}else{
    console.log(`Não é possível formar um triângulo.`);
}


//PASSO 03 - CONDIÇÕES COMPOSTAS:
/*26*/
let num1 = Number.parseInt(prompt(`Digite um número inteiro positivo: `));
let num2 = Number.parseInt(prompt(`Digite outro número inteiro positivo: `));
console.log(`Primeiro número digitado: ${num1}`);
console.log(`Segundo número digitado: ${num2}`);
if(num1>num2){
    console.log(`O primeiro valor é o maior.`);
}else if(num2>num1){
    console.log(`O segundo valor é o maior.`);
}else{
    console.log(`Não existe valor maior, os dois são iguais.`);
}

/*27*/
let aluno = prompt(`Digite o nome do aluno: `);
let nota5 = Number.parseInt(prompt(`Digite a primeira nota: `));
let nota6 = Number.parseInt(prompt(`Digite a segunda nota: `));
console.log(`Nota 1: ${nota5.toFixed(1)}`);
console.log(`Nota 2: ${nota6.toFixed(1)}`);
let media = (nota5+nota6)/2;
console.log(`Média do aluno ${aluno}: ${media.toFixed(1)}`);
if(media<=4.9){
    console.log(`Aluno ${aluno} REPROVADO.`);
}else if(media>=5 && media<=6.9){
    console.log(`Aluno ${aluno} em RECUPERAÇÃO.`);
}else{
    console.log(`Aluno ${aluno} APROVADO.`);
}

/*28*/
//Terreno retangular
let larg = Number.parseFloat(prompt(`Digite a largura do terreno: `));
let comprimento = Number.parseFloat(prompt(`Digite o comprimento do terreno: `));
let area2 = largura*comprimento;  //área em m²
console.log(`Largura: ${lar}`);
console.log(`Comprimento: ${comprimento}`);
console.log(`Área: ${area2} m²`);
if(area2<100){
    console.log(`TERRENO POPULAR.`);
}else if(area2>=100 && area2<=500){
    console.log(`TERRENO MASTER.`);
}else{
    console.log(`TERRENO VIP.`);
}

/*29*/
let funcionario4 = prompt(`Digite o nome do funcionário: `);
let salario4 = Number.parseFloat(prompt(`Digite o salário do funcionário: `));
let anos2 = Number.parseInt(prompt(`Há quantos anos ${funcionario4} trabalha na empresa? `));
if(anos2<3){
    console.log(`Aumento de 3%.`);
    let salario_atual = salario4+(salario4*3/100);
    console.log(`Com aumento o funcionário ${funcionario4} passa a receber: R$ ${salario_atual.toFixed(2).replace(".",",")}`);
}else if(anos2>=3 && anos2<10){
    console.log(`Aumento de 12%.`);
    let salario_atual = salario4+(salario4*12/100);
    console.log(`Com aumento o funcionário ${funcionario4} passa a receber: R$ ${salario_atual.toFixed(2).replace(".",",")}`);
}else{
    console.log(`Aumento de 20%.`);
    let salario_atual = salario4+(salario4*20/100);
    console.log(`Com aumento o funcionário ${funcionario4} passa a receber: R$ ${salario_atual.toFixed(2).replace(".",",")}`);
}

/*30*/
let a2 = Number.parseFloat(prompt(`Digite o primeiro tamanho da reta: `));
let b2 = Number.parseFloat(prompt(`Digite o segundo tamanho da reta: `));
let c2 = Number.parseFloat(prompt(`Digite o terceiro tamanho da reta: `));
console.log(`Lado a: ${a2}, lado b: ${b2} e lado c: ${c2}.`)
if(a2<b2+c2 && b2<a2+c2 && c2<a2+b2){ //Analisar v ou f de acordo com a tabela-verdade e número de prop
    console.log(`É possível formar um triângulo.`);
}else{
    console.log(`Não é possível formar um triângulo.`);
}

if(a2===b2 && b2===c2 && c2===a2){
    console.log(`TRIÂNGULO EQUILÁTERO: todos os lados são iguais.`);
}else if(a2!==b2 && b2!==c2 && c2!==a2){
    console.log(`TRIÂNGULO ESCALENO: todos os lados são diferentes.`);
}else{
    console.log(`TRIÂNGULO ISÓSCELES: dois lados iguais.`);
}

/*31*/
let jogador1 = prompt(`Escolha entre PEDRA, PAPEL e TESOURA e digite a abaixo: `);
console.log(`Você escolheu: ${jogador1.toUpperCase()}.`);
if(jogador1!=="Pedra" && jogador1!=="Papel" && jogador1!=="Tesoura"){
    console.log(`Opção inválida. Escolha entre PEDRA, PAPEL e TESOURA e tente novamente.`);
}else{
    switch (jogador1){
        case "Pedra":
            jogador1 = 0;
        break;

        case "Papel":
            jogador1 = 1;
        break;

        case "Tesoura":
            jogador1 = 2;
        break;
    }

    let maquina = Number.parseInt(Math.random()*3);
    console.log(`Máquina escolheu: ${maquina}.`) //Tirar depois

    //         0-Pedra ; 1-Papel ; 2-Tesoura
    switch (maquina){
        case 0: 
            console.log(`Opção sorteada: PEDRA.`);
        break;

        case 1:
            console.log(`Opção sorteada: PAPEL.`);
        break;

        case 2:
            console.log(`Opção sorteada: TESOURA.`);
        break;
    }

    // 2³:                                        Ganha / Perde
    //Pedra - Ganha da TESOURA e perde para PAPEL; 0 && 2 / 0 && 1
    //Papel - Ganha da PEDRA e perde para TESOURA; 1 && 0 / 1 && 2
    //Tesoura - Ganha do PAPEL e perde para PEDRA; 2 && 1 / 2 && 0
    

    if(maquina===jogador1){
        console.log(`EMPATE.`);
    }else if(maquina===0 && jogador1===2){ // PEDRA ganha da TESOURA
        console.log(`Pedra quebra da tesoura. Máquina venceu.`);
    }else if(maquina===0 && jogador1===1){ // PEDRA perde para PAPEL
        console.log(`Papel embrulha pedra. Jogador venceu. Parabéns!`);
    }else if(maquina===1 && jogador1===0){ //PAPEL ganha da PEDRA
        console.log(`Papel embrulha pedra. Máquina venceu.`);
    }else if(maquina===1 &&jogador1===2){ // PAPEL perde para TESOURA
        console.log(`Tesoura corta papel. Jogador venceu. Parabéns!`);
    }else if(maquina===2 && jogador1===1){ // TESOURA ganha do PAPEL
        console.log(`Tesoura corta papel. Máquina venceu.`);
    }else if(maquina===2 && jogador1===0){ //TESOURA perde para PEDRA
        console.log(`Pedra quebra a tesoura. Máquina venceu.`);
    }else{
        console.log(`Opção inválida.`);
    }
}

/*32*/
let pc = Number.parseInt(Math.random()*6);
let jogador2 = Number.parseInt(prompt(`Escreve abaixo o número de 0 a 5 que você acredita que será sorteado: `));
if(jogador2>5){
    console.log(`Número inválido. Digite um número de 0 a 5: `);
}else{
    console.log(`Você escreveu: ${jogador2}`);
    console.log(`Máquina sorteou ${pc}.`);
    if(pc===jogador2 && jogador2<=5){
        console.log(`Parabéns, você acertou!`);
    }else{
        console.log(`Você errou. Tente novamente!`);
    }
}

/*33*/
let casa = Number.parseFloat(prompt(`Digite o valor da casa: `));
let salario5 = Number.parseFloat(prompt(`Digite o salário do comprador: `));
let tempo = Number.parseInt(prompt(`Digite em quantos meses será o financiamento: `));
let prestacao = casa/tempo;
console.log(`Valor da casa: R$ ${casa.toFixed(2).replace(".",",")}`);
console.log(`Salário do comprador: R$ ${salario5.toFixed(2).replace(".",",")}`);
console.log(`Tempo do financiamento: ${tempo} anos.`);
console.log(`Valor mensal da prestação:  R$ ${prestacao.toFixed(2).replace(".",",")}`);

if(prestacao>salario5*30/100){
    console.log(`Prestação maior que 30% do salário. Negado!`)
}else{
    console.log(`Prestação menor que 30% do salário. Aprovado!`)
}

/*34*/
let alt = Number.parseFloat(prompt(`Digite a altura em metros (m): `));
let peso = Number.parseFloat(prompt(`Digite a peso: `));
let imc = peso/(alt*alt);   //IMC = Peso/(Altura*Altura)
console.log(`Altura ${alt.toFixed(2).replace(".",",")} cm, peso ${peso.toFixed(1)} kg e IMC ${imc.toFixed(1)}`);
if(imc<18.5){
    console.log(`Abaixo do peso.`);
}else if(imc>=18.5 && imc<25){
    console.log(`Peso ideal.`);
}else if(imc>=25 && imc<30){
    console.log(`Sobrepeso.`);
}else if(imc>=30 && imc<40){   
    console.log(`Obesidade.`);
}else{
    console.log(`Obesidade mórbida`);
}

/*35*/
let carro = prompt(`O carro alugado é da categoria popular ou luxo: `);
if(carro!=="Popular" && carro!=="popular" && carro!=="Luxo" && carro!=="luxo"){
    console.log(`Opção inválida. Digite "Popular" ou "Luxo": `); 
}else{
    let dias3 = Number.parseInt(prompt(`Ficou alugado por quantos dias: `)); 
    let km = Number.parseFloat(prompt(`Quantos Km foram percorridos: `));
    console.log(`Categoria do carro: ${carro}, período alugado: ${dias3} dias e km rodados: ${km} km`);
    if(carro==="Popular" || carro==="popular"){
        let total_dias = dias3*90;
        if(km<100){
            let total_km = km*0.2;
            let total = total_dias+total_km;
            console.log(`Preço por dia de aluguel: R$ 90,00 e preço por km rodado R$ 0,20.`);
            console.log(`R$ ${total_dias.toFixed(2).replace(".",",")} (pelo total de dias) e R$ ${total_km.toFixed(2).replace(".",",")} pelo total de km rodados. Valor total R$ ${total.toFixed(2).replace(".",",")}`);
        }else{
            let total_km = km*0.1;
            let total = total_dias+total_km;
            console.log(`Preço por dia de aluguel: R$ 90,00 e preço por km rodado R$ 0,10.`);
            console.log(`R$ ${total_dias.toFixed(2).replace(".",",")} (pelo total de dias) e R$ ${total_km.toFixed(2).replace(".",",")} pelo total de km rodados. Valor total R$ ${total.toFixed(2).replace(".",",")}`);
        }
    }else{
        if(carro==="Luxo" || carro==="luxo"){
            let total_dias = dias3*150;
            if(km<200){
                let total_km = km*0.3;
                let total = total_dias+total_km;
                console.log(`Preço por dia de aluguel: R$ 150,00 e preço por km rodado R$ 0,30.`);
                console.log(`R$ ${total_dias.toFixed(2).replace(".",",")} (pelo total de dias) e R$ ${total_km.toFixed(2).replace(".",",")} pelo total de km rodados. Valor total R$ ${total.toFixed(2).replace(".",",")}`);
            }else{
                let total_km = km*0.25;
                let total = total_dias+total_km;
                console.log(`Preço por dia de aluguel: R$ 150,00 e preço por km rodado R$ 0,25.`);
                console.log(`R$ ${total_dias.toFixed(2).replace(".",",")} (pelo total de dias) e R$ ${total_km.toFixed(2).replace(".",",")} pelo total de km rodados. Valor total R$ ${total.toFixed(2).replace(".",",")}`);
            }
        }
    }
}

/*36*/
let horas = Number(prompt(`Digite quantas horas de atividade teve por mês: `));
if(horas<10){
    var pontos = horas*2;
}else if(horas>=10 && horas<=20){
    var pontos = horas*5;
}else{
    var pontos = horas*10;   
}
var valor2 = pontos*0.05;
console.log(`Ganhou ${pontos} pontos por ${horas} horas de atividade. Valor a receber R$ ${valor2.toFixed(2).replace(".",",")}.`);

/*37*/
let funcionario5 = prompt(`Digite o nome do funcionário: `);
let salario_atual = Number.parseFloat(prompt(`Digite o salário atual do funcionário: `));
let genero = prompt(`Digite o gênero do funcionário: `);
let anos3 = Number.parseInt(prompt(`Digite há quantos anos esse funcionário trabalha na empresa: `));

if(genero==="F" || genero==="f" || genero==="Feminino" || genero==="feminino") {
    if(anos3<15){
        console.log(`Aumento de 5%.`);
        let total = salario_atual+(salario_atual*5/100);
        console.log(`Aumento no valor de R$ ${(salario_atual*5/100).toFixed(2).replace(".",",")}. Valor total com aumento R$ ${total.toFixed(2).replace(".",",")}.`);
    }else if(anos3>=15 && anos3<=20){
        console.log(`Aumento de 12%.`);
        let total = salario_atual+(salario_atual*12/100);
        console.log(`Aumento no valor de R$ ${(salario_atual*12/100).toFixed(2).replace(".",",")}. Valor total com aumento R$ ${total.toFixed(2).replace(".",",")}.`);
    }else{
        console.log(`Aumento de 23%.`);
        let total = salario_atual+(salario_atual*23/100);
        console.log(`Aumento no valor de R$ ${(salario_atual*23/100).toFixed(2).replace(".",",")}. Valor total com aumento R$ ${total.toFixed(2).replace(".",",")}.`);
    }
}else{
    if(genero==="M" || genero==="m" || genero==="Masculino" || genero==="masculino"){
        if(anos3<20){
            console.log(`Aumento de 3%.`);
            let total = salario_atual+(salario_atual*3/100);
            console.log(`Aumento no valor de R$ ${(salario_atual*3/100).toFixed(2).replace(".",",")}. Valor total com aumento R$ ${total.toFixed(2).replace(".",",")}.`);
        }else if(anos3>=20 && anos3<=30){
            console.log(`Aumento de 13%.`);
            let total = salario_atual+(salario_atual*13/100);
            console.log(`Aumento no valor de R$ ${(salario_atual*13/100).toFixed(2).replace(".",",")}. Valor total com aumento R$ ${total.toFixed(2).replace(".",",")}.`);
        }else{
            console.log(`Aumento de 25%.`);
            let total = salario_atual+(salario_atual*25/100);
            console.log(`Aumento no valor de R$ ${(salario_atual*25/100).toFixed(2).replace(".",",")}. Valor total com aumento R$ ${total.toFixed(2).replace(".",",")}.`);
        }
    }
}


//PASSO 04 – REPETIÇÕES ENQUANTO: 

/*38*/
//FOR
for(let cont1=6; cont1<12; cont1+=1){
    console.log(`${cont1} `);
}
console.log(`Acabou!`);

//WHILE
let cont2 =6;
while(cont2<12){
    console.log(`${cont2} `);
    cont2+=1;
}
console.log(`Acabou!`);

//DO WHILE
let cont3 = 6;
do{
    console.log(`${cont3} `);
    cont3+=1;
}while(cont3<12);
console.log(`Acabou!`);


/*39*/
//FOR
for(let cont4=10; cont4>=3; cont4-=1){
    console.log(`${cont4} `);
}
console.log(`Acabou!`);

//WHILE
let cont5=10;
while(cont5>=3){
    console.log(`${cont5} `);
    cont5-=1;
}
console.log(`Acabou!`);

//DO WHILE
let cont6=10;
do{
    console.log(`${cont6} `);
    cont6-=1;
}while(cont6>=3);
console.log(`Acabou!`);

/*40*/
//FOR
for(let cont7=0; cont7<=20; cont7+=3){
    console.log(`${cont7} `);
}
console.log(`Acabou!`);

//WHILE
let cont8=0;
while(cont8<=20){
    console.log(`${cont8} `);
    cont8+=3;
}
console.log(`Acabou!`);

/*41*/
//FOR
for(let cont9=100; cont9>=0; cont9-=5){
    console.log(`${cont9} `);
}
console.log(`Acabou!`);

//WHILE
let cont9=100;
while(cont9>=0){
    console.log(`${cont9} `);
    cont9-=5;
}

//DO WHILE
let cont10=100;
do{
    console.log(`${cont10} `);
    cont10-=5;
}while(cont10>=0);
console.log(`Acabou!`);


/*42*/
//FOR
let v1 = Number.parseInt(prompt(`Digite um número inteiro positivo:`));
for(let cont11=1; cont11<=v1; cont11+=1){
    console.log(`${cont11} `);
}
console.log(`Acabou!`);

//WHILE
let v2 = Number.parseInt(prompt(`Digite o valor final da contagem: `));
let cont12=1;
while(cont12<=v2){
    console.log(`${cont12} `);
    cont12+=1;
}
console.log(`Acabou!`);

//DO WHILE
let v3 = Number.parseInt(prompt(`Digite o valor final da contagem: `));
let cont13=1;
do{
    console.log(`${cont13} `);
    cont13+=1;
}while(cont13<=n);
console.log(`Acabou!`);

/*43*/
//FOR
for(let cont14=30; cont14>=1; cont14-=1){
    if(cont14%4===0){
        console.log(`[${cont14}] `);
    }else{
        console.log(`${cont14} `);
    }
}

//WHILE
let cont15=30;
while(cont15>=0){
    if(cont15%4===0){
        console.log(`${cont15}`);
    }else{
        console.log(`${cont15} `);
    }
    cont15-=1;
}

//DO WHILE
let cont16=30;
do{
    if(cont16%4===0){
        console.log(`${cont16} `);
    }else{
        console.log(`${cont16} `);
    }
    cont16-=1;
}while(cont16>=0);


/*44*/
//FOR
let inicial1 = Number.parseInt(prompt(`Digite o valor inicial da contagem: `));
let final1 = Number.parseInt(prompt(`Digite o valor final da contagem: `));
let incremento1 = Number.parseInt(prompt(`Digite o valor incremento da contagem: `));
for(let contagem1=inicial1; contagem1<=final1; contagem1+=incremento1){
    console.log(`${contagem1} `);
}
console.log(`Acabou! `);

//WHILE
var inicial2 = Number.parseInt(prompt(`Digite o valor inicial da contagem: `));
var final2 = Number.parseInt(prompt(`Digite o valor final da contagem: `));
var operador1 = Number.parseInt(prompt(`Digite o valor de incremento da contagem: `));
while(inicial2<=final2){
    console.log(`${inicial2} `);
    inicial2+=operador1;
}
console.log(`Acabou!`);

//DO WHILE
var inicial3 = Number.parseInt(prompt(`Digite o valor inicial da contagem: `));
var final3 = Number.parseInt(prompt(`Digite o valor final da contagem: `));
var operador2 = Number.parseInt(prompt(`Digite o valor de incremento da contagem: `));
do{
    console.log(`${inicial3}`);
    inicial3+=operador2;
}while(inicial3<=final3);
console.log(`Acabou!`);

/*45*/
//FOR
var inicial4 = Number.parseInt(prompt(`Digite o valor inicial da contagem: `));
var final4 = Number.parseInt(prompt(`Digite o valor final da contagem: `));
var operador3 = Number.parseInt(prompt(`Digite o valor incremento/decremento da contagem: `));
var contagem2;
if(inicial4<final4){
    for(contagem2=inicial4; contagem2<=final4; contagem2+=operador3){
        console.log(`${contagem2} `);
    }
}else{
    for(contagem2=inicial; contagem2>=final; contagem2-=operador3){
        console.log(`${contagem2} `);
    }
}
console.log(`Acabou! `);

//WHILE
var inicial5 = Number.parseInt(prompt(`Digite o valor inicial da contagem: `));
var final5 = Number.parseInt(prompt(`Digite o valor final da contagem: `));
var operador4 = Number.parseInt(prompt(`Digite o valor incremento/decremento da contagem: `));
if(inicial5<final5){
    while(inicial5<=final5){
        console.log(`${inicial5} `);
        inicial5+=operador4;
    }
}else{
    while(inicial5>=final5){
        console.log(`${inicial5} `);
        inicial5-=operador4;
    }
}
console.log(`Acabou!`);

//DO WHILE
var inicial6 = Number.parseInt(prompt(`Digite o valor inicial da contagem: `));
var final6 = Number.parseInt(prompt(`Digite o valor final da contagem: `));
var operador5 = Number.parseInt(prompt(`Digite o valor incremento/decremento da contagem: `));
if(inicial6<=final6){
    do{
        console.log(`${inicial6} `);
        inicial6+=operador5;
    }while(inicial6<=final6);
}else{
    do{
        console.log(`${inicial6} `);
        inicial6-=operador5;
    }while(inicial6>=final6);
}
console.log(`Acabou!`);

/*46*/
//FOR
var soma1 = 0;
for(let cont17=6; cont17<=100; cont17+=2){
    let s1 = soma1+=cont17;
    if(cont17<100){
        console.log(`${cont17} + `);
    }else{
        console.log(`${cont17} = ${s1}.`);
    }
}
//WHILE
let cont18=6;
let soma2 = 0;
while(cont18<=100){
    let s2 = soma2+=cont18;
    if(cont18<100){
        console.log(`${cont18} + `);
    }else{
        console.log(`${cont18} = ${s2}.`);
    }
    cont18+=2;
}

//DO WHILE
let cont19=6;
let soma3 = 0;
do{
    let s3 = soma3+=cont19;
    if(cont19<100){
        console.log(`${cont19} + `);
    }else{
        console.log(`${cont19} = ${s3}.`);
    }
    cont19+=2;
}while(cont19<=100)


/*47*/
//FOR
var soma4 = 0;
for(let cont20=500; cont20>=0; cont20-=50){
    let s4 = soma4+=c;
    if(cont20>0){
        console.log(`${cont20} + `);
    }else{
        console.log(`${cont20} = ${s4}.`)
    }
}

//WHILE
let cont21=500;
let soma5 = 0;
while(cont21>=0){
    let s5 = soma5+=c;
    if(cont21>0){
        console.log(`${cont21} + `);
    }else{
        console.log(`${cont21} = ${s5}.`);
    }
    cont21-=50
}

//DO WHILE
let cont22=500;
let soma6 = 0;
do{
    let s6 = soma6+=c;
    if(cont22>0){
        console.log(`${cont22} + `);
    }else{
        console.log(`${cont22} = ${s6}.`);
    }
    cont22-=50
}while(cont22>=0);










