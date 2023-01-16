var o = "";

for (var i = 10; i > 0; i--) {
  for (var j = 0; j < i; j++) {
    o = o + "*";
  }
  o = o + "\n";
}
console.log(o);
