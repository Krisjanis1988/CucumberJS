module.exports = {
    getRandomString : function (length) {
    var randomChars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var user = '';
    var web = '';
    for ( var i = 0; i < length; i++ ) {
        user += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        web += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    var email = (user + "@" + web + ".com");
    return email;   
}
}






 




