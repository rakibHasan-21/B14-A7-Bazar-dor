import Banner from "@/components/Banner";
import Products from "./Products/page";
import Products2 from "./Products2/page";
import AllProducts from "./AllProducts/page";

export const instant = false;
export default function Home() {
  return (
    <div>
      <Banner/>
      <Products></Products>
      <Products2></Products2>
      <AllProducts></AllProducts>
    </div>
  );
}
