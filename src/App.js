import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CardList2 from './components/CardFotos';
import CardDetail from './components/CardDetails';


function App() {
  return (
    <div className={"App"} style={{ overflowX: 'hidden' }}>
      <div className="justify-content-center align-items-center" style={{ height: "100vh" }}>

        <BrowserRouter>
          <Routes>

            <Route path="/" element={<CardList2 />} ></Route>
            <Route path="/card/:id" element={<CardDetail />} />



            <Route path="*" element={
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <h1>Not Found</h1>
              </div>
            } />

          </Routes>
        </BrowserRouter>

      </div>
    </div>
  );
}

export default App;