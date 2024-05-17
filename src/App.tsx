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
      <div className={""}>
        <div id={"main"} className={"bg-primary-background-color mx-auto w-[375px] px-6  lg:min-h-[850px] lg:w-[1440px]"}>
          <div>
            <Header showMonthlyHandler={showMonthlyHandler} showMonthly={showMonthly} />
            <CardList products={products} showMonthly={showMonthly} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
