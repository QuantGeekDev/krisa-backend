import { connect, set } from 'mongoose';
import { NODE_ENV } from '@config';

export const dbConnection = async () => {
  const dbConfig = {
    url: 'mongodb+srv://ceres:JAJAJA69@ceres.ijmqafi.mongodb.net/krisas',
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  };

  if (NODE_ENV !== 'production') {
    set('debug', true);
  }

  await connect(dbConfig.url);
};
