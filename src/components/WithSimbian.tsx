'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Step {
  title: string;
  desc: string;
}

const steps: Step[] = [
  { title: 'Triaged & Reported', desc: 'SOC Agent handled investigation and reporting' },
  { title: 'Automated Response', desc: 'Incident automatically contained' },
  { title: 'Comprehensive Analysis', desc: 'AI recognized patterns' },
  { title: 'Accurate Detection', desc: 'Zero false positives' },
  { title: '24/7 Coverage', desc: 'No analyst fatigue' },
];

interface AlertsState {
  ignored: number;
  wronglyClosed: number;
  activeThreats: number;
}

export function WithSimbian() {
  const [alerts] = useState<AlertsState>({ ignored: 0, wronglyClosed: 0, activeThreats: 0 });
  const [currentStep, setCurrentStep] = useState(0);

  // Cycle through steps for animation effect
  const handleStepAnimation = () => {
    setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="py-12">
      <motion.h2
        className="text-3xl font-semibold text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        With Simbian
      </motion.h2>

      {/* Step-by-step horizontal flow */}
      <div className="relative flex flex-col md:flex-row justify-between items-center gap-6 mb-16">
        <AnimatePresence mode="wait">
          {steps.map((step, index) => (
            index <= currentStep && (
              <motion.div
                key={step.title}
                className="bg-gray-800 p-6 rounded-lg shadow-lg w-full md:w-1/5 text-center relative z-10"
                initial={{ opacity: 0, x: -100, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 100, scale: 0.8 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: index * 0.3 }}
                onAnimationComplete={index === currentStep ? handleStepAnimation : undefined}
              >
                <motion.h3
                  className="text-lg font-semibold"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.3 + 0.2 }}
                >
                  {step.title}
                </motion.h3>
                <motion.p
                  className="text-gray-400 text-sm mt-2"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.3 + 0.3 }}
                >
                  {step.desc}
                </motion.p>
                {index < steps.length - 1 && (
                  <motion.div
                    className="hidden md:block absolute top-1/2 right-[-50%] w-[50%] h-1 bg-green-500"
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.3 + 0.4 }}
                  />
                )}
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </div>

      {/* Alert Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {['Ignored Alerts', 'Wrongly Closed', 'Active Threats'].map((title, index) => (
          <motion.div
            key={title}
            className="bg-gray-800 p-6 rounded-lg shadow-lg text-center"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: index * 0.3, ease: 'easeOut' }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.svg
              className="w-12 h-12 text-green-500 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              initial={{ rotate: -45, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.3 + 0.1 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </motion.svg>
            <motion.h3
              className="text-xl font-semibold"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.3 + 0.2 }}
            >
              {title}
            </motion.h3>
            <motion.p
              className="text-4xl font-bold mt-2"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.3 + 0.3, ease: 'easeOut' }}
            >
              {alerts[title.toLowerCase().replace(' ', '') as keyof AlertsState]}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>

      {/* Summary */}
      <motion.div
        className="text-center mt-12 text-gray-400"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        <p>90% of alerts resolved automatically, 24/7</p>
        <p>Correlates alerts to your environment</p>
        <p>Investigate every alert—no SOAR needed</p>
      </motion.div>
    </section>
  );
}

/* Note: The following files remain unchanged from the previous version but are included for completeness. */