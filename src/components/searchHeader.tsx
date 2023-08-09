import {MdHouse} from 'react-icons/md'
function SearchHeader() {
    return ( 
        <div className="mt-4 mb-2 bg-[#333333] text-[#D9C8B8] w-full h-16 flex items-center">
            <MdHouse className='text-2xl mr-2 ml-2'/>
            <p className='font-semibold'>Search homes</p>
        </div>
     );
}

export default SearchHeader;