import Link from "next/link";
import { Section,Button } from "../Tools";


const Hero = ({ products }) => {
  const firstProducts = products[0];
  const item = firstProducts;
  return (
    <Section>
      <div className="grid grid-rows-1 md:grid-cols-2 md:flex-row gap-4">
        <div className="h-52 md:h-72 overflow-hidden rounded-lg shadow-sm  relative z-0">
          <img src={item.thumbnail} alt={item.title} className="w-full h-full object-fill absolute top-0 left-0 -z-10 blur-sm " />
          <div className="w-full h-full absolute top-0 left-0 bg-black -z-10 opacity-20"></div>
          <img src={item.thumbnail} alt={item.title} className="w-full h-full object-contain z-10" />

          <div>
            text
          </div>
        </div>
        <div className="flex flex-col justify-center bg-white shadow-sm border  px-4 py-6 rounded-lg ">
          <h3 className="font-bold capitalize text-3xl mb-2">{item.title}</h3>
          <p className="mb-6 text-zinc-600">{item.description}</p>
          <div className="text-sm text-zinc-600 mb-4">
            FROM : <span className="text-xl font-semibold text-black"> ${item.price}</span>
          </div>

          <Button styles="text-white bg-black" >
            
            <Link href="/" >buy now</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
