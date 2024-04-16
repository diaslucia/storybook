import FilterIcon from "./Icons/FilterIcon";
import HotlinkIcon from "./Icons/HotlinkIcon";

interface Props {
  icon: string;
}

const IconButton = ({ icon }: Props) => {
  return (
    <>
      {icon === "link" && <FilterIcon />}
      {icon === "hotlink" && <HotlinkIcon />}
    </>
  );
};

export default IconButton;
