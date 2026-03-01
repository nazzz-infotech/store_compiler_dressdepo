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
  <row gap="5" backgroundColor="#eceff1" padding="2" borderRadius="0.5" borderSize="2.5"
    borderType="ridge" borderColor="#1a237e" ribbon="true" ribbonText="2@1999₹" ribbonType="corner"
    ribbonColor="#2e7d32" ribbonTextColor="#ffffff" flexWrap="false">
    <rectangle width="32" height="32" backgroundColor="green" justifyContent />
  </row>
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
