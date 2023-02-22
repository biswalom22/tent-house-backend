import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import path = require('path');
import * as cors from 'cors';
import router from './app/routes/index.routes';

dotenv.config();

// create express app
const app = express();
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse requests of content-type - application/json
app.use(bodyParser.json());

app.use(cors());
app.use('/api/v1', router);

app.listen(process.env.NODE_PORT, () => {
	console.log(`Server is listening on port ${process.env.NODE_PORT}`);
});
