const speed = 108;

// points = (const speed- 70) / 5(iteration)
const points = Math.floor((speed - 70) / 5);
// console.log(points );
// function calculatespeed(speed) {

if (speed < 75) {
  // Or if (points <= 0)
  console.log('OK');
} else if (points>1 && points<12){
    console.log(`Points: ${points}`);
}
else if ( points < 12) {
  console.log(`Points: ${points}`);
} 
else {
  console.log(`License suspended by ${points} points`);
}
// }
// console.log(calculatespeed(130));