function processSubarrays(arr) {
    // Step 1: Flatten the subarrays into a single array
    let flattenedArray = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            flattenedArray.push(arr[i][j]); // Manually adding elements
        }
    }

    // Step 2: Remove duplicates manually
    let uniqueArray = [];
    for (let i = 0; i < flattenedArray.length; i++) {
        let exists = false;
        for (let j = 0; j < uniqueArray.length; j++) {
            if (flattenedArray[i] === uniqueArray[j]) {
                exists = true;
                break;
            }
        }
        if (!exists) {
            uniqueArray.push(flattenedArray[i]);
        }
    }

    // Step 3: Calculate sum manually
    let sum = 0;
    for (let i = 0; i < uniqueArray.length; i++) {
        sum += uniqueArray[i];
    }

    return sum;
}

// Example Usage:
let subarrays = [[1, 2, 3], [3, 4, 5], [5, 6, 7]];
let result = processSubarrays(subarrays);

console.log("Sum of unique elements:", result);
