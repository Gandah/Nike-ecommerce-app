import { star } from '../assets/icons';
import { motion as m} from 'framer-motion';

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <m.div className="flex flex-1 flex-col w-full"
        initial={{ y: 0}}
        whileHover={{y:-10}}
        transition={{
        type: "spring",
        stiffness: "130",
        bounce: true,
        duration:0.2,
        easing: "easeInOut"
        }}>
        <img src={imgURL} alt={name}
    className="w-[280px] h-auto aspect-square cursor-pointer"/>

    <m.div className="mt-8 flex justify-start gap-2.5
    "
        
    >
        <img src={star} alt="rating" width={24} height={24}/>
        <p className="font-montserrat text-xl 
        leading-normal text-slate-gray">(4.5)</p>
    </m.div>
    <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>{name}</h3>
    <p className='mt-2 font-semibold font-montserrat text-coral-red
    text-2xl leading-normal'>{price}</p>

    </m.div>
  )
}

export default PopularProductCard