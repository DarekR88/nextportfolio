import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import Laptop from "../../public/images/laptop.jpg";

export default function Home() {
  return (
    <>
      <header className="flex justify-center items-center min-w-full h-20">
        <p>Darek Radke</p>
      </header>
      <Image src={Laptop} alt="pfp" width={500} />
      <p>
        I am a website developer that enjoys working with small businesses to
        create responsive modern websites. The technologies I use most often
        are: Next.js, React.js, Typescript, Node.js, and Tailwind CSS.
      </p>
      <header className="flex justify-center items-center min-w-full h-20">
        Contact
      </header>
      <header>
        Websites
      </header>

    </>
  );
}
