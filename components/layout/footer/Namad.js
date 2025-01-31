import Cert1 from "@/public/assets/images/cert1.png";
import Cert2 from "@/public/assets/images/cert2.png";
import Cert3 from "@/public/assets/images/cert3.png";
import Image from "next/image";

function Namad() {
  return (
    <div className="flex items-center justify-center gap-16 lg:order-4">
      <a href="#">
        <Image src={Cert1} alt="" />
      </a>
      <a href="#">
        <Image src={Cert2} alt="" />
      </a>
      <a href="#">
        <Image src={Cert3} alt="" />
      </a>
    </div>
  );
}

export default Namad;
