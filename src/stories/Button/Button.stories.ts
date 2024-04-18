import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

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
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    title: "Botón",
    isDisabled: false,
  },
};

export const Secondary: Story = {
  args: {
    title: "Botón",
    styleName: "btn_secondary",
    isDisabled: false,
  },
};

export const Grey: Story = {
  args: {
    title: "Botón",
    isDisabled: false,
    styleName: "btn_grey",
  },
};

export const IconButton: Story = {
  args: {
    title: "Botón",
    isDisabled: false,
    iconRight: "link",
    svgColor: "svgWhite",
  },
};

export const IconButtonBoth: Story = {
  args: {
    title: "Botón",
    isDisabled: false,
    iconRight: "link",
    svgColor: "svgWhite",
  },
};

/* export const Sizes: Story = {
  args: {
    title: "Botón",
    isDisabled: false,
    svgColor: "svgWhite",
  },
  render: (args) => (
    <div>
      <Button {...args}  iconRight: "link" />
      <Button {...args} iconLeft: "link" />
    </div>
  ),
}; */
