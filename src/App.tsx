import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Celebrity from "./component/celebrity";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Celebrity />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
