import SearchableSelect from "./searchableSelect";
import { Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
function Search() {
  return (
    <div className="sm:flex sm:flex-row flex-col items-center sm:justify-center mr-12 mt-4 sm:items-center w-full">
      <SearchableSelect
        options={[
          { value: "Rusororo", label: "Rusororo" },
          { value: "Kibagabaga", label: "Kibagabaga" },
        ]}
        placeholder={"Location"}
      />
      <SearchableSelect
        options={[
          { value: "Rent", label: "rent" },
          { value: "Sale", label: "sale" },
        ]}
        placeholder={"Status"}
      />
      <SearchableSelect
        options={[
          { value: "Rent", label: "rent" },
          { value: "Sale", label: "sale" },
        ]}
        placeholder={"Location"}
      />
      {/* <Space wrap> */}
        <Button type="default" className="justify-center mx-auto my-2 flex items-center" icon={<SearchOutlined />}>
          Search
        </Button>
      {/* </Space> */}
    </div>
  );
}

export default Search;
