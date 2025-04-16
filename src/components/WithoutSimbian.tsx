/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AlertCard from "@/components/AlertCard";
import { LuClock4, LuUser, LuMonitor, LuTerminal } from "react-icons/lu";
import { MdHelpOutline, MdErrorOutline } from "react-icons/md";
import { CiCircleRemove } from "react-icons/ci";
import { TbArrowRightCircleFilled } from "react-icons/tb";
import { CgSpinner } from "react-icons/cg";
import OverlapIcons from "./OverlapIcons";

const dummyAlerts = [
  "Phishing Email Detected",
  "Suspicious Login Attempt",
  "Malware Download Blocked",
  "Unauthorized Access Attempt",
  "DDoS Attack Initiated",
];

const dummyLoadingCards = [
  {
    icon: LuClock4,
    name: "Analyst",
    title: "Waiting for Analyst",
    description: "Analyst is dealing with other problems, hold on...",
  },
  {
    icon: LuTerminal,
    name: "Query",
    title: "Writing Query",
    description: "Quering across so many tools gets complex...",
  },
  {
    icon: MdHelpOutline,
    name: "ChatGPT",
    title: "Asking ChatGPT",
    description: "What does this PowerShell command even mean?",
  },
  {
    icon: LuUser,
    name: "User",
    title: "Asking Supervisor",
    description: "The analyst is in some training and needs some help...",
  },
  {
    icon: CiCircleRemove,
    name: "Cross",
    title: "Oops!",
    description: "Mistook that one as false positive. You are only human...",
  },
];

const card2 = [
  {
    icon: CiCircleRemove,
    name: "Cross",
    title: "Wasting valuable analyst time on false positives",
  },
  {
    icon: LuMonitor,
    name: "Monitor",
    title: "Processing one alert at a time, missing the big picture",
  },
  {
    icon: MdErrorOutline,
    name: "Error",
    title: "More time fixing SOAR automation, less time on real threats",
  },
];

interface AlertsState {
  ignored: number;
  wronglyClosed: number;
  activeThreats: number;
}

export function WithoutSimbian() {
  const [alerts, setAlerts] = useState<AlertsState>({
    ignored: 195,
    wronglyClosed: 35,
    activeThreats: 3,
  });

  const [loadingCardsIndex, setLoadingCardsIndex] = useState(0);
  const [loaderValCard, setLoaderValCard] = useState(0);
  const [recentAlerts, setRecentAlerts] = useState<string[]>([]);

  const variants = {
    initial: { y: 40, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -40, opacity: 0 },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingCardsIndex(
        (prevIndex) => (prevIndex + 1) % dummyLoadingCards.length
      );
    }, 2000);

    const intervalLoader = setInterval(() => {
      setLoaderValCard((prev) => (prev + 10) % 360); // Reset to 0 after full rotation
    }, 5);

    return () => {
      clearInterval(interval);
      clearInterval(intervalLoader);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setAlerts((prev) => ({
        ...prev,
      }));

      const newAlert =
        dummyAlerts[Math.floor(Math.random() * dummyAlerts.length)];
      setRecentAlerts((prev) => [newAlert, ...prev.slice(0, 2)]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const ContainerIcon = dummyLoadingCards[loadingCardsIndex].icon;

  return (
    <section className="mb-20 mt-5">
      <div>
        <div className="flex relative">
          <motion.div
            className="w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={loadingCardsIndex}
                className="w-full"
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.6, ease: "anticipate" }}
              >
                <div className="px-6 relative py-[1rem] w-[45%] ml-10 bg-gray-800 rounded-[10px] shadow-md justify-start flex items-center space-x-4 transition-all duration-500">
                  <TbArrowRightCircleFilled
                    className="text-blue-800 text-9xl"
                    style={{
                      position: "absolute",
                      right: "-7rem",
                      fontSize: "7rem",
                      transform: "rotateX(50deg)",
                    }}
                  />
                  <span className="bg-gray-700 p-2 rounded-[10px] opacity-[.3] w-[45px] h-[45px]" />
                  <ContainerIcon className="text-3xl text-white absolute left-[2rem]" />

                  <div className="flex flex-col">
                    <div className="text-xl font-medium text-white">
                      {dummyLoadingCards[loadingCardsIndex].title}
                    </div>
                    <p className="text-gray-500 text-[.8rem]">
                      {dummyLoadingCards[loadingCardsIndex].description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
          <div className="bg-white p-[.3rem] rounded-[5px] absolute top-[1.55rem] right-[39rem]">
            <CgSpinner
              className={`text-blue-700 text-[1.5rem]`}
              style={{ transform: `rotate(${loaderValCard}deg)` }}
            />
          </div>
        </div>
        <div className="flex w-full justify-between">
          <div className="mt-10">
            {card2.map((val: any, index: number) => (
              <div
                key={index}
                className="px-6 my-3 relative py-[1rem] w-[100%] min-w-[30%] ml-10 bg-gray-800 rounded-[10px] shadow-md justify-start flex items-center space-x-4 transition-all duration-500"
              >
                <span className="bg-red-400 p-2 rounded-[10px] opacity-[.15] w-[12%] min-w-[13%] h-[45px]" />
                {val.icon && (
                  <val.icon className="text-2xl text-red-500 absolute m-[5px] left-[30px] opacity-[.8]" />
                )}
                <div className="flex flex-col">
                  <div className="text-[.95rem] font-medium text-white w-[19.5rem]">
                    {val.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <motion.div
            className="flex flex-col items-center w-[40%]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <AlertCard
              title="Ignored Alerts"
              count={alerts.ignored}
              icon="bell"
              color="blue"
              alerts={recentAlerts}
              titleColor="white"
            >
              <OverlapIcons
                activeAlerts={recentAlerts}
                active={false}
              />
            </AlertCard>
            <AlertCard
              title="Wrongly Closed Alerts"
              count={alerts.wronglyClosed}
              icon="cross"
              alerts={recentAlerts}
              titleColor="white"
              color="blue"
            >
              <OverlapIcons
                activeAlerts={recentAlerts}
                active={false}
              />
            </AlertCard>
            <AlertCard
              title="Active Threats"
              count={alerts.activeThreats}
              icon="shield"
              alerts={recentAlerts}
              titleColor="red"
              color="red"
            >
              <OverlapIcons
                activeAlerts={["flower", "phishing-email", "suspicious-email"]}
                active={alerts.activeThreats > 0}
              />
            </AlertCard>

            {/* <AlertCard
              title="Ignored Alerts"
              count={alerts.ignored}
              icon={"bell"}
              color="blue"
              alerts={recentAlerts}
              titleColor="white"
            />
            <AlertCard
              title="Wrongly Closed Alerts"
              count={alerts.wronglyClosed}
              icon={"cross"}
              alerts={recentAlerts}
              titleColor="white"
              color="blue"
            />
            <AlertCard
              title="Active Threats"
              count={alerts.activeThreats}
              icon={"shield"}
              alerts={recentAlerts}
              titleColor="red"
              color="red"
            /> */}
          </motion.div>
        </div>
      </div>
      <div>
        <motion.div
          className="text-center mt-8 text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p>Wasting valuable analyst time on false positives</p>
          <p>Processing one alert at a time, missing the big picture</p>
          <p>More time fixing SOAR automation, less time on real threats</p>
        </motion.div>
      </div>
    </section>
  );
}
