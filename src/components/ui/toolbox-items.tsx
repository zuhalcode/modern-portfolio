import React, { Fragment } from "react";

import TechIcon from "./tech-icon";
import { motion } from "framer-motion";

type ToolboxItem = {
  name: string;
  icon: React.ElementType;
};

type Props = {
  items: ToolboxItem[];
  itemsWrapperClassName?: string;
};

const ToolboxItems = ({ items, itemsWrapperClassName }: Props) => {
  return (
    <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className={`flex flex-none gap-3 pr-6 ${itemsWrapperClassName}`}>
        {[
          ...new Array(2).fill(0).map((_, i) => (
            <Fragment key={i}>
              {items.map((item) => (
                <div
                  key={item.name}
                  className="inline-flex items-center gap-3 rounded-lg border border-white/60 px-3 py-2"
                >
                  <TechIcon component={item.icon} />
                  <span className="font-semibold text-white">{item.name}</span>
                </div>
              ))}
            </Fragment>
          )),
        ]}
      </div>
    </div>
  );
};

export default ToolboxItems;
