import Banner from "@/components/Banner";
import Products from "./Products/page";

export const instant = false;
export default function Home() {
  return (
    <div>
      <Banner/>
      <Products></Products>
    </div>
  );
}
