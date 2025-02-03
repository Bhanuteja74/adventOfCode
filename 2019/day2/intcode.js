const input = () => {
  const data = Deno.readTextFileSync("./day2/input.txt");
  return data.split(",").map((a) => +a);
};

const add = (data, index) => {
  data[data[index + 3]] = data[data[index + 2]] + data[data[index + 1]];
  return data;
};

const mul = (data, index) => {
  data[data[index + 3]] = data[data[index + 2]] * data[data[index + 1]];
  return data;
};

const part1 = (intcode) => {
  const operation = { 1: add, 2: mul };
  let index = 0;

  while (index < intcode.length) {
    if (intcode[index] === 99) return intcode[0];
    operation[intcode[index]](intcode, index);
    index += 4;
  }
  return intcode[0];
};

const main = () => {
  const intcode = input();
  intcode[1] = 12;
  intcode[2] = 2;
  console.log(part1(intcode));
};

main();
