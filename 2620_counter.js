// 2620. Counter

// Solution

function counter(n, calls) {
  for (let i = 0; i < calls.length; i++) {
    console.log(n);
    n++;
  }
}

counter(10, ["call", "call", "call"]);
