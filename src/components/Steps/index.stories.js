import React from "react";

import Steps from "./index";

export default {
  component: Steps,
  title: "Steps"
};

const Template = (args) => <Steps {...args} />;

export const AllCompleted = Template.bind({});
AllCompleted.args = {
  stepsData: [
    {
      completed: true,
      title: "Create your first challenge",
      link: "Link"
    },
    {
      completed: false,
      title: "Connect your company messaging app",
      link: "Link"
    },
    {
      completed: false,
      title: "Promote your challenge",
      link: "Link"
    },
    {
      completed: false,
      title: "Get your leadership team engaged",
      link: "Link"
    },
    {
      completed: false,
      title: "Review your progress",
      link: "Link"
    },
    {
      completed: false,
      title: "Schedule your next challenge",
      link: "Link"
    },
    {
      completed: false,
      title: "Share your results",
      link: "Link"
    }
  ]
};
