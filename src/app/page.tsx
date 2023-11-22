import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import LaptopImg from "../../public/images/laptop.jpg";
import EcommerceImg from "../../public/images/e-commerce.png";
import ShoppingImg from "../../public/images/shopping.png";
import StatisticImg from "../../public/images/statistic.png";
import GithubIcon from "../../public/icons/github_icon.svg";
import LinkedinIcon from "../../public/icons/linkedin_icon.svg";
import MailIcon from "../../public/icons/mail_icon.svg";
import XIcon from "../../public/icons/twitter_icon.svg";

export default function Home() {
  return (
    <>
      <header className="flex-row text-center h-32 justify-center items-center min-w-full lg:flex lg:h-20">
        <p className="text-2xl my-6">Darek Radke</p>
        <div className="flex w-full px-7 justify-between lg:w-1/5 lg:ml-3">
          <a
            href="mailto:darekradke2@gmail.com"
            className="email-link"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image src={MailIcon} alt="pfp" width={25} />
          </a>
          <a
            href="https://github.com/DarekR88"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image src={GithubIcon} alt="pfp" width={25} />
          </a>

          <a
            href="https://www.linkedin.com/in/darek-radke-aa26b7173/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image src={LinkedinIcon} alt="pfp" width={25} />
          </a>
          <a
            href="https://twitter.com/DarekRadke"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image src={XIcon} alt="pfp" width={25} />
          </a>
        </div>
      </header>
      <div className="flex flex-wrap w-full gap-4">
        <Image className="mb-1 lg:mb-2" src={LaptopImg} alt="pfp" width={420} />
        <p className="text-xl mb-4 px-5 xl:w-1/2">
          I am a website developer that enjoys working with small businesses to
          create responsive websites with a "user first" development philosophy.
          The technologies I use most often are: Next.js, React.js, Typescript,
          Node.js, and Tailwind CSS.
        </p>
      </div>

      <header className="text-2xl flex justify-center items-center min-w-full h-20">
        Websites
      </header>
      <div className="flex flex-wrap w-full gap-5 pb-3 lg:justify-center">
        <div className="lg:w-1/5">
          <Image src={StatisticImg} alt="storefront" width={500} />
          <p className="text-xl pl-5 lg:pl-0">Shopping.com.com</p>
          <p className="px-7 lg:px-0">
            shopping.com.com is your one stop shop for the whole family, we have
            balls that roll around on their own, laser pointers, and cat
            brushes. We promise we are not cats.{" "}
          </p>
        </div>
        <div className="lg:w-1/5">
          <Image src={StatisticImg} alt="storefront" width={500} />
          <p className="text-xl pl-5 lg:pl-0">Amazon.com</p>
          <p className="px-7 lg:px-0">
            buy anything you could possibly imagine. we basically sell
            everything that shopping.com.com doesn't sell. thanks for nothing.{" "}
          </p>
        </div>
        <div className="lg:w-1/5">
          <Image src={StatisticImg} alt="storefront" width={500} />
          <p className="text-xl pl-5 lg:pl-0">How much BS .com</p>
          <p className="px-7 lg:px-0">
            calculate how much b****** you need to have before you literally
            die.{" "}
          </p>
        </div>
        <div className="lg:w-1/5">
          <Image src={StatisticImg} alt="storefront" width={500} />
          <p className="text-xl pl-5 lg:pl-0">Shopping.com.com</p>
          <p className="px-7 lg:px-0">
            Don't ever shop here, you will get herpes and you will die. If you still shop here and get herpes "I told you so".{" "}
          </p>
        </div>
      </div>
      <footer className="h-20 pt-5 static bottom-0">
        <div className="flex px-6 justify-between lg:w-2/3 lg:m-auto">
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
      </footer>
    </>
  );
}
