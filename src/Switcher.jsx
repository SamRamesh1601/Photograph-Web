import React, { useEffect, useRef, useState } from 'react';
import Sidebar from './Page/Sidebar';

function MainApp() {
  const token = sessionStorage.getItem("LoginInfo") || false;
  return (
    <div className="d-flex">
    {<Sidebar accessTools={token} />}
    <Router> 
      <Routes>
        <Route path='/Home' element={<Home />} />
      </Routes>
    </Router>
    </div>
  );
}

export default MainApp