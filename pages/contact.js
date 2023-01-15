import Link from "next/link";
import { socialMedia } from "../components/Tools";
import {AiFillPhone ,AiFillMail} from "react-icons/ai"
const contact = () => {
  return (
    <div>
      <div className="my-6 md:my-10 lg:my-12">
        <h1 className="font-semibold text-xl md:text-2xl lg:text-3xl mb-2">
          Get in touch
        </h1>
        <p className="text-zinc-700">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus cumque
          sapiente nulla veritatis ipsa.
        </p>
      </div>
      <div className="border border-black rounded p-4  grid  md:grid-cols-2 gap-4  text-start justify-start">
        <div className="bg-black p-4 text-white rounded">
          <h3 className="text-lg font-medium mb-2">Contact information </h3>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit qui
            temporibus 
          </p>
          <ul className="flex flex-col gap-2 my-4 ">
            <li className="flex justify-star items-center gap-4 ">
              <AiFillPhone className="text-xl" />
              <p className="text-gray-300 text-sm">+1 (123) 456 789</p>
            </li>
            <li className="flex justify-star items-center gap-4">
              <AiFillMail className="text-xl"/>
              <p className="text-gray-300 text-sm">i-wanna-shop@info.com</p>
            </li>
          </ul>
          <ul className="flex gap-2">
            {
              socialMedia.map(social=>{
                return(
                  <li key={social.title}
                  className="w-10 h-10  bg-white text-black rounded flex justify-center items-center text-lg"
                  >
                    <Link href={social.link} >
                      {social.icon}
                    </Link>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className=" flex flex-col gap-2  h-full">
            <input className="border p-2 px-4 rounded focus:outline-none w-full"  type="text" placeholder="Your Name" />
            <input  className="border p-2 px-4 rounded focus:outline-none w-full" type="email" placeholder="Your Email" />
            <input className="border p-2 px-4 rounded focus:outline-none w-full"  type="text" placeholder="Subject" />
            <textarea className="border p-2 px-4 rounded focus:outline-none w-full h-28"  placeholder="Your Message..."></textarea>
            <button className="border border-black  bg-black rounded uppercase text-white font-medium py-2 px-8 md:w-fit " >submit</button>
        </div>
      </div>
    </div>
  );
};

export default contact;
