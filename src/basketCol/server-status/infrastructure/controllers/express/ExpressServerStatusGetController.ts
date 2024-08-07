import { Request, Response } from 'express';

import { ExpressController } from '../../../../shared/infrastructure/api/express/controllers/ExpressController';
import { HttpStatus } from '../../../../shared/domain/http/HttpStatus';

export class ExpressServerStatusGetController extends ExpressController {
  public async run(_request: Request, response: Response): Promise<void> {
    response.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      message: 'Server is running',
      data: null,
    });
  }
}
