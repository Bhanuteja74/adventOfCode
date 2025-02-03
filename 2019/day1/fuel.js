const input = () => {
  const data = Deno.readTextFileSync("./day1/input.txt");
  return data.split("\n");
};

const fuelRequired = (mass) => Math.floor(mass / 3) - 2;
const add = (a, b) => a + b;

const part1 = (masses) => {
  const fuelForEachMass = masses.map(fuelRequired);
  return fuelForEachMass.reduce(add, 0);
};

const fuelRequiredIncludesFuelMass = (mass, totalFuel = 0) => {
  const fuel = fuelRequired(mass);

  if (fuel < 1) return totalFuel;
  return fuelRequiredIncludesFuelMass(fuel, totalFuel + fuel);
};

const part2 = (masses) => {
  const fuelForEachMass = masses.map(fuelRequiredIncludesFuelMass);
  return fuelForEachMass.reduce((a, b) => a + b, 0);
};

const main = () => {
  const masses = input();

  console.log("Day-1");
  console.log(" part-1", part1(masses));
  console.log(" part-2", part2(masses));
};

main();
