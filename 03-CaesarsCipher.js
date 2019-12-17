function rot13(str) {

    let charCodes = [];

    for (let i = 0; i < str.length; i++) {
        charCodes.push(str.charCodeAt(i));
    }

    function convert(num) {

        if (num < 65 || num > 90) {
            num = num;
        } else if (num - 13 < 65) {
            num = 91 - (65 - (num - 13));
        } else {
            num = num - 13;
        }

        return num;
    }

    return charCodes
        .map(x => convert(x))
        .map(x => String.fromCharCode(x))
        .join('');

}

rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");