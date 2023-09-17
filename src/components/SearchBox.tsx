import  Drawer  from "antd/lib/drawer";
import Search from "./search";
function SearchBox({ open, onClose }) {
  return (
    <div>
      <Drawer
        title="Search for Your Desired Property!"
        placement={"bottom"}
        closable={false}
        onClose={onClose}
        open={open}
        key={"bottom"}
      >
        <Search />
      </Drawer>
    </div>
  );
}

export default SearchBox;
