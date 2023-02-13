const exerciseA = () => {
  for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
};

const x = ["n", "bro", "c", "|"];
const y = ["d", "n", "l", "bro", "g"];
console.log(
  y.map((e) => (!x.includes(e) ? e : null)).filter((e) => e !== null)
);
console.log(exerciseA());
