'use strict'

module.exports = {
    getRandomString : function (length) {
    const randomChars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let user = '';
    let web = '';
    for ( var i = 0; i < length; i++ ) {
        user += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        web += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    let email = (user + "@" + web + ".com");
    return email;   
}
}






 




