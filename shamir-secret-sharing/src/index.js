const fs = require('fs');
const path = require('path');
const { decodeValue, lagrangeInterpolation } = require('./utils');

function findConstantTerm(filename) {
    const filePath = path.join(__dirname, '..', 'data', filename);
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    const n = data.keys.n;
    const k = data.keys.k;

    let points = [];

    Object.keys(data).forEach((key) => {
        if (key !== "keys") {
            let x = parseInt(key);
            let base = parseInt(data[key].base);
            let y = decodeValue(base, data[key].value);
            points.push({ x, y });
        }
    });

    let constantTerm = lagrangeInterpolation(points, k);
    console.log(`Constant Term (Secret) for ${filename}: ${constantTerm}`);
}

findConstantTerm('testcase1.json');
findConstantTerm('testcase2.json');
