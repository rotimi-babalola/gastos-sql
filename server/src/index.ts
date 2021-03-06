import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { server } from '../server';

const serverOptions = {
  port: 5000,
  endpoint: '/graphql',
  playground: '/docs',
  tracing: true,
  debug: true,
  cors: {
    credentials: true,
    origin: ['http://localhost:8080'],
  },
};

const startServer = () => {
  server.start(serverOptions, () => console.log('The server is running on http://localhost:5000'));
  createConnection();
  console.log('Here you can setup and run express/koa/any other framework.');
};

startServer();
