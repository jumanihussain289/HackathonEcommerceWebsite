import Brand from "./components/brands";
import Hero from "./components/hero";
import Products from "./products/page";
import Top_sell from "./products/sell";


export default function Home() {
  return (
   <div>
    <Hero/>
    <Brand/>
    <Products/>
    
   </div>
  );
}
