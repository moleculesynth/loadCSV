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

  // getColumn moves to an array of all the values in the column with the given name.
  let petlength = data.getColumn("PetalLengthCm");
  let petwidth = data.getColumn("PetalWidthCm");
  
  for (var i = 0; i < data.getRowCount(); i++) {
    let val1 = data.getNum(i, "PetalLengthCm"); // iris petal lengths
    let val2 = data.getNum(i, "PetalWidthCm"); //iris petal widths
    let xpos = map(val1, 0, data.getRowCount(), 0, width);
    let ypos = map(0, val2, data.getRowCount(), height, 0);
    point(xpos, ypos);
    stroke(255, 1, 1);

  }

}
