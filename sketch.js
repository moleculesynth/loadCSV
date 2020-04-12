var data;

// preload table data
function preload() {
  data = loadTable('data/iris.csv', 'csv', 'header');
}

function setup() {
  createCanvas(640, 480);
  console.log(data.getRowCount());
  console.log(data.columns); //this will show in console the heading for each column
  background(51);
  stroke(255);

  // getColumn evaluates to a list of all the values
  // in the column with the given name.
  let petals = data.getColumn("PetalLengthCm");
  // the min and max functions tell us what the lowest
  // and highest values of the array are
  let minPetalL = min(petals);
  let maxPetalL = max(petals);
  console.log(minPetalL);
  console.log(maxPetalL);

  // noprotect
  for (var i = 0; i < data.getRowCount(); i++) {

    let val = data.getNum(i, "PetalLengthCm");
    // draw iris petal lengths
    let xpos = map(i, 0, data.getRowCount(), 0, width);
    // why map from height to zero (instead of from
    // zero to height?)
    let ypos = map(val, minPetalL, maxPetalL, height, 0);

    point(xpos, ypos);

  }

  // draw a line where zero is
  stroke(255, 0, 0);
  let zeroVal = map(0, minPetalL, maxPetalL, height, 0);
  line(0, zeroVal, width, zeroVal);
}
