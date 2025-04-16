/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion, useAnimation, Variants } from "framer-motion";
import styles from "./OverlapIcons.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";

const OverlapIcons = ({
  activeAlerts,
  active,
}: {
  activeAlerts: string[];
  active?: boolean;
}) => {
  const controls = useAnimation();
  const [isMoved, setIsMoved] = useState(false);
  const [activeThreats, setActiveThreats] = useState<any[]>([]);

  const cardPositions: any = {
    1: { x: 0, y: 0 }, // Ignored Alerts
    2: { x: 0, y: -80 }, // Wrongly Closed Alerts
    3: { x: 0, y: -50 }, // Active Threats
  };

  const [icons, setIcons] = useState([
    {
      id: 1,
      url: "/svg-1.PNG",
      name: "phishing-email",
      delay: 0,
      position: { x: 0, y: 0 },
      card: 1, // Belongs to "Ignored Alerts"
    },
    {
      id: 2,
      url: "/svg-2.PNG",
      name: "suspicious-email",
      delay: 0.1,
      position: { x: 0, y: 0 },
      card: 2, // Belongs to "Wrongly Closed Alerts"
    },
    {
      id: 4,
      url: "/svg-4.PNG",
      name: "flower",
      delay: 0.3,
      position: { x: 0, y: 0 },
      card: 1, // Belongs to "Ignored Alerts"
    },
    {
      id: 5,
      url: "/svg-1.PNG",
      name: "suspicious-email",
      delay: 0.4,
      position: { x: 0, y: 0 },
      card: 2,
    },
    {
      id: 6,
      url: "/svg-2.PNG",
      name: "suspicious-email",
      delay: 0.5,
      position: { x: 0, y: 0 },
      card: 2,
    },
    { id: 7, url: "/svg-3.PNG", delay: 0.6, position: { x: 0, y: 0 }, card: 1 },
    {
      id: 8,
      url: "/svg-4.PNG",
      name: "flower",
      delay: 0.7,
      position: { x: 0, y: 0 },
      card: 1,
    },
    {
      id: 9,
      url: "/svg-1.PNG",
      name: "phishing-email",
      delay: 0.8,
      position: { x: 0, y: 0 },
      card: 1,
    },
    {
      id: 10,
      url: "/svg-2.PNG",
      name: "suspicious-email",
      delay: 0.9,
      position: { x: 0, y: 0 },
      card: 2,
    },
  ]);

  const [_, setActiveDuration] = useState(0);
  const requiredDuration = 2000; // 2 seconds in milliseconds

  // Animation variants for icons
  const iconVariants: Variants = {
    initial: { x: 0, y: 50, opacity: 0, scale: 1 },
    inactive: {
      x: 0,
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    active: (custom: { x: number; y: number }) => ({
      x: 0,
      y: 1,
      opacity: 1,
      scale: [1, 1.3, 1],
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        scale: { repeat: 0, duration: 0.5 },
        x: { duration: 0.6 },
        y: { duration: 0.6 },
      },
    }),
  };

  useEffect(() => {
    let interval: any = null;
    if (active) {
      interval = setInterval(() => {
        setActiveDuration((prev) => {
          if (prev >= requiredDuration && !isMoved) {
            clearInterval(interval);
            animateIcons();
            return 0;
          }
          return prev + 100;
        });
      }, 100);
    } else {
      setActiveDuration(0);
      setActiveThreats([]);
      setIsMoved(false);
      setIcons([
        {
          id: 1,
          url: "/svg-1.PNG",
          name: "phishing-email",
          delay: 0,
          position: { x: 0, y: 0 },
          card: 1,
        },
        {
          id: 2,
          url: "/svg-2.PNG",
          name: "suspicious-email",
          delay: 0.1,
          position: { x: 0, y: 0 },
          card: 2,
        },
        {
          id: 4,
          url: "/svg-4.PNG",
          name: "flower",
          delay: 0.3,
          position: { x: 0, y: 0 },
          card: 1,
        },
        {
          id: 5,
          url: "/svg-1.PNG",
          name: "suspicious-email",
          delay: 0.4,
          position: { x: 0, y: 0 },
          card: 2,
        },
        {
          id: 6,
          url: "/svg-2.PNG",
          name: "suspicious-email",
          delay: 0.5,
          position: { x: 0, y: 0 },
          card: 2,
        },
        {
          id: 7,
          url: "/svg-3.PNG",
          delay: 0.6,
          position: { x: 0, y: 0 },
          card: 1,
        },
        {
          id: 8,
          url: "/svg-4.PNG",
          name: "flower",
          delay: 0.7,
          position: { x: 0, y: 0 },
          card: 1,
        },
        {
          id: 9,
          url: "/svg-1.PNG",
          name: "phishing-email",
          delay: 0.8,
          position: { x: 0, y: 0 },
          card: 1,
        },
        {
          id: 10,
          url: "/svg-2.PNG",
          name: "suspicious-email",
          delay: 0.9,
          position: { x: 0, y: 0 },
          card: 2,
        },
      ]);
    }

    return () => clearInterval(interval);
  }, [active]);

  const animateIcons = async () => {
    setIsMoved(true);

    const selectedIcons = [
      icons.find((icon) => icon.name === "flower" && icon.card === 1),
      icons.find((icon) => icon.name === "phishing-email" && icon.card === 1),
      icons.find((icon) => icon.name === "suspicious-email" && icon.card === 2),
    ].filter(Boolean); // Remove undefined in case an icon is missing

    if (selectedIcons.length > 0) {
      setIcons((prev) =>
        prev.filter(
          (icon) => !selectedIcons.some((sel: any) => sel.id === icon.id)
        )
      );

      const spacing = 50; // Fixed spacing between icons
      const newThreats = selectedIcons.map((icon, index) => ({
        ...icon,
        targetX: spacing + index, // Left-aligned: 0, 50, 100
        targetY: 50, // Align in third card
      }));

      // Set activeThreats to the three selected icons
      setActiveThreats(newThreats);

      await controls.start("active");
      await new Promise((resolve) => setTimeout(resolve, 300)); // Delay between icons
    }

    setIsMoved(false);
  };

  return (
    <div className={styles.container}>
      {!active && !isMoved
        ? icons.map((item: any) => (
            <motion.div
              key={item.id}
              className={styles.iconWrapper}
              variants={iconVariants}
              initial="initial"
              animate="inactive"
              transition={{ duration: 0.5, delay: item.delay, ease: "easeOut" }}
              style={{
                transform: `translate(${cardPositions[item.card].y}px, ${
                  cardPositions[item.card].y
                }px)`,
              }}
            >
              <Image
                className={styles.icon}
                src={item.url}
                alt={'alt'}
                width={35}
                height={35}
              />
            </motion.div>
          ))
        : activeThreats.map((item) => (
            <motion.div
              key={item.id}
              className={styles.iconWrapper}
              variants={iconVariants}
              initial={{
                x: cardPositions[item.card].x,
                y: cardPositions[item.card].y,
                opacity: 1,
              }}
              animate="active"
              custom={{ x: item.targetX, y: item.targetY }}
            >
              <Image
                className={styles.icon}
                src={item.url}
                alt={'alt'}
                width={35}
                height={35}
              />
            </motion.div>
          ))}
    </div>
  );
};

export default OverlapIcons;
