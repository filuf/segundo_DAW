let set = new Set();

set.add(NaN);
set.add(NaN);
set.add(4);
set.add(NaN);
set.add(4);
set.add(NaN);
set.add(+0);
set.add(-0);
set.add("0");
set.add(0);

console.log(set);