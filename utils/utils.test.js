const expect = require("expect");

const utils = require("./utils");

it("should add two numbers", () => {
  let res = utils.add(33, 11);

  expect(res)
    .toBe(44)
    .toBeA("number");
});

it("should multiply one number by itself", () => {
  let res = utils.square(3);

  expect(res)
    .toBe(9)
    .toBeA("number");
});

it("should expect some values", () => {
  // expect(12).toNotBe(11);
  // expect({ name: "cody" }).toNotEqual({ name: "Cody" });
  // expect([2, 3, 4]).toExclude(1);
  expect({
    name: "Cody",
    age: 33,
    location: "Knoxville"
  }).toExclude({
    age: 32
  });
});
