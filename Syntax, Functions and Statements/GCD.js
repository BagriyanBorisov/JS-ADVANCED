function gcd(x, y) {
    while(y) {
      let t = y;
      y = x % y;
      x = t;
    }
    return x;
  }


  console.log(gcd(15,5));
  console.log(gcd(2154, 458));
  console.log(gcd(24, 36));