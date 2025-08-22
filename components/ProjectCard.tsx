'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt, FaInfoCircle } from 'react-icons/fa';
import ProjectModal from './ProjectModal';

interface ProjectCardProps {
  title: string;
  imageSrc: string;
  githubLink?: string;
  previewLink?: string;
  description: string;
  techStack: string[];
  role: string;
}

export default function ProjectCard({
  title,
  imageSrc,
  githubLink,
  previewLink,
  description,
  techStack,
  role,
}: ProjectCardProps) {
  const [showModal, setShowModal] = useState(false);

  const hasGitHub = !!githubLink && githubLink.trim().length > 0;
  const hasPreview = !!previewLink && previewLink.trim().length > 0;

  return (
    <>
      <div className="relative group overflow-hidden rounded-xl shadow-md">
        <Image
          src={imageSrc}
          alt={title}
          width={500}
          height={300}
          className="w-full h-[250px] object-cover"
        />

        <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center gap-4">
          {hasGitHub && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-3 rounded-full hover:bg-gray-200 transition"
            >
              <FaGithub size={20} />
            </a>
          )}
          {hasPreview && (
            <a
              href={previewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-3 rounded-full hover:bg-gray-200 transition focus:outline-none focus:ring-2 focus:ring-white"
              aria-label={`${title} Preview`}
            >
              <FaExternalLinkAlt size={20} />
            </a>
          )}
          <button
            onClick={() => setShowModal(true)}
            className="bg-white p-3 rounded-full hover:bg-gray-200 transition"
          >
            <FaInfoCircle size={20} />
          </button>
        </div>
      </div>

      {showModal && (
        <ProjectModal
          title={title}
          description={description}
          techStack={techStack}
          role={role}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}
