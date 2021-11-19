import Header from "./component/header/Header";
import Cashier from "./pages/cashier-page/Cashier";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <Cashier></Cashier>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
