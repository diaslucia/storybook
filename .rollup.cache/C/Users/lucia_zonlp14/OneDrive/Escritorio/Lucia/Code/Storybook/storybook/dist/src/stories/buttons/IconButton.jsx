import FilterIcon from "./Icons/FilterIcon";
import HotlinkIcon from "./Icons/HotlinkIcon";
const IconButton = ({ icon }) => {
    return (<>
      {icon === "link" && <FilterIcon />}
      {icon === "hotlink" && <HotlinkIcon />}
    </>);
};
export default IconButton;
//# sourceMappingURL=IconButton.jsx.map