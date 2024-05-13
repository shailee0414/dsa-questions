
let matrix = [
    [1, 2, 3, 4]
    [5, 6, 7, 8]
    [9, 10, 11, 12]
    [13, 14, 15, 16]
]

const differenceOfDiagonals = (matrix) => {
    let i = 0;
    let d1 = 0;
    let d2 = 0;
    while (i < n ) {
        d1 += matrix[i][i]
        d2 += matrix[matrix.length - 1 - i][i]
        i++;
    }
    return d1 - d2
}
