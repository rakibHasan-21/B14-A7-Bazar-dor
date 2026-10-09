import PriceBanner from "@/components/Banner";
import Products from "./Products/page";

export const instant = false;
export default function Home() {
  return (
    <div>
      <PriceBanner/>
      <Products></Products>
    </div>
  );
}
