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
declare const Button: ({ title, styleName, onclick, isDisabled, type, iconLeft, iconRight, svgColor, }: Props) => import("react/jsx-runtime").JSX.Element;
export default Button;
