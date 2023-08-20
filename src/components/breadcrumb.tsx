import { useNavigate } from "react-router-dom";

interface Props{
    name:string
}
const BreadCrumb: React.FC<Props> = ({name}) => {
  const breadcrumbData = [
    { label: "Home", pathname:'/'  },
    { label: name, pathname: `/${name}` },
    
  ];
  const navigate = useNavigate();
  return (
    <div className="flex text-xl text-white  font-bold cursor-pointer">
      {breadcrumbData.map(br => <span onClick={() => navigate(br.pathname)} className="flex m-1"><p className="mr-1 hover:underline underline-orange-300">{br.label}</p>{" > "}</span>)}
    </div>
  );
}

export default BreadCrumb;
