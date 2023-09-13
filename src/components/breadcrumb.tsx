import { useNavigate } from "react-router-dom";

interface Props{
    breadCrumbData:any
}
const BreadCrumb: React.FC<Props> = ({breadCrumbData}) => {
 console.log('BreadCrumbData',breadCrumbData)
  const navigate = useNavigate();
  return (
    <div className="flex text-xl text-white  font-bold cursor-pointer">
      {breadCrumbData.map((br,index) => <span key={index} onClick={() => navigate(br.link)} className="flex m-1"><p className="mr-1 hover:underline underline-orange-300">{br.label}</p>{breadCrumbData.indexOf(br) !== breadCrumbData.length-1 && " > "}</span>)}
    </div>
  );
}

export default BreadCrumb;
