export default function capitalize(str) {
    const newStr = str.replace(/[^a-zA-Z\s]/g, '');
    const firstLetter = newStr[0].toUpperCase();
    const restOfStr = newStr.slice(1).toLowerCase();
    return `${firstLetter}${restOfStr}`;
}