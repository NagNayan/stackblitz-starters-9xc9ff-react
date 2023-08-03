import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Table from './table/Table';
import Child from './table/Child';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Table />
  </StrictMode>
);
