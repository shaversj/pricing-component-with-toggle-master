import Header from "./Header.tsx";
import CardList from "./CardList.tsx";
import { products } from "./productData.tsx";
import { useState } from "react";

function App() {
  const [showMonthly, setShowMonthly] = useState(false);

  function showMonthlyHandler() {
    setShowMonthly(!showMonthly);
  }

  return (
    <>
      <div className={"bg-primary-background-color max-w-[375px] bg-[10%_0%] bg-no-repeat px-6 [background-image:url('/src/assets/images/bg-top.svg')]"}>
        <div>
          <Header showMonthlyHandler={showMonthlyHandler} showMonthly={showMonthly} />
          <CardList products={products} showMonthly={showMonthly} />
        </div>
      </div>
    </>
  );
}

export default App;
