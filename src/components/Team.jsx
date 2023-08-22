import React from 'react';
import { BsShieldFillCheck } from 'react-icons/bs';
import { BiSearchAlt } from 'react-icons/bi';
import { RiHeart2Fill } from 'react-icons/ri';
import image1 from '../assets/images/waseem.png';
import image2 from '../assets/images/madesh.jpg';
import image3 from '../assets/images/kavin.jpg';
import image4 from '../assets/images/mohan.jpg';

const DeveloperCard = ({ name, role, avatar, bio }) => (
    <div className="flex p-6 m-3 border rounded-lg shadow-xl white-glassmorphism">
      <img src={avatar} alt={`${name}'s Avatar`} className="w-40 h-40 rounded-full mr-4" />
      <div className="flex flex-col justify-center">
        <div className="flex items-center mb-3">
          <div>
            <h3 className="text-2xl font-semibold text-white text-gradient-lighter">{name}</h3>
            <p className="text-gray-500">{role}</p>
          </div>
        </div>
        <p className="mt-2 text-white">{bio}</p>
      </div>
    </div>
  );

const Team = () => {
  const developers = [
    {
      name: 'Mohamed waseem A',
      role: 'Research & Development',
      avatar: image1,
      bio: "Unleashing Blockchain's Potential: Pioneering Research and Development for Tomorrow's Solutions",
    },
    {
      name: 'Madesh A',
      role: 'Frontend Developer',
      avatar: image2,
      bio: 'Passionate about creating visually stunning and user-friendly designs that enhance the user experience.',
    },
    {
      name: 'Kavin Kumar S',
      role: 'Smart Contract Developer',
      avatar: image3,
      bio: 'Empowering Future Through Code: Blockchain and Web Development Enthusiast',
    },
    {
      name: 'Mohanraj M',
      role: 'Blockchain Developer',
      avatar: image4,
      bio: 'Enthusiastic about delivering end-to-end solutions that bring value and innovation to our projects.',
    },
  ];

  return (
    <div className="flex w-full justify-center items-center gradient-bg-team pt-60 ">
      <div className="flex mf:flex-row flex-col items-center justify-center md:px-20 md:py-7 p-12">


        <div className="flex-1 flex flex-row flex-wrap justify-center items-center">
          {developers.map((developer, index) => (
            <DeveloperCard
              key={index}
              name={developer.name}
              role={developer.role}
              avatar={developer.avatar}
              bio={developer.bio}
            />
          ))}
        </div>
        <div className="flex-1 ml-20 flex flex-col justify-start items-start">
          <h1 className="text-5xl sm:text-8xl text-white text-gradient py-8">
            Meet Our Talented Developers
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-3xl sm:text-3xl">
            Our team is dedicated to crafting top-notch solutions and driving innovation in the
            world of blockchain technology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
