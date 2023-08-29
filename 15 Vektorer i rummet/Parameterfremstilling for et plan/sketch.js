let p1 = [2, -4, -2];
let p2 = [-2, 3, 4];
let p3 = [13, 4, -2];

let n;
let distance = 2.5; // Maximum distance between points
let radius = 2;

let angle = 0;

function setup() 
{
  createCanvas(500, 500, WEBGL);
  angleMode(DEGREES);
}

function draw() 
{
  background(220);

  lights();
  noStroke();

  // Create vectors between the points
  let v1 = [p2[0] - p1[0],
            p2[1] - p1[1],
            p2[2] - p1[2],];

  let v2 = [p3[0] - p1[0],
            p3[1] - p1[1],
            p3[2] - p1[2],];        
  
  // Normalize vectors v1 and v2
  let length1 = sqrt(v1[0] + v1[1] + v1[2]);
  v1 = [v1[0] / length1, v1[1] / length1, v1[2] / length1];
  
  let length2 = sqrt(v2[0] + v2[1] + v2[2]);
  v2 = [v2[0] / length2, v2[1] / length2, v2[2] / length2];

  for(let s1 = -25; s1 < 25; s1++)
  {
    for(let s2 = -25; s2 < 25; s2++)
    {
      push();

      // Parameterfremstilling
      translate(p1[0] + n * (v1[0] * s1 + v2[0] * s2),
                p1[1] + n * (v1[1] * s1 + v2[1] * s2),
                p1[2] + n * (v1[2] * s1 + v2[2] * s2));

      fill(0, 255, 255);
      sphere(radius);

      pop();
    }
  }

  // Do fancy graphics stuff
  angle++;
  n = abs(sin(angle)) * distance + 1;
}