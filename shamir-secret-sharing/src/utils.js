function decodeValue(base, value) {
    return parseInt(value, base);
}

function lagrangeInterpolation(points, k) {
    let result = 0;

    for (let i = 0; i < k; i++) {
        let xi = points[i].x;
        let yi = points[i].y;
        let term = yi;

        for (let j = 0; j < k; j++) {
            if (i !== j) {
                let xj = points[j].x;
                term *= (0 - xj) / (xi - xj);
            }
        }

        result += term;
    }

    return Math.round(result);
}

module.exports = {
    decodeValue,
    lagrangeInterpolation
};