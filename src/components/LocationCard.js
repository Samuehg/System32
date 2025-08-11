import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Building, DoorOpen, Clock } from 'lucide-react';

const LocationCard = ({ title, locationDetails, bgColor, textColor, scheduleLink }) => {
  return (
    <motion.a
      href={scheduleLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative flex flex-col items-center justify-center p-8 rounded-3xl shadow-xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 group ${bgColor} ${textColor}`}
      initial={{ opacity: 0, y: 50, rotateX: 90 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2, type: "spring", stiffness: 100, damping: 10 }}
    >
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)` }}></div>
      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.div
          className="p-4 rounded-full mb-4"
          style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
        >
          <MapPin className="w-12 h-12" />
        </motion.div>
        <h3 className="text-3xl font-extrabold mb-4">{title}</h3>
        <div className="space-y-3 text-lg font-medium opacity-90">
          <p className="flex items-center justify-center gap-2">
            <Building className="w-6 h-6" />
            {locationDetails.block}
          </p>
          <p className="flex items-center justify-center gap-2">
            <DoorOpen className="w-6 h-6" />
            {locationDetails.room}
          </p>
          {scheduleLink && (
            <p className="flex items-center justify-center gap-2 mt-4">
              <Clock className="w-6 h-6" />
              Ver Horarios
            </p>
          )}
        </div>
      </div>
    </motion.a>
  );
};

export default LocationCard;