import { Router } from 'express';
import * as api from './controllers';

// Swaggar call

const swaggerUI = require('swagger-ui-express')
const swaggerDocument = require('../common/swagger-data/swagger.json')

// Define routes..
var router = Router();

// API Main route..
router.use('/api/v1' , api.default);

// Swagger route
router.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))
export default router;