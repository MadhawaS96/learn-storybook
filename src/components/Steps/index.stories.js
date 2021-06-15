import React from "react";

import Steps from "./index";
import { allCompleteData, allPendingData } from "../../core/data/storybook-steps-data";

export default {
  component: Steps,
  title: "Steps"
};

const Template = (args) => <Steps {...args} />;

export const AllCompleted = Template.bind({});
AllCompleted.args = {
  stepsData: allCompleteData
};

export const AllPending = Template.bind({});
AllPending.args = {
  stepsData: allPendingData
};
