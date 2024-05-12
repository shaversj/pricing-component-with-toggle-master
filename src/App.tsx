import Header from "./Header.tsx";
import CardList from "./CardList.tsx";
import { products } from "./productData.tsx";

function App() {
  return (
    <>
      <div className={"bg bg-primary-background-color max-w-[375px] px-6"}>
        <div>
          <Header />
          <CardList products={products} />
        </div>
      </div>
    </>
  );
}

export default App;
