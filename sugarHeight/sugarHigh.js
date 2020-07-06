let a = [1, 3, 20, 15];
let f = [];

console.log(a.indexOf(1));
let sum = 0;
let c = [];
let d = [];

function sugarHigh(candies, threshold) {
  if (0 <= candies.length <= 105 && 1 <= threshold <= 109) {
    a.forEach((a) => {
      f.push(a);
    });

    let b = candies.sort(function (a, b) {
      return a - b;
    });
    console.log(b);

    for (let i = 0; i < b.length; i++) {
      sum += b[i];
      c.push(b[i]);
      if (sum >= threshold) {
        c.pop();
        break;
      }
    }
    console.log(c);
    c.forEach((a) => {
      f.forEach((b) => {
        if (a === b) {
          console.log(d.push(f.indexOf(b)));
          d.sort(function (a, b) {
            return a - b;
          });
        }
      });
    });

    return d;
  } else {
    alert("you entered an incorrect entry");
  }
}

console.log(sugarHigh(a, 20));
