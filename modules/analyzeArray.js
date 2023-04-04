export default function analyzeArray(arr) {
    if (!Array.isArray(arr) || arr.length == 0) {
        throw new Error('Invalid input');
    }

    const average = arr.reduce((prev, curr) => prev + curr, 0)/arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const length = arr.length;
    return { average, min, max, length };
}