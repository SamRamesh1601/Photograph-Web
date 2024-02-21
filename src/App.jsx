  import React  , { Suspense, lazy} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation, } from 'react-router-dom';
// import Login from './Page/Login';
// import Home from './Page/Home';
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import Loading from './Components/Loading';

function App() {
  return (
    <Router> {/* Move the Router component here */}
      <AppContent />
    </Router>
  );
}

const Login = lazy(() => import('./Page/Login'));
const Home = lazy(() => import('./Page/Home'));

function AppContent() {
  const { pathname } = useLocation();
  const shouldRenderNavAndSidebar = () => {
    const excludedPaths = ["/login", "/verify", "/forget", "/resetpassword", "/otpverify"];
    return !excludedPaths.includes(pathname);
  };
  const laziedComponent = ({ Fun }) => {
    const Component1 = lazy(<Fun />)
    return <Component1 />
  }
  if(pathname === "/login" || pathname === "/forget" || pathname === "/verify" || pathname === "/resetpassword" || pathname === "/otpverify") {
    return(
      <Suspense fallback={<Loading />}>
            <Routes>
                <Route path='/login' element={<Login />} ></Route>
            </Routes>
      </Suspense> 
    )
  }

  return (
    <>
    <div className="main-page ">
      </div>
    <div className="basic-vr-center-div main-page-bg ">
       <Suspense fallback={<Loading />}>
        {shouldRenderNavAndSidebar() && <Sidebar />}
        <div className="basic-vr-center-div page-view flex-col">
            {shouldRenderNavAndSidebar() && <Navbar />}
            <Routes>
              <Route path="/home" element={<Home/>}  />
              <Route path='/login' element={<Login />} />
            </Routes>
          </div>
            </Suspense>
    </div>
    </>
  );
}

export default App;