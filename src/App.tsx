import { useEffect, useState } from "react";
import "./App.css";
import { StoreRenderer } from "./StoreRenderer";

function App() {
  const [xml, setXml] = useState("");

  useEffect(() => {
    fetch("/test.xml")
      .then((res) => res.text())
      .then(setXml);
  }, []);

  return (
    <div className="dsc:flex dsc:flex-col dsc:gap-6 dsc:p-6">
      <StoreRenderer xml={xml} />
    </div>
  );
}

export default App;

