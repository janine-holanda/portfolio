import { HashRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </HashRouter>
  );
}
