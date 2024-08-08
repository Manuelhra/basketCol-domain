import { Request, Response } from 'express';
import { RootController } from '../../controllers/RootController';

export abstract class ExpressController implements RootController {
  public abstract run(request: Request, response: Response): Promise<void>;
}
