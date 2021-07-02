console.log('JS OK')

// mails array
var mails = ['a@gmail.com', 'b@gmail.com', 'c@gmail.com', 'me@gmail.com', 'me@me.it', 'no@me.com'];
console.table(mails);

// var
var userMail = prompt('Inserisci la tua mail per accedere');
console.log(userMail);

for (i = 0; i < mails.length; i++) {
    if (userMail === mails[i]) {
        alert('Acceso consentito')

        // Randomizer
        var userNumber = Math.floor(Math.random() * 6) + 1;
        console.log(userNumber);
        var cpuNumber = Math.floor(Math.random() * 6) + 1;
        console.log(cpuNumber);

    }

}
