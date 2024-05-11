const a = () => {
  Promise.resolve().then(() => {
    console.log(3);
  });
};

setTimeout(() => {
  console.log(1);
}, 0);

Promise.resolve().then(() => {
  console.log(2);
  a();
});
