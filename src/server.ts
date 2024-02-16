import { App } from '@/app';

import { KrisaRoute } from './routes/krisa.route';
import { TarotRoute } from './routes/tarot.route';

const app = new App([new KrisaRoute(), new TarotRoute()]);

app.listen();
