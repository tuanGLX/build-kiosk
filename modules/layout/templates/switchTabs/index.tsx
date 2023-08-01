"use client";

import React from "react";
import Styles from "../../styles/Layout.module.css";
type SwitchTabProps = {
  data: any[];
  //   toggleTabs: (tab: any, index: number) => void;
};

const SwitchTabs = ({ data }: SwitchTabProps) => {
  const [selectedTab, setSelectedTab] = React.useState<number>(0);
  const [left, setLeft] = React.useState<number>(0);
  const activeTab = (tab: any, index: number) => {
    setLeft(index * 100);
    setTimeout(() => {
      setSelectedTab(index);
    }, 300);
    // toggleTabs(tab, index);
  };
  return (
    <div className={Styles.switchingTabs}>
      <div className={Styles.switchingTabs}>
        {data.map((tab, idx) => (
          <span
            key={idx}
            className={`${Styles.switchingTabs} ${
              selectedTab === idx ? "active" : ""
            }`}
            onClick={() => activeTab(tab, idx)}
          > {tab}</span>
        ))}
        <span className={Styles.movingBg} style={{ left }} />
      </div>
    </div>
  );
};

export default SwitchTabs;
