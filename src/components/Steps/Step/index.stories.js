import React from "react";

import Step from "./index";

export default {
  component: Step,
  title: "Step"
};

const Template = (args) => <Step {...args} />;

export const Completed = Template.bind({});
Completed.args = {
  completed: true,
  title: "Completed Task",
  link: "/"
};

export const Pending = Template.bind({});
Pending.args = {
  completed: false,
  title: "Pending Task",
  link: "/"
};
