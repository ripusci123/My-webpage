import { APP_BASE_HREF } from '@angular/common';
import { ngExpressEngine } from '@nguniversal/express-engine';
import express from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import { AppServerModule } from './src/app/app.server.module'; // Ensure this is correctly imported
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

// Define your lazy module map here or import it correctly
const LAZY_MODULE_MAP: any = {}; // Replace this with the actual module map if needed

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistFolder = resolve(serverDistFolder, '../browser');
  const indexHtml = join(serverDistFolder, 'index.server.html');

  server.engine('html', ngExpressEngine({
    bootstrap: AppServerModule,
    providers: [
      provideModuleMap(LAZY_MODULE_MAP) // Ensure the lazy module map is correctly provided
    ]
  }) as any); // Cast to any to bypass type issues, use with caution

  server.set('view engine', 'html');
  server.set('views', browserDistFolder);

  // Serve static files from /browser
  server.get('*.*', express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
  }));

  // All regular routes use the Angular engine
  server.get('*', (req, res) => {
    res.render('index', { req, providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }] });
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

run();
