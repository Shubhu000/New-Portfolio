'use client';

import React from 'react';

interface ModalProps {
  title: string;
  description: string;
  techStack: string[];
  role: string;
  onClose: () => void;
}

export default function ProjectModal({
  title,
  description,
  techStack,
  role,
  onClose,
}: ModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-gray-500 text-xl font-bold"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-sm text-gray-700 mb-4">{description}</p>
        <div>
          <h3 className="font-semibold text-sm mb-1">Technologies:</h3>
          <ul className="flex flex-wrap gap-2 mb-3">
            {techStack.map((tech, idx) => (
              <li
                key={idx}
                className="bg-gray-200 text-gray-800 text-xs px-3 py-1 rounded-full"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-sm mb-1">My Role:</h3>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
    </div>
  );
}
