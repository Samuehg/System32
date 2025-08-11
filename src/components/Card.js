import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ icon: Icon, title, description, link, bgColor, textColor }) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative flex flex-col items-center justify-center p-8 rounded-3xl shadow-xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 group ${bgColor} ${textColor}`}
      whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)" }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 50, rotateX: 90 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", type: "spring", stiffness: 100, damping: 10 }}
    >
      <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300" style={{ backgroundImage: `radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)` }}></div>
      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.div
          className="p-4 rounded-full mb-4"
          style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          {Icon && <Icon className="w-12 h-12" />}
        </motion.div>
        <h3 className="text-3xl font-extrabold mb-2">{title}</h3>
        <p className="text-lg font-medium opacity-90">{description}</p>
      </div>
    </motion.a>
  );
};

export default Card;