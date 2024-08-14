/**
 * Function to find the sum of the two largest integers in an array.
 * 
 * Main Idea:
 * - Sort the array in descending order.
 * - Sum the first two elements, which will be the largest numbers.
 */

function sumOfTopTwo(arr) {
    // Sort the array in descending order
    arr.sort((a, b) => b - a);

    // Return the sum of the first two elements (the two largest numbers)
    return arr[0] + arr[1];
}

// Test cases
console.log(sumOfTopTwo([1, 4, 2, 3, 5])); // Output should be 9
console.log(sumOfTopTwo([10, 20, 30, 40, 50])); // Output should be 90
console.log(sumOfTopTwo([-1, -2, -3, -4, -5])); // Output should be -3
console.log(sumOfTopTwo([99, 1, 0, 99])); // Output should be 198
console.log(sumOfTopTwo([7, 7, 7, 7])); // Output should be 14
