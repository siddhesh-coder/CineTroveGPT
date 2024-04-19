import React from "react";
import Subscription from "./Subscription";
import { subscription } from "../../utils/constants";
import { PLAN_GREET } from "../../utils/constants";

const Plans = () => {
  return (
    <div className="lg:mt-20 max-md:mt-12">
      <p className="text-2xl font-medium text-white max-sm:ml-12 lg:ml-20 md:text-center lg:text-left">
        {PLAN_GREET}
      </p>
      <div className="flex flex-col items-center lg:justify-start md:flex-row md:flex-wrap md:justify-center md:gap-14 md:ml-20 md:mr-20">
        {subscription.map((plan, index) => (
          <Subscription
            key={index}
            title={plan.title}
            description={plan.description}
            price={plan.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Plans;
