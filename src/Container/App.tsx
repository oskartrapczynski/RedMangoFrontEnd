import { Routes, Route } from 'react-router-dom';
import { Header, Footer } from '../Components/Layout/';
import { Home, MenuItemDetails, NotFound } from '../Pages';

function App() {
  return (
    <>
      <Header />
      <div className="pb-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/menuItemDetails/:menuItemId"
            element={<MenuItemDetails />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
