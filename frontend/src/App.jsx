import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserLayout from './compoents/Layout/UserLayout';
import Home from './pages/Home';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          {/* You can add more nested routes here */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
