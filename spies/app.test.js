const expect = require("expect");

describe("App", () => {
  it("should call to spy correctly", () => {
    const spy = expect.createSpy();
    spy("Cody", 33);
    // Checks for spy() truthy
    expect(spy).toHaveBeenCalledWith("Cody", 33);
  });
});
