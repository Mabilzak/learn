console.log("Hello World 'pq'");
var rating = 1;
while (rating <= 10) {
  console.log("Smart => " + rating);
  if (rating <= 3) {
    console.log(" Stupid");
  } else if (rating <= 5) {
    console.log(" Low");
  } else if (rating <= 8) {
    console.log(" Middle So so");
  } else if (rating <= 10) {
    console.log(" Smart");
  }
  rating++;
}

for (var rating = 10, strong = 1; strong <= rating; strong++) {
  if (strong <= 4) {
    console.log("weak!!!");
  } else if (strong <= 7) {
    console.log("Yeahh Is Ok So so");
  } else if (strong <= 10) {
    console.log("Is good Is Strongs");
  }
}
