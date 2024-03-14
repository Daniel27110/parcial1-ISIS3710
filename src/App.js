import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginScreen from './PracticeComponents/LoginScreen'
import CardList from './PracticeComponents/CardList';
import CardDetail from './PracticeComponents/CardDetails';
import ForumComponent from './PracticeComponents/ForumComponent';
import TopNavbar from './PracticeComponents/TopNavbar';
import Sidebar from './PracticeComponents/SideBar';

import CardList2 from './PracticeComponents/CardCasas';


function App() {
  return (
    <div className={"App"} style={{ overflowX: 'hidden' }}>
      <div className="justify-content-center align-items-center" style={{ height: "100vh" }}>

        <BrowserRouter>
          <Routes>

            <Route path="/" element={<LoginScreen />} />
            <Route path="/home" element={<CardList />} />
            <Route path="/card/:id" element={<CardDetail />} />
            <Route path="/forum" element={<ForumComponent />} />
            <Route path="/bar" element={<TopNavbar />} />
            <Route path="/side" element={<Sidebar />} />

            <Route path="/casas" element={<CardList2 />} />



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