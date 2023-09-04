interface Props{
    img:any,
    name:string;
    mobile:string,
    title:string
}

const AgentCard:React.FC<Props> = ({img,name,mobile,title}) => {
  return (
    <div className="flex flex-col gap-4 items-center text-2xl">
        <img src={img} alt="agent" className="w-[32rem] h-[34rem] object-cover"/>
        <h2 className="font-semibold">{name}</h2>
        <h4 className="text-gray-400 font-bold">{title.toUpperCase()}</h4>
        <strong>Mobile:{mobile}</strong>
    </div>
  );
}

export default AgentCard;
