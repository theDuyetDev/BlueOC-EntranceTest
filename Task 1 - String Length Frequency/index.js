/**
 * Function to identify the most frequent string lengths in an array of strings.
 *
 * Main Idea:
 * - Create a map (lengthMap) to store the frequency of each string length.
 * - Iterate through the array to populate the map with string lengths and their frequencies.
 * - Determine the maximum frequency found in the map.
 * - If multiple lengths share the maximum frequency, select the strings with the longest length.
 * - Return the strings matching the selected length.
 */

function mostFrequentStringLengths(arr) {
  // Create a map to count the frequency of each string length
  // Key: length of the string, Value: frequency of this length
  const lengthMap = new Map();

  arr.forEach((str) => {
    const len = str.length;
    // Increment the frequency count for this length
    lengthMap.set(len, (lengthMap.get(len) || 0) + 1);
  });
  // Example: For input ['a', 'ab', 'abc', 'cd', 'def', 'gh']
  // lengthMap would be: {1 => 1, 2 => 3, 3 => 2}, mean that there is 1 string with length 1, 3 with length 2 and 2 with length 3

  // Find the maximum frequency of any string length
  const maxFrequency = Math.max(...lengthMap.values());
  // For the above example, maxFrequency would be 3

  // Find all lengths that have the maximum frequency
  // mostFrequentLengths will hold all string lengths with max frequency
  let mostFrequentLengths = [];
  lengthMap.forEach((frequency, length) => {
    if (frequency === maxFrequency) {
      mostFrequentLengths.push(length);
    }
  });
  // For the above example, mostFrequentLengths would be: [2]

  // Find the maximum length among those with the highest frequency
  const maxLength = Math.max(...mostFrequentLengths);
  // For the above example, maxLength would be 2

  // Filter the original array to include only strings with the selected max length
  const result = arr.filter((str) => str.length === maxLength);
  // For the above example, the result would be: ['ab', 'cd', 'gh']

  return result;
}

// Test cases
function generateRandomTestCases() {
  // Generate 5 test case, which will contain 10 string with length smaller than 10
  const testCases = [];
  for (let i = 0; i < 5; i++) {
    const testCase = [];
    for (let j = 0; j < 10; j++) {
      const length = Math.floor(Math.random() * 9) + 1; // Random length smaller than 10
      const randomString = Array.from({ length }, () =>
        String.fromCharCode(97 + Math.floor(Math.random() * 26))
      ).join("");
      testCase.push(randomString);
    }
    testCases.push(testCase);
  }
  return testCases;
}

const testCases = generateRandomTestCases();
testCases.forEach((testCase, index) => {
  console.log(`Test case number ${index + 1}: `, testCase);
  const result = mostFrequentStringLengths(testCase);
  console.log(`Result for test case number ${index + 1}: `, result);
});
