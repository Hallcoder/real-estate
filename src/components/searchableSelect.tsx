import { Select } from "antd";
function SearchableSelect(props:{options:Object[],name:string,placeholder:String,value:string,onChange:any}){
    return (
   <Select
   size="large"
   className="m-4 sm:w-1/6 w-5/6 mx-auto flex border-black border text-black rounded-md"
   showSearch
   onChange={(e) => props.onChange(e,props.name)}
   value={props.value}
   placeholder={props.placeholder} 
   optionFilterProp="children"
   options={props.options}
   
     />);
}

export default SearchableSelect;