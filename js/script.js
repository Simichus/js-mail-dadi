console.log('JS OK')

// mails array
var mails = ['a@gmail.com', 'b@gmail.com', 'c@gmail.com', 'me@gmail.com', 'me@me.it', 'no@me.com'];
console.table(mails);

// var
var userMail = prompt('Inserisci la tua mail per accedere');
console.log(userMail);

// validator

var isAllowed = false;

for (var i = 0; i < mails.length; i++) {
    if (userMail === mails[i]) {
        alert('Acceso consentito')
        isAllowed = true;

        // Randomizer
        var userNumber = Math.floor(Math.random() * 6) + 1;
        console.log(userNumber);
        var cpuNumber = Math.floor(Math.random() * 6) + 1;
        console.log(cpuNumber);

        var userNumberDice = document.getElementById('user-number')
        var cpuNumberDice = document.getElementById('cpu-number')

        if (userNumber == 1) {
            userNumberDice.innerHTML = '<i class="fas fa-dice-one"></i>'
        } else if (userNumber == 2) {
            userNumberDice.innerHTML = '<i class="fas fa-dice-two"></i>'
        } else if (userNumber == 3) {
            userNumberDice.innerHTML = '<i class="fas fa-dice-three"></i>'
        } else if (userNumber == 4) {
            userNumberDice.innerHTML = '<i class="fas fa-dice-four"></i>'
        } else if (userNumber == 5) {
            userNumberDice.innerHTML = '<i class="fas fa-dice-five"></i>'
        } else if (userNumber == 6) {
            userNumberDice.innerHTML = '<i class="fas fa-dice-six"></i>'
        }

        if (cpuNumber == 1) {
            cpuNumberDice.innerHTML = '<i class="fas fa-dice-one"></i>'
        } else if (cpuNumber == 2) {
            cpuNumberDice.innerHTML = '<i class="fas fa-dice-two"></i>'
        } else if (cpuNumber == 3) {
            cpuNumberDice.innerHTML = '<i class="fas fa-dice-three"></i>'
        } else if (cpuNumber == 4) {
            cpuNumberDice.innerHTML = '<i class="fas fa-dice-four"></i>'
        } else if (cpuNumber == 5) {
            cpuNumberDice.innerHTML = '<i class="fas fa-dice-five"></i>'
        } else if (cpuNumber == 6) {
            cpuNumberDice.innerHTML = '<i class="fas fa-dice-six"></i>'
        }


        // result
        var result = document.getElementById('result');
        console.log(result)

        if (userNumber > cpuNumber) {
            result.innerHTML = 'Complimenti! Hai Vinto <i class="fas fa-smile-beam"></i>';
        } else if (userNumber == cpuNumber) {
            result.innerHTML = 'La partita è finita in pareggio <i class="fas fa-meh-rolling-eyes"></i>';
        } else {
            result.innerHTML = 'Mi dispiace... Hai perso <i class="fas fa-sad-cry"></i>'
        }
    }
}

console.log(isAllowed)

if (!isAllowed) {
    alert('Email errata: riprovare');
}

