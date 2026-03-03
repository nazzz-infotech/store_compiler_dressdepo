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
  <row gap="5" backgroundColor="#eceff1" padding="5" borderRadius="0.5" borderSize="2.5"
    borderType="ridge" borderColor="#1a237e" ribbon="true" ribbonText="2@1999₹" ribbonType="corner"
    ribbonColor="#2e7d32" ribbonTextColor="#ffffff" flexWrap="false">
    <zigzag_box size="64" width="128" height="128" margin="8" backgroundColor="navy" ribbon="true" ribbonText="Shape" ribbonColor="#512da8" ribbonType="edge">
    <text text="hello !" />
    </zigzag_box>
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
