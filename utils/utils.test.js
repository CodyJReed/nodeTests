const expect = require("expect");

const utils = require("./utils");

describe("Utils", () => {
  describe("#add", () => {
    it("should add two numbers", () => {
      let res = utils.add(33, 11);

      expect(res)
        .toBe(44)
        .toBeA("number");
    });
  });

  it("should aysnc add two numbers", done => {
    utils.asyncAdd(3, 4, sum => {
      expect(sum)
        .toBe(7)
        .toBeA("number");
      done();
    });
  });

  it("should square a number", () => {
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
});
