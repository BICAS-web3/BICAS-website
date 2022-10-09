import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './pages/Main/Main';

import ScrollToTop from "./components/ui/ScrollToTop";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop/>

        <Header />

        <Routes>
          <Route path={'/'} element={<Main/>}/>
        </Routes>

        <Footer/>

      </BrowserRouter>
    </div>
  );
}

export default App;