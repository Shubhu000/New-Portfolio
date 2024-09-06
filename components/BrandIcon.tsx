import Image from 'next/image';
import React from 'react';

export default function BrandIcon() {
  return (
    <>
      <style jsx>{`
        #brand {
          transition: all 0.5s ease-in-out;
          cursor: pointer;
        }
        #brand:hover {
          transform: scale(1.05);
        }
      `}</style>
      <div id="brand">
        <Image
          src={require('@images/home/hero/logo.png')} // Replace with the actual path to your PNG image
          alt="Brand Icon"
          width={100}
          height={100}
        />
      </div>
    </>
  );
}
