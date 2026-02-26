import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { NotFound } from "./pages/NotFound";
import { Noise } from "./components/Noise";
import { ErrorBoundary } from "./components/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <Noise />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
