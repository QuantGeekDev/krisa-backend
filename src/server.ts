import { App } from '@/app';

import { KrisaRoute } from './routes/krisa.route';

const app = new App([new KrisaRoute()]);

app.listen();
