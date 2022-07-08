function fruit(a, b) {
  // let first = Number(a);
  // let second = Number(b);

  // while (first !== second) {
  //     if (first > second) {
  //         first -= second
  //     } else {
  //         second -= first
  //     }
  // }
  // console.log(first);
  if (b) {
    return fruit(b, a % b);
  } else {
    console.log(a);
  }
}
fruit(15, 5);
