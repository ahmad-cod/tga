let nestedArr = [ 
    [
        [1, 2]
    ], 
    [
        [3, 4, 5, 6, 7, 8]
    ]
];

for (let i = 0; i < nestedArr.length; i++) {
    // console.log(nestedArr[i]);
    for (let j = 0; j < nestedArr[i].length; j++) {
        // console.log(nestedArr[i][j]);
        for (let k = 0; k < nestedArr[i][j].length; k++) {
            console.log(nestedArr[i][j][k]);
        }
    }
    // console.log(nestedArr)
}
