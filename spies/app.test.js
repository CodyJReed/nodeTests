const expect = require("expect");
const rewire = require("rewire");

const app = rewire("./app");

describe("App", () => {
  const db = {
    saveUser: expect.createSpy()
  };
  app.__set__("db", db);

  it("should call to spy correctly", () => {
    const spy = expect.createSpy();
    spy("Cody", 33);
    // Checks for spy() truthy
    expect(spy).toHaveBeenCalledWith("Cody", 33);
  });

  it("should call saveUser with user object", () => {
    const email = "test@example.com";
    const password = "test123";

    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({ email, password });
  });
});
