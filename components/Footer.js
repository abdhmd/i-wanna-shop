import Link from "next/link";
import { Section, socialMedia } from "./Tools";

const Footer = () => {
  return (
    <Section>
      <div className="w-full h-full bg-black text-white rounded p-4 flex flex-col md:flex-row items-center justify-between gap-2 uppercase text-sm font-semibold">
        <Link href="/" className="font-bold"> i wanna shop </Link>
        <p >
          all copyright <span dangerouslySetInnerHTML={{ __html: "&copy;" }} />
          reserved | {new Date().getFullYear()}
        </p>
        <ul className="flex items-center gap-2">
          {socialMedia.map((media) => {
            return (
              <li
                key={media.title}
                className="bg-white text-black text-xl w-10 h-10 flex justify-center items-center rounded"
              >
                <Link href={media.link}>{media.icon}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
