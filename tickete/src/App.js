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
      {/* Header */}
      <Header />
      {/* Pages */}
      <PaymentPage />
      {/* Footer*/}
      <Footer />
    </div>
  );
}

export default App;
