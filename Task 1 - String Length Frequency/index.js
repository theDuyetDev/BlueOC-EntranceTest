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

    arr.forEach(str => {
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
    const result = arr.filter(str => str.length === maxLength);
    // For the above example, the result would be: ['ab', 'cd', 'gh']

    return result;
}

// Test cases
console.log(mostFrequentStringLengths(['a', 'ab', 'abc', 'cd', 'def', 'gh'])); // Output should be ['ab', 'cd', 'gh']
console.log(mostFrequentStringLengths(['abc', 'de', 'fgh', 'ijk', 'lm', 'nopq'])); // Output should be ['abc', 'fgh', 'ijk']
console.log(mostFrequentStringLengths(['one', 'two', 'three', 'four', 'five'])); // Case there are 2 length share the same frequency, it is 3 and 4, 4 is choosen because higher, so the output should be ['four', 'five']
console.log(mostFrequentStringLengths(['x', 'y', 'z', 'ab', 'cd', 'ef']));  // Case there are 2 length share the same frequency, it is 1 and 2, 2 is choosen because higher, so the output should be ['ab', 'cd', 'ef']
console.log(mostFrequentStringLengths(['aa', 'bb', 'aaa', 'bbb', 'aaaa', 'bbbb'])); // Case there are more than 2 length share the same frequency, it is 2, 3 and 4, 4 is choosen because higher, so the output should be ['aaaa', 'bbbb']
