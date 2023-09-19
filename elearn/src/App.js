// import logo from "./logo.svg";
import "./App.css";

import Nav from "./components/UI/navbar/navbar";
import Page from "./page/page";
import Footer from "./components/UI/footer/footer";

function App() {
  return (
    <div className="">
      <Nav />
      <div>
        <Page />
      </div>
      <Footer />
    </div>
  );
}

export default App;
