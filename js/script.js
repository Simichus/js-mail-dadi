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


    }
}

if (i >= mails.length) {
    alert('La mail risulta errata. Riprovare')
}
