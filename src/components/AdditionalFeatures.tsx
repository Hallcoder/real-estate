import { MdArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
function AdditionalFeatures({additional}) {
  return (
    <div className="flex text-orange-500 font-semibold flex-col flex-wrap max-h-40 text-lg m-1">
      {additional.map((item, index) => (
        <div key={index} className="flex items-center">
          <MdArrowRight />
          <li  className="list-none">
            <Link to="">{item}</Link>
          </li>
        </div>
      ))}
    </div>
  );
}

export default AdditionalFeatures;
