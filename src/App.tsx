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
      <div
        className={
          "mx-auto w-[375px] bg-primary-background-color bg-[url('/src/assets/images/bg-top.svg')] bg-[length:472px_650px] bg-[left_150px_top_-50px] bg-no-repeat px-6 lg:min-h-[850px] lg:w-[1440px] lg:bg-[url('/src/assets/images/bg-top.svg'),url('/src/assets/images/bg-bottom.svg')] lg:bg-auto lg:bg-[position:top_right,bottom_left]"
        }
      >
        <div>
          <Header showMonthlyHandler={showMonthlyHandler} showMonthly={showMonthly} />
          <CardList products={products} showMonthly={showMonthly} />
        </div>
      </div>
    </>
  );
}

export default App;
