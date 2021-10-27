import app from './src/server';
import logger from './src/utils/logger';

const { PORT } = process.env;

app.listen(PORT || 3000, async () => {
  logger.info(`App listening on port ${process.env.PORT}!`);
});

module.exports = app;
