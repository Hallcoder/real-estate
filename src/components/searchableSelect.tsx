import { Select } from "antd";
function SearchableSelect(props:{options:Object[],placeholder:String}){
    return (
   <Select
   size="large"
   className="m-4 flex border-black border text-black rounded-md"
   showSearch
   placeholder={props.placeholder} 
   optionFilterProp="children"
   options={props.options}
     />);
}

export default SearchableSelect;