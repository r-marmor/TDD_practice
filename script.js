export default function capitalize(str) {
    let result = "";
    let newStr = str.replace(/[^a-zA-Z\s]/g, '');
    
    const firstLetter = newStr[0];
    result += firstLetter.toUpperCase();

    for (let i = 1; i < newStr.length; i++) {
        result += newStr[i].toLowerCase();
    }
    return result;
}

export function reverseString(str) {
    return str.split('').reverse().join('');
}

export const calculator = {
    add: function(x, y) {
        return x + y;
    },
    substract: function(x, y) {
        return x - y;
    },
    divide: function(x, y) {
        return x / y;
    },
    multiply: function(x, y) {
        return x * y;
    }
};