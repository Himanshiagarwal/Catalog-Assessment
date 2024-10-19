const fs = require('fs');
const path = require('path');
const { decodeValue, lagrangeInterpolation } = require('./utils');

// Function to read JSON test cases and calculate the constant term 'c'
function findConstantTerm(filename) {
    // Read and parse JSON file
    const filePath = path.join(__dirname, '..', 'data', filename);
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    const n = data.keys.n;
    const k = data.keys.k;

    // Collect points (x, y) after decoding the values
    let points = [];

    // Iterate over the keys of the JSON file dynamically
    Object.keys(data).forEach((key) => {
        if (key !== "keys") {  // Exclude the 'keys' property
            let x = parseInt(key);  // x is the key itself
            let base = parseInt(data[key].base);
            let y = decodeValue(base, data[key].value);  // Decode y based on base
            points.push({ x, y });
        }
    });

    // Calculate constant term using Lagrange interpolation
    let constantTerm = lagrangeInterpolation(points, k);
    console.log(`Constant Term (Secret) for ${filename}: ${constantTerm}`);
}

// Run the solution for both test cases
findConstantTerm('testcase1.json');
findConstantTerm('testcase2.json');