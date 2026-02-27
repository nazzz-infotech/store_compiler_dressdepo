import "./App.css";
import { StoreRenderer } from "./StoreRenderer";

const xml = `
<store>
  <banner image="https://picsum.photos/1200/400" title="Dress Depo" subtitle="Premium Fashion" />
  <banner image="https://picsum.photos/1200/401" title="Summer Sale" subtitle="Up to 50% OFF" />
  <column gap="18" paddingBottom="40">
    <banner image="https://picsum.photos/1200/402" title="Winter Sale" subtitle="Up to 50% OFF" />
    <banner image="https://picsum.photos/1200/402" title="Winter Sale" subtitle="Up to 50% OFF" />
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
