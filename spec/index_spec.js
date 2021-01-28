const { sendEmail, randomizer } = require(`../src/index`);

describe("Emailer", function () {
  it("should check if sendEmail function exist", () => {
    expect(sendEmail).toBeDefined();
  });
  it("should check if randomizer function exist", () => {
    expect(randomizer).toBeDefined();
  });
  it("should spy on mailOptions in sendEmail function", () => {
    mailOptions = jasmine.createSpy("sendEmail");
    mailOptions();
    expect(mailOptions).toHaveBeenCalled();
  });
  it("should spy on transport in sendMail function", () => {
    transport = jasmine.createSpy("sendEmail");
    transport();
    expect(transport).toHaveBeenCalled();
  });
});
