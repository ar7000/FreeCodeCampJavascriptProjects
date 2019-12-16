function convertToRoman(num) {

    let ones = Math.floor(num % 10);
    let tens = Math.floor((num / 10) % 10);
    let hundreds = Math.floor((num / 100) % 10);
    let thousands = Math.floor((num / 1000) % 10);

    let oneChars = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    let tenChars = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    let hundredChars = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    let thousandChars = ["", "M", "MM", "MMM", "MMMM", "MMMMM", "MMMMMM", "MMMMMMM", "MMMMMMMM", "MMMMMMMMM"];

    let converted = "";

    converted += thousandChars[thousands];
    converted += hundredChars[hundreds];
    converted += tenChars[tens];
    converted += oneChars[ones];

    return converted;

}

convertToRoman(1006);