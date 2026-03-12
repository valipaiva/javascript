alert("Estou aprendendo JavaScript");

//Desafios - Respostas
//Mostre um alerta com a mensagem "Bem-vindo ao nosso site!".
alert('Bem-vindo ao nosso site!');

//Declare uma variável chamada nome e atribua a ela o valor "Lua".
let nome = "Lua";

//Crie uma variável chamada idade e atribua a ela o valor 25.
let idade = 25;

//Defina uma variável numeroDeVendas e atribua a ela o valor 50.
let numeroDeVendas = 50;

//Defina uma variável saldoDisponivel e atribua a ela o valor 1000.
let saldoDisponivel = 1000;

//Exiba um alerta com o texto "Erro! Preencha todos os campos."
alert('Erro! Preencha todos os campos');

//Declare uma variável chamada mensagemDeErro e atribua a ela o valor "Erro! Preencha todos os campos." Agora exiba um alerta com o valor da variável mensagemDeErro.
let mensagemDeErro = 'Erro! Preencha todos os campos';
alert(mensagemDeErro);

//Use um prompt para perguntar o nome do usuário e armazená-lo na variável nome.
let nome = prompt('Digite o seu nome');

//Peça ao usuário para digitar sua idade usando um prompt e armazene-a na variável idade.
let idade = prompt('Digite a sua idade');

//Peça ao usuário para digitar sua idade usando um prompt e armazene-a na variável idade. Agora, a idade seja maior ou igual que 18, exiba um alerta com a mensagem "Pode tirar a habilitação!".
let idade = prompt('Digite a sua idade');
if (idade >= 18) {
    alert('Pode tirar a habilitação!'); 
}


// 1. Função que exibe "Olá, mundo!" no console
function olaMundo() {
    console.log("Olá, mundo!");
}

// 2. Função que recebe um nome e exibe "Olá, [nome]!"
function cumprimentar(nome) {
    console.log("Olá, " + nome + "!");
}

// 3. Função que recebe um número e retorna o dobro
function dobro(numero) {
    return numero * 2;
}

// 4. Função que recebe três números e retorna a média
function media(a, b, c) {
    return (a + b + c) / 3;
}

// 5. Função que recebe dois números e retorna o maior
function maiorNumero(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

// 6. Função que recebe um número e retorna ele multiplicado por ele mesmo
function quadrado(numero) {
    return numero * numero;
}


// Exemplos de uso
olaMundo();
cumprimentar("João");

console.log(dobro(5));        // 10
console.log(media(6, 7, 8));  // 7
console.log(maiorNumero(10, 20)); // 20
console.log(quadrado(4));     // 16