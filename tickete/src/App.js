/*
  Component Imports
*/
import "./App.css";
import componentExport from "./components/componentExport";
import PaymentPage from "./Pages/PaymentPage/PaymentPage";

const { Header, Footer } = componentExport;

function App() {
  return (
    <div className="App">
      <div className="container__design">
        {/* Header */}
        <Header />
        {/* Pages */}
        <PaymentPage />
      </div>
      {/* Footer*/}
      <Footer />
    </div>
  );
}

export default App;
