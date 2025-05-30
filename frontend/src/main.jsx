import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
/*import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Catalog from './pages/Catalog.jsx';
const router = createBrowserRouter([
  {path: '/', element: <App />},
  {path: '/dashboard', element: <App />},
  {path: '/catalog', element: <Catalog />},
  {path: '/books', element: <Books />},
  {path: '/users', element: <Users />},
  //{path: '/logout', element: <App />},
]);
*/
createRoot(document.getElementById('root')).render(
  <StrictMode>

    <App />
  </StrictMode>,
)
