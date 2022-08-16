import { Header } from "./components/Header";
import { Advantages } from "./components/Advantages";
import { Partnership } from "./components/Partnership";
import { Caroussel } from "./components/Caroussel";
import {ProductsCaroussel} from "./components/ProductsCaroussel";
import { Footer } from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <main className="main">
          <Header />
          <Advantages />
          <Caroussel />
          <Partnership />
          <ProductsCaroussel />
          <Footer/>
        </main>
      </div>
    </div>
  );
}

export default App;
