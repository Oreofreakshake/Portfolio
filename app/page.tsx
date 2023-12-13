import {
  TbBrandTelegram,
  TbBrandDiscord,
  TbBrandX,
  TbBrandInstagram,
  TbBrandGithub,
} from "react-icons/tb";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-xs font-bold text-gray-700">ABOUT</h3>
      <p className="text-sm font-medium text-gray-500 text-justify">
        I&rsquo;m a student at The Maldives National University, completing my
        Bachelor of Computer Science with Honors. I have a profound passion for
        Machine Learning and all things programming.
      </p>
      <div className="flex justify-evenly text-xl pt-4">
        <a href="https://t.me/zuccccc">
          <TbBrandTelegram />
        </a>
        <a href="https://discord.gg/Zu4CmYm5Ba">
          <TbBrandDiscord />
        </a>
        <a href="https://twitter.com/0reofreakshake">
          <TbBrandX />
        </a>
        <a href="https://www.instagram.com/_yazak_/">
          <TbBrandInstagram />
        </a>
        <a href="https://github.com/oreofreakshake">
          <TbBrandGithub />
        </a>
      </div>
    </div>
  );
}
