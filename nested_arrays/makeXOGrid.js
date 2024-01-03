function makeXOGrid(rows, columns) {
    const grid = [];
  
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < columns; j++) {
        // Use a conditional (ternary) operator to switch between "X" and "O"
        row.push(j % 2 === 0 ? "X" : "O");
      }
      grid.push(row);
    }
  
    return grid;
  }
  
  // Example usage:
  const resultGrid = makeXOGrid(3, 4);
  console.log(resultGrid);
  