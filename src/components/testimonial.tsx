import {BiSolidQuoteAltLeft} from 'react-icons/bi'
interface Props{
  testimonial:string;
  occupation:string;
  name:string;
}
const TestimonialCard:React.FC<Props> = ({testimonial,occupation,name}) => {
  return <figure className="rounded-xl w-1/4 p-4 text-lg">
  <div className="pt-6 text-center space-y-4">
  <BiSolidQuoteAltLeft className='text-5xl text-gray-500'/>
    <blockquote>
      <p className="text-lg font-medium">
        “{testimonial}”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-[#333] font-semibold">{name}</div>
      <div className="text-slate-700 dark:text-slate-500">
       { occupation}
      </div>
    </figcaption>
  </div>
</figure>;
}

export default TestimonialCard;
