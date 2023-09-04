interface Props{
    icon:any,
    title:string,
    description:string
}
const ServiceCard:React.FC<Props> = ({icon,title,description}) => {
    return ( <div className="flex flex-col shadow-lg hover:scale-105 p-12">
             <span className="text-4xl m-2">{icon}</span>
             <h2 className="text-lg font-semibold m-1">{title}</h2>
             <p className="">{description}</p>
    </div> );
}

export default ServiceCard;