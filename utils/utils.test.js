const expect = require("expect");

const utils = require("./utils");

it("should add two numbers", () => {
  let res = utils.add(33, 11);

  expect(res)
    .toBe(44)
    .toBeA("number");
});

it("should aysnc add two numbers", done => {
  utils.asyncAdd(3, 4, sum => {
    expect(sum)
      .toBe(7)
      .toBeA("number");
    done();
  });
});

it("should multiply one number by itself", () => {
  let res = utils.square(3);

  expect(res)
    .toBe(9)
    .toBeA("number");
});

it("should aysnc square a number", done => {
  utils.asyncSquare(3, sum => {
    expect(sum)
      .toBe(9)
      .toBeA("number");
    done();
  });
});

// it("should expect some values", () => {
//   // expect(12).toNotBe(11);
//   // expect({ name: "cody" }).toNotEqual({ name: "Cody" });
//   // expect([2, 3, 4]).toExclude(1);
//   expect({
//     name: "Cody",
//     age: 33,
//     location: "Knoxville"
//   }).toExclude({
//     age: 32
//   });
// });

it("should verify first and last names are set", () => {
  let user = {
    location: "Knoxville",
    age: 33
  };

  utils.setName(user, "Cody Reed");

  expect(user).toInclude({
    firstName: "Cody",
    lastName: "Reed"
  });
});
