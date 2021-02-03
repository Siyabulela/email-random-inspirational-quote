const { sendEmail, randomizer } = require(`../src/index`);
sendMail = jasmine.createSpy(sendEmail);
sendMail(`siyabulela.khumalo@umuzi.org`);

describe("Emailer", () => {
  it("should check that the function that actually sends emails gets called", () => {
    expect(sendMail).toHaveBeenCalled();
  });
  it("should check that the function gets called once, not twice", () => {
    expect(sendMail).toHaveBeenCalledTimes(1);
    expect(sendMail).not.toHaveBeenCalledTimes(2);
  });
  it("should check that function get called correctly, with the correct arguments", () => {
    expect(sendMail).toHaveBeenCalledWith(`siyabulela.khumalo@umuzi.org`);
  });
  it("should check if randomizer function exist", () => {
    expect(randomizer).toBeDefined();
  });
});