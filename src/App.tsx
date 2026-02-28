import "./App.css";
import { StoreRenderer } from "./StoreRenderer";

const xml = `
<?xml version="1.1" encoding="UTF-8"?>
<store>
  <banner
    image="https://storage.googleapis.com/dressdepo_storage_bucket/sellers/assets/default/default_store_banner.png"
    title="Hi, 3z Fashions"
    subtitle="here's is your new store, let it customize !"
  />
  <column gap="2" backgroundColor="#eceff1" padding="5.5" borderRadius="0.5" borderSize="2.5"
    borderType="ridge" borderColor="#1a237e" ribbon="true" ribbonText="2@1999₹" ribbonType="corner"
    ribbonColor="#2e7d32" ribbonTextColor="#ffffff">
    <text text="hello !!!" type="h5" />
  </column>
</store>
`;

function App() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <StoreRenderer xml={xml} />
    </div>
  );
}

export default App;
