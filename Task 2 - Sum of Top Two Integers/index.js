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
function generateTestCases() {
  // generate 5 test case, which will contain 10 random integer number smaller than 1000
  const testCases = [];
  for (let i = 0; i < 5; i++) {
    const testCase = [];
    for (let j = 0; j < 10; j++) {
      let num = Math.floor(Math.random() * 1000);
      testCase.push(num);
    }
    testCases.push(testCase);
  }
  return testCases;
}

const testCases = generateTestCases();
testCases.forEach((testCase, index) => {
  console.log(`Test case number ${index + 1}`, testCase);
  const result = sumOfTopTwo(testCase);
  console.log(`Result for test case number ${index + 1}: `, result);
});
