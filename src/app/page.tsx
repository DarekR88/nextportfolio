import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import Laptop from "../../public/images/laptop.jpg";
import GithubIcon from "../../public/icons/github_icon.svg";
import LinkedinIcon from "../../public/icons/linkedin_icon.svg";
import MailIcon from "../../public/icons/mail_icon.svg";
import XIcon from "../../public/icons/twitter_icon.svg";

export default function Home() {
  return (
    <>
      <header className="flex-row h-32 justify-center items-center min-w-full lg:flex lg:h-20">
        <p>Darek Radke</p>
        <div className="flex justify-between lg:w-1/6 lg:ml-3">
          <a
            href="mailto:darekradke2@gmail.com"
            className="email-link"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image src={MailIcon} alt="pfp" width={15} />
          </a>
          <a
            href="https://github.com/DarekR88"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image src={GithubIcon} alt="pfp" width={15} />
          </a>

          <a
            href="https://www.linkedin.com/in/darek-radke-aa26b7173/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image src={LinkedinIcon} alt="pfp" width={15} />
          </a>
          <a
            href="https://twitter.com/DarekRadke"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image src={XIcon} alt="pfp" width={15} />
          </a>
        </div>
      </header>
      <Image className="lg:mb-2" src={Laptop} alt="pfp" width={500} />
      <p>
        I am a website developer that enjoys working with small businesses to
        create responsive websites with a "user first" development philosophy.
        The technologies I use most often are: Next.js, React.js, Typescript,
        Node.js, and Tailwind CSS.
      </p>
      <div className="flex justify-between lg:w-2/3 lg:m-auto">
        <a
          href="mailto:darekradke2@gmail.com"
          className="email-link"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Image src={MailIcon} alt="pfp" width={50} />
        </a>
        <a
          href="https://github.com/DarekR88"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Image src={GithubIcon} alt="pfp" width={50} />
        </a>

        <a
          href="https://www.linkedin.com/in/darek-radke-aa26b7173/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Image src={LinkedinIcon} alt="pfp" width={50} />
        </a>
        <a
          href="https://twitter.com/DarekRadke"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Image src={XIcon} alt="pfp" width={50} />
        </a>
      </div>
      <header className="flex justify-center items-center min-w-full h-20">
        Websites
      </header>
      {/* <Link
          className="outline-none"
          href="/Blog"
        >
          Blog
        </Link> */}
    </>
  );
}
