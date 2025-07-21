'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './home.module.css';
import ExperienceCard from '@/components/ExperienceCard';

const experienceList = [
  {
    title: 'Full Stack Developer at Yliway',
    duration: 'October 2023 – Present',
  },
  {
    title: 'MERN Stack Developer at Netizens Technologies',
    duration: 'August 2022 – July 2023',
  },
  {
    title: 'Web Developer at Differenz System',
    duration: 'December 2021 – July 2022',
  },
];

export default function SectionExperience() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className={`safe-x-padding ${styles.sectionDistance}`}>
      <div className="text-center">
        <motion.h2
          initial={{ y: 100, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className={styles.sectionTitle}
        >
          My Experience
        </motion.h2>
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7 }}
          className={`${styles.sectionDescription} max-w-[960px] mx-auto`}
        >
          Take a look at something I've worked on
        </motion.p>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {experienceList.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="h-full"
          >
            <ExperienceCard title={item.title} date={item.duration} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
