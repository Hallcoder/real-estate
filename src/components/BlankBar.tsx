interface Props{
    title?:string
}
const BlankBar: React.FC<Props> = ({title}) => {
    return ( 
        <div className="mt-4 mb-2 bg-[#333333] text-[#D9C8B8] w-full h-16 flex items-center">
{title && <p className="text-white ml-2 text-lg font-semibold">{title}</p>}
        </div>
     );
}

export default BlankBar;