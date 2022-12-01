function magicMatrices(matrix)
{
    let sumRow = 0;
    let sumRowNext = 0;
    let areEqual = true;
    for ( let i = 0; i < matrix.length - 1; i++)
    {
        let currRow = matrix[i];
        let currRowNext = matrix[i + 1];
        sumRow = currRow.reduce((total, curr) => total + curr)
        sumRowNext = currRowNext.reduce((total, curr) => total + curr)
        let sumCol = 0;
        let sumColNext = 0;
        for (let j = 0; j < matrix.length; j++)
        {
            sumCol += matrix[i][j];
            sumColNext += matrix[i + 1][j];
        }

        if (sumRow !== sumRowNext || sumCol !== sumColNext)
        {
            areEqual = false;
            break;
        }
    }
    return areEqual;
}

console.log(magicMatrices([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]));

console.log("---------------------");

console.log(magicMatrices([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]));