function deleteMatrixRowElement(matrix: number[][]): number[][] {
  if (matrix.length === 0) {
    throw new Error('matrix length cannot be zero');
  }
  let counter: number = 0;

  for (let i: number = 0; i < matrix.length; i++) {
    for (let j: number = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        counter++;
      }
    }
    if (counter > 0) {
      matrix.splice(i, 1);
      counter = 0;
      i--;
    }
  }
  return matrix;
}

function deleteMatrixColumnElement(matrix: number[][]): number[][] {
  if (matrix.length === 0) {
    throw new Error('matrix length cannot be zero');
  }
  for (let i: number = 0; i < matrix.length; i++) {
    for (let j: number = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        let column: number = j;
        for (let k: number = 0; k < matrix.length; k++) {
          matrix[k].splice(column, 1);
          j--;
        }
      }
    }
    for (let l: number = 0; l < matrix.length; l++) {
      if (matrix[l].length === 0) {
        matrix.splice(l--, 1);
      }
    }
  }
  return matrix;
}