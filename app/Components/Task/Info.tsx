import Image from "next/image";
import question from "@/public/Vector.png";
import boxImage from "@/public/box.png";
import Navigation from "./Navigation";
export default function Info() {
  return (
    <div className="max-w-[720px] max-h-[316px] w-screen h-screen bg-[#363C43] mr-4 rounded-[18.89px] p-4 pr-10">
      <div className="flex items-center gap-2 mt=6 ml-6 mb-4">
        <Image src={question} alt="image" className="mb-5" />
        <Navigation />
      </div>
      <div className="flex items-center gap-2 mt-6 ml-6 mb-4">
        <Image src={boxImage} alt="boxImage" />

        <p className="text-[#969696] p-2">
          Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
          working at this awesome company for 3 years now. <br /> <br />I was
          born and raised in Albany, NY& have been living in Santa Carla for the
          past 10 years my wife Tiffany and my 4 year old twin daughters- Emma
          and Ella. Both of them are just starting school, so my calender is
          usually blocked between 9-10 AM. This is a...
        </p>
      </div>
    </div>
  );
}
