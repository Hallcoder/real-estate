import SearchableSelect from "./searchableSelect";
import { Button,Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";
function Search() {
    return (  
        <div className="flex justify-center mr-12 mt-12 items-center w-full">
    <SearchableSelect options={[
        {value:'Rusororo',label:'Rusororo'},
        {value:'Kibagabaga',label:'Kibagabaga'},
    ]} placeholder={"Location"}/>
    <SearchableSelect options={[
        {value:'Rent',label:'rent'},
        {value:'Sale',label:'sale'},
    ]} placeholder={"Status"}/>
    <SearchableSelect options={[
        {value:'Rent',label:'rent'},
        {value:'Sale',label:'sale'},
    ]} placeholder={"Location"}/>
    <Space wrap>
    <Button type="default" icon={<SearchOutlined />}>
        Search
      </Button>
    </Space>
        </div>
     );
}

export default Search;