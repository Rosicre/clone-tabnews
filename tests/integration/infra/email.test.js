import email from "infra/email.js";
import orchestrator from "tests/orchestrator.js";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
});

describe("infra/email.js", () => {
  test("send()", async () => {
    await orchestrator.deleteAllEmails();

    await email.send({
      from: "CatharinaBoutiqueModas <rosicreferreira@gmail.com>",
      to: "rosicreferreira@gmail.com",
      subject: "Teste de envio de email",
      text: "Este é um email de teste enviado pelo Nodemailer.",
    });
    await email.send({
      from: "CatharinaBoutiqueModas <rosicreferreira@gmail.com>",
      to: "rosicreferreira@gmail.com",
      subject: "Último email enviado",
      text: "Corpo do último email.",
    });

    const lastEmail = await orchestrator.getLastEmail();
    expect(lastEmail.sender).toBe("<rosicreferreira@gmail.com>");
    expect(lastEmail.recipients[0]).toBe("<rosicreferreira@gmail.com>");
    expect(lastEmail.subject).toBe("Último email enviado");
    expect(lastEmail.text).toBe("Corpo do último email.\r\n");
  });
});
