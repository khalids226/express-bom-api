import express, { Application } from 'express';
import expressRequestId from 'express-request-id';
import { requestLoggerMiddlware } from './middleware/logger';
import { notFoundHandler, errorHandler } from './middleware/error-handlers'
import { registerRoutes } from './routes';
import logger from './libs/logger';

const port = Number(process.env.PORT || 3000);

const app: Application = express();

app.use(express.json())
app.use(expressRequestId({}))
app.use(requestLoggerMiddlware);

app.get("/", (_, res) => {
  res.json({
    healthy: true
  })
});

registerRoutes(app)

app.use(notFoundHandler);
app.use(errorHandler)

app.listen(port, () => {
  logger.info(`Server started on port ${port}`);
});
