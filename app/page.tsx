import Image from "next/image";
import Instruction from "./Components/Instruction";
import Info from "./Components/Task/Info";

export default function Home() {
  return (
    <div className="max-w-[1728px] min-h-[895px] h-screen mx-auto bg-linear-to-b from-[#373E44] to-[#191B1F] flex items-center justify-center gap-10">
      <Instruction />
      <Info />
    </div>
  );
}
