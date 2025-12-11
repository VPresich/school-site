import React, { useState } from 'react';
import { PortableText } from '@portabletext/react';
import { AboutTeacher } from '../redux/about/types';
import { getImageUrl } from '../api/getImageUrl';
import PortableTextConfig from './PortableTextConfig';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

interface TeacherCardProps {
  teacher: AboutTeacher;
}

const TeacherCard: React.FC<TeacherCardProps> = ({ teacher }) => {
  const [showBio, setShowBio] = useState(false);

  return (
    <div className="relative p-2 flex flex-col items-center w-72 cursor-pointer bg-white rounded-xl shadow-md">
      <div
        className="w-full aspect-3/4 rounded-t-xl overflow-hidden relative"
        onClick={() => setShowBio(prev => !prev)}
      >
        <img
          src={getImageUrl(teacher.photo.asset._ref, 1200)}
          alt={teacher.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-102"
        />
        {/* <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-300"></div> */}
        <AnimatePresence>
          {showBio && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={clsx(
                'absolute inset-0 bg-white/90 flex flex-col text-center justify-center p-4 text-gray-700 rounded-t-xl',
                'overflow-auto'
              )}
            >
              <PortableText
                value={teacher.bio}
                components={PortableTextConfig}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="p-4 flex flex-col gap-1 w-full">
        <h3 className="text-xl font-semibold text-[#993333] text-center">
          {teacher.name}
        </h3>
        <p className="text-gray-600 font-medium text-center">
          {teacher.position}
        </p>
      </div>
    </div>
  );
};

export default TeacherCard;
