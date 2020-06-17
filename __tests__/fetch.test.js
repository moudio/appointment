import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../src/App';

const server = setupServer(
  rest.get('/api/v1/cars', (req, res, ctx) => {
    return res(ctx.json({ cars: ['Range Rover'] }));
  })
);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
