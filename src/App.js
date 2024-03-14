import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CardList2 from './components/CardFotos';
import CardDetail from './components/CardDetails';
import ForumComponent from './components/ForumComponent';


function App() {
  return (
    <div className={"App"} style={{ overflowX: 'hidden' }}>
      <div className="justify-content-center align-items-center" style={{ height: "100vh" }}>

        <BrowserRouter>
          <Routes>

            <Route path="/" element={<CardList2 />} ></Route>
            <Route path="/card/:id" element={<CardDetail />} />
            <Route path="/forum" element={<ForumComponent />} ></Route>




          </Routes>
        </BrowserRouter>

      </div>
    </div>
  );
}

export default App;