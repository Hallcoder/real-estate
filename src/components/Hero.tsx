import {MdKeyboardDoubleArrowDown} from 'react-icons/md'
import { Link } from 'react-router-dom';
function Hero() {
    return (<div className="flex flex-col items-center justify-center bgImg h-[70vh] text-4xl font-semibold ">
        <p className="text-difference text-center w-9/12 text-5xl text-white">Find the perfect place to live with your loved ones.</p>
        <p className="text-[22px] text-white">Go through hundreds of houses and land plots available on our platform</p>
        <Link to='/#search'><MdKeyboardDoubleArrowDown className='text-white text-7xl relative -bottom-10'/></Link>
    </div>);
}

export default Hero;