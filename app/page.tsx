import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Copy,
  MessageSquareTextIcon,
  Settings2Icon,
  User2Icon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const CardList = [
    {
      name: "25+ templates",
      icon: Copy,
      desc: "Responsiveand mobile-first project on the web",
    },
    {
      name: "Customizable",
      icon: Settings2Icon,
      desc: "Components are easily customized and extendable",
    },
    {
      name: "Free to Use",
      icon: BookOpen,
      desc: "Every component and plugin is well documented",
    },
    {
      name: "24/7 Support",
      icon: MessageSquareTextIcon,
      desc: "Contact us 24 hours a day,7 days a week",
    },
  ];

  return (
    <div>
      {/* Header section */}
      <div className="p-5 shadow-sm border-b-2 flex justify-between items-center bg-white mt-6">
        <Image
          src={"/logo.svg"}
          alt="logo"
          width={50}
          height={100}
          className="ml-6"
        />
        <div className="flex gap-3">
          <div className="border-l-2 "></div>
          <User2Icon />
          <Link href="/dashboard">Get Started</Link>
        </div>
      </div>

      {/* Body Section */}
      <div className="items-center p-7 my-20 ">
        <div className="text-9xl font-bold flex justify-center mb-3">
          <h1>AI Content</h1>
          <h1 className="text-primary"> Generator</h1>
        </div>
        <h2 className="text-xl flex justify-center mb-10">
          Revolutionize your content creation with our AI-powered app,delevering
          engaging and high quality text in seconds
        </h2>
        <center>
          <Button className="p-8  items-center">
            <Link href={"/dashboard"} className="text-xl">
              Get Started{" "}
            </Link>
          </Button>
        </center>
      </div>

      {/* Cards section */}

      <div className="mt-3 flex justify-evenly px-4 py-10">
        {CardList.map((menu, index) => (
          <div
            key={index}
            className={
              " mb-2 p-3 gap-2 caret-transparent  rounded-lg cursor-pointer items-center py-7 "
            }
          >
            <div className=" bg-primary rounded-md py-1 px-2 w-9 mb-2">
              <menu.icon className="h-5 w-5 " />
            </div>
            <h2 className="font-bold text-xl mb-2">{menu.name}</h2>
            <p className="text-lg text-gray font-light">{menu.desc}</p>
          </div>
        ))}
      </div>
      {/* <Link href={"/dashboard/content/" + item?.slug}>
      <div className="p-5 shadow-md rounded-md border  bg-white flex flex-col gap-3 cursor-pointer hover:scale-105 trasition-all">
        <Image src={item.icon} alt="icon" width={50} height={50} />
        <h2 className="font-medium text-lg">{item.name}</h2>
        <p className="text-gray-500 line-clamp-3">{item.desc}</p>
      </div>
    </Link> */}
    </div>
  );
}
