import { Request, Response } from "express"
import { authenticateUserServices } from "../services/AuthenticateUserService"


class AuthenticateUserController {
  async handle(request: Request, response: Response) {

    const { code } = request.body;

    const services = new authenticateUserServices();

    try {
      const result = await services.execute(code)

      return response.json(result);
    } catch (err) {
      return response.json(err.message);
    }
    
  }
}

export { AuthenticateUserController }