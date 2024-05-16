const a = (() => {
  let n = 0;
  return () => {
    n++;
    console.log(n);
  };
})();

a();
a();
