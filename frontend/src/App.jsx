/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/
import{ useState } from 'react';
import { Navigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Catalog from './pages/Catalog';
import Books from './pages/Books';
import Users from './pages/Users';
import Login from './pages/login';
import Logout
 from './pages/logout';
 import ForgotPass from './pages/forgotpass';
 import Signup from './pages/signup';
import UserDashboard from './pages/UserDashboard';
import UserCatalog from './pages/UserCatalog';
import UserBooks from './pages/UserBook';
import Acquire from './components/Acquire';

export default function App() {
  // State to manage authentication status
    const [isAuthenticated, setIsAuthenticated] = useState(false);
     const [role, setRole] = useState("");
  // Pass this to Login page so it can set authentication after sign in
   const handleLogin = (userRole) => {
    setIsAuthenticated(true);
    setRole(userRole); // "admin" or "user"
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              role === "admin" ? <Dashboard /> : <UserDashboard />
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />
        {/* Admin routes */}
        <Route
          path="/dashboard"
          element={
            isAuthenticated && role === "admin" ? <Dashboard /> : <Navigate to="/" replace />
          }
        />
        {/* User routes */}
        <Route
          path="/user-dashboard"
          element={
            isAuthenticated && role === "user" ? <UserDashboard /> : <Navigate to="/" replace />
          }
        />
        <Route
          path="/catalog"
          element={
            isAuthenticated ? <Catalog /> : <Navigate to="/" replace />
          }
        />
        <Route
          path="/books"
          element={
            isAuthenticated ? <Books /> : <Navigate to="/" replace />
          }
        />
        <Route
          path="/users"
          element={
            isAuthenticated ? <Users /> : <Navigate to="/" replace />
          }
        />
        <Route
        path="/logout"
        element={<Logout onLogout={() => setIsAuthenticated(false)} />}
        />
        <Route
          path="/forgotpass"
          element={<ForgotPass />}
        />
        <Route
          path="/signup"
          element={<Signup />}
        />
        <Route
        path  ="/user-catalog"
        element={
         isAuthenticated && role === "user" ? <UserCatalog /> : <Navigate to="/" replace />
        }
        />
        <Route
        path="/UserBook"
        element={
          isAuthenticated && role === "user" ? <UserBooks /> : <Navigate to="/" replace />
        }
        />
        <Route
       path="/acquire"
       element={
       isAuthenticated && role === "user" ? <Acquire /> : <Navigate to="/" replace />
       }
       />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}
