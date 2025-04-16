/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CiCircleRemove } from "react-icons/ci";
import { GoShield } from "react-icons/go";
import { CiBellOff } from "react-icons/ci";
import OverlapIcons from "./OverlapIcons";

interface AlertCardProps {
  title: string;
  count: number;
  icon: string;
  titleColor: string;
  color: string;
  alerts: string[];
  children: React.ReactNode;
}

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "shield":
      return GoShield;
    case "cross":
      return CiCircleRemove;
    case "bell":
      return CiBellOff;
    default:
      return GoShield;
  }
};

const AlertCard: React.FC<AlertCardProps> = ({
  title,
  count,
  icon,
  color,
  titleColor,
  alerts,
  children,
}) => {
  const [currentCount, setCurrentCount] = useState(0);
  const [_, setActiveAlerts] = useState<string[]>(alerts);
  const IconComponent = getIcon(icon);

  useEffect(() => {
    const target = count;
    let start = 0;
    const increment = target > 0 ? Math.ceil(target / 100) : 0;

    const timer = setInterval(() => {
      start += increment;
      if (start <4) {
        setCurrentCount(target+1);
        
      } else {
        clearInterval(timer);
        setCurrentCount(target);
      }
    }, 5);

    const alertInterval = setInterval(() => {
      const dummyAlerts: string[] = [
        "phishing-email",
        "suspisious-email",
        "flower",
      ];
      setActiveAlerts(dummyAlerts);
    }, 2000);

    return () => {
      clearInterval(timer);
      clearInterval(alertInterval);
    };
  }, [count]);

  return (
    <motion.div
      className={`bg-[#162c49] my-3 p-4 rounded-lg shadow-lg items-center h-[8rem] w-[22rem]`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex w-full justify-between">
        <IconComponent className={`text-3xl mb-2 text-${titleColor}-500`} />
        <h3 className={`text-lg pr-15 font-semibold text-${titleColor}-500`}>
          {title}
        </h3>
        <p className={`text-2xl font-bold text-${color}-500`}>{currentCount}</p>
      </div>
      <div className="mt-2 flex text-black  rounded-md shadow mb-2 h-[3.5rem]">
        {children}
      </div>
    </motion.div>
  );
};

export default AlertCard;
