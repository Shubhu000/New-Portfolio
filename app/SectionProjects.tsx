'use client';

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';
import styles from './home.module.css';
import { assets } from '@/constant/assets';

const projects = [
  {
    title: 'Yliway Platform',
    imageSrc: assets.home.myLatestProject.yliway,
    githubLink: '',
    previewLink: 'https://www.yliway.com',
    description:
      'Yliway is a professional networking and learning platform similar to LinkedIn. It allows users to connect, share insights, attend live webinars, participate in forums, and showcase their professional journey. Built using Next.js, Node.js (with microservices architecture), and PostgreSQL. Each functional module such as forums, webinars, courses, and user profiles is developed as an individual microservice with separate repositories.',
    techStack: ['Next.js', 'Node.js', 'PostgreSQL', 'GraphQL', 'Microservices'],
    role: 'As a Full Stack Developer, I was responsible for building and integrating frontend modules with backend microservices. I developed various modules end-to-end using Next.js on the frontend and Node.js microservices with PostgreSQL on the backend.',
  },
  {
    title: 'Stembotix LMS',
    imageSrc: assets.home.myLatestProject.stembotix,
    githubLink: '',
    previewLink: 'https://www.stembotix.in',
    description:
      'Stembotix is a learning management system (LMS) designed for STEM education, similar to Udemy. It supports face-to-face online live courses, student progress tracking, and curriculum delivery. The platform is built using Next.js, Node.js, and PostgreSQL, and hosted on AWS EC2 for scalable performance.',
    techStack: ['Next.js', 'Node.js', 'PostgreSQL', 'AWS EC2'],
    role: 'As a Team Lead, I led a team of 10 developers. My primary responsibilities included reviewing pull requests, ensuring code quality, and independently handling production deployments to AWS EC2.',
  },
];

export default function SectionProjects() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section ref={ref} className={`safe-x-padding ${styles.sectionDistance}`}>
      <div className="text-center">
        <motion.h2
          initial={{ y: 100, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className={styles.sectionTitle}
        >
          My Projects
        </motion.h2>
      </div>

      <div
        className={`mt-12 max-w-6xl mx-auto ${
          projects.length < 3
            ? 'flex flex-wrap justify-center gap-6'
            : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
        }`}
      >
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            <ProjectCard {...proj} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
