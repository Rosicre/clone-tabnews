import { createRouter } from "next-connect";
import controller from "infra/controller.js";
import user from "models/user.js";
import activation from "models/activation.js";

const router = createRouter();
router.post(postHandler);
export default router.handler(controller.errorHandlers);

async function postHandler(request, response) {
  const userInputValues = request.body;
  const newUser = await user.create(userInputValues);

  const activationToken = await activation.create(newUser.id); // Cria o Token de Ativação
  await activation.sendEmailToUser(newUser, activationToken); // Envia o email de ativação

  return response.status(201).json(newUser);
}
