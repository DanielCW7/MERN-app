import Image from "next/image";
import Loader from '../images/loader.png'

const Loading = () => {
  return (
    <div className="relative flex justify-center">
      <Image src={Loader} width={60} height={60} className="animate-spin m-5" alt="loading..." />
    </div>
  );
};

export default Loading;
