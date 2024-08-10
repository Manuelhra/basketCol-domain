import { Request, Response, Router } from 'express';
import { Mongoose, Schema } from 'mongoose';

import { IFileSystem } from '../../../../shared/infrastructure/file-system/IFileSystem';
import { IController } from '../../../../shared/infrastructure/server/controllers/IController';
import { IRouteManager } from '../../../../shared/infrastructure/server/routes/IRouteManager';
import { CreateHostUserUseCase } from '../../application/use-cases/CreateHostUserUseCase';
import { IHostUserRepository } from '../../domain/repository/IHostUserRepository';
import { SecurePasswordCreationService } from '../../../shared/domain/services/SecurePasswordCreationService';
import { IPasswordEncrypterService } from '../../../shared/domain/services/IPasswordEncrypterService';
import { IMongooseHostUserDocument } from '../persistence/mongoose/IMongooseHostUserDocument';
import { ICreatePasswordValueObjectService } from '../../../shared/domain/services/ICreatePasswordValueObjectService';
import { BusinessDateService } from '../../../../shared/domain/services/BusinessDateService';
import { IMongooseConfig } from '../../../../shared/infrastructure/persistence/mongoose/IMongooseConfig';

export interface IHostUserContainer {
  basePath: string;
  businessDateService: BusinessDateService;
  createHostUserUseCase: CreateHostUserUseCase;
  createPasswordValueObjectService: ICreatePasswordValueObjectService;
  expressHostUserPostController: IController<Request, Response>;
  expressHostUserRouteManager: IRouteManager<Router>;
  fileSystem: IFileSystem;
  hostUserRepository: IHostUserRepository;
  mongooseClient: Promise<Mongoose>;
  mongooseConfig: IMongooseConfig;
  mongooseSchema: Schema<IMongooseHostUserDocument>;
  passwordEncrypterService: IPasswordEncrypterService;
  securePasswordCreationService: SecurePasswordCreationService;
}
