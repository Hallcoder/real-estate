import SearchableSelect from "./searchableSelect";
import { Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { client, locations, types } from "../utils/constants";
import { useNavigate } from "react-router-dom";
function Search() {
  let [location, setLocation] = useState<string>("Location");
  let [status, setStatus] = useState("Status");
  let [type, setType] = useState<string>("Type");
  let [strict, setStrict] = useState<boolean>(false);
  const navigate = useNavigate();
  const search = () => {
    if (strict) {
      console.log(type);
      client
        .fetch(
          `*[_type == '${type}' && status == '${status}' && address.sector == '${location}']`
        )
        .then((data) => {
          localStorage.setItem("searchResults", JSON.stringify(data));
          navigate("/searchResults")
        });
    } else {
      client
        .fetch(
          `*[_type == '${type}' || status == '${status}' || address.sector == '${location}']`
        )
        .then((data) => {
          localStorage.setItem("searchResults", JSON.stringify(data));
          navigate("/searchResults")
        });
    }
  };
  const handleChange = (e, type) => {
    console.log(e);
    switch (type) {
      case "location":
        setLocation(e);
        break;
      case "status":
        setStatus(e);
        break;
      case "type":
        setType(e);
        break;
      default:
        alert("wrong atempt!");
        break;
    }
  };
  return (
    <div className="sm:flex sm:flex-row flex justify-center border flex-col items-center sm:justify mr-12 mt-4 sm:items w-full">
      <SearchableSelect
        name={"location"}
        onChange={handleChange}
        value={location}
        options={locations}
        placeholder={"Location"}
      />
      <SearchableSelect
        name={"status"}
        onChange={handleChange}
        value={status}
        options={[
          { value: "rent", label: "Rent" },
          { value: "sale", label: "Sale" },
        ]}
        placeholder={"Status"}
      />
      <SearchableSelect
        name={"type"}
        onChange={handleChange}
        value={type}
        options={types}
        placeholder={"Location"}
      />
      <span className="flex gap-2">
        <input
          type="checkbox"
          name="strict"
          checked={strict}
          onChange={(e) => setStrict(e.target.checked)}
        />
        <label htmlFor="strict">All of them included</label>
      </span>
      {/* <Space wrap> */}
      <Button
        type="default"
        className="justify-center  mx-auto my-2 flex items-center"
        icon={<SearchOutlined />}
        onClick={() => search()}
      >
        Search
      </Button>
      {/* </Space> */}
    </div>
  );
}

export default Search;
