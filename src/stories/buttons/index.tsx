import styles from "./styles.module.scss";
import IconButton from "./IconButton";

interface Props {
  title: string;
  styleName?: string;
  isDisabled?: boolean;
  type?: "submit" | "reset" | "button" | undefined;
  onclick?: () => void;
  iconLeft?: string | null;
  iconRight?: string | null;
  svgColor?: string | null;
}

const Button = ({
  title,
  styleName,
  onclick,
  isDisabled = false,
  type = "button",
  iconLeft = null,
  iconRight = null,
  svgColor = null,
}: Props) => {
  return (
    <button
      className={`${styles.btn} ${svgColor && styles[svgColor]} ${styleName && styles[styleName]} `}
      onClick={onclick}
      disabled={isDisabled}
      type={type}
    >
      {iconLeft && <IconButton icon={iconLeft} />}
      {title}
      {iconRight && <IconButton icon={iconRight} />}
    </button>
  );
};

export default Button;
