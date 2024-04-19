import Button from "@/stories/buttons";
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Button",
    component: Button,
    tags: ["autodocs"],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        styleName: {
            control: { type: "select" },
            options: ["btn_secondary", "btn_grey", "btn"],
        },
        type: {
            control: { type: "radio" },
            options: ["button", "submit"],
        },
        iconLeft: {
            control: { type: "select" },
            options: ["link", "hotlink"],
        },
        iconRight: {
            control: { type: "select" },
            options: ["link", "hotlink"],
        },
        svgColor: {
            control: { type: "select" },
            options: ["svgGrey", "svgWhite", "svgOrange"],
        },
    },
};
export default meta;
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
    args: {
        title: "Botón",
        isDisabled: false,
    },
};
export const Secondary = {
    args: {
        title: "Botón",
        styleName: "btn_secondary",
        isDisabled: false,
    },
};
export const Grey = {
    args: {
        title: "Botón",
        isDisabled: false,
        styleName: "btn_grey",
    },
};
export const IconButton = {
    args: {
        title: "Botón",
        isDisabled: false,
        iconRight: "link",
        svgColor: "svgWhite",
    },
};
//# sourceMappingURL=Button.stories.js.map