import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HTMLTable from './pages/HTMLTable'
import HTMLTableWithCell from './pages/HTMLTableWithCell'
import HTMLNestedTable from './pages/HTMLNestedTable'
import MuiNestedTable from './pages/MuiNestedTable'
import MuiVirtualNestedTable from './pages/MuiVirtualNestedTable'

import Main from './pages/Main';

function App() {

  return (
    <Routes>
      <Route index element={<Main />} />
      <Route path='/html-table' element={<HTMLTable />} />
      <Route path='/html-table-with-cell' element={<HTMLTableWithCell />} />
      <Route path='/html-nested-table' element={<HTMLNestedTable />} />
      <Route path='/mui-nested-table' element={<MuiNestedTable />} />
      <Route path='/mui-virtual-nested-table' element={<MuiVirtualNestedTable />} />
    </Routes>
  );
}

export default App;
