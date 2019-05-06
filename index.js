import compression from 'compression';
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import JssProvider from 'react-jss/lib/JssProvider';
import { SheetsRegistry } from 'jss';
import { createGenerateClassName } from '@material-ui/core/styles';
import App from './src/components/App';
import template from './server/template';

const application = express();
const port = 3000;

application.use(compression());
application.use(express.static('dist/client'));

const generateClassName = createGenerateClassName();
const sheetsRegistry = new SheetsRegistry();

application.get('/', (req, res) => {
  const html = ReactDOMServer.renderToString(
    <JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>
      <App />
    </JssProvider>,
  );
  res.send(template(html, sheetsRegistry.toString()));
});

application.listen(port, () => console.log(`Example app listening on port ${port}!`));
