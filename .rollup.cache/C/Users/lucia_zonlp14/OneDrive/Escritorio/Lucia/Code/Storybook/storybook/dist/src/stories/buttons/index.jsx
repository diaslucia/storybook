import styles from "./styles.module.scss";
import IconButton from "./IconButton";
const Button = ({ title, styleName, onclick, isDisabled = false, type = "button", iconLeft = null, iconRight = null, svgColor = null, }) => {
    return (<button className={`${styles.btn} ${svgColor && styles[svgColor]} ${styleName && styles[styleName]} `} onClick={onclick} disabled={isDisabled} type={type}>
      {iconLeft && <IconButton icon={iconLeft}/>}
      {title}
      {iconRight && <IconButton icon={iconRight}/>}
    </button>);
};
export default Button;
//# sourceMappingURL=index.jsx.map