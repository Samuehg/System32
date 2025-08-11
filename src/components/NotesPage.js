import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotesPage = () => {
  const noteBooks = [
    {
      title: "Matemáticas para la Computación",
      description: "Apuntes de OneNote para Matemáticas para la Computación.",
      link: "https://eafit.sharepoint.com/:o:/s/Sistemas25-2/EkcBTAVRRf9HiXVGT_NSBOQBD_Le2zC9aWC-49ppPlCc3A?e=cE1vuj",
      bgColor: "from-blue-500 to-indigo-600"
    },
    {
      title: "Pensamiento Computacional",
      description: "Apuntes de OneNote para Pensamiento Computacional.",
      link: "https://eafit.sharepoint.com/:o:/s/Sistemas25-2/EjiZ0tnzAapJjmneABzU77oBh8DBeaaYXrXCjVyR4rHP1w?e=loXBdS",
      bgColor: "from-green-500 to-teal-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex flex-col items-center justify-center p-8 text-white"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className="w-full max-w-6xl mb-8" variants={itemVariants}>
        <Link to="/" className="flex items-center text-lg font-semibold text-white hover:text-blue-300 transition-colors duration-300">
          <ArrowLeft className="mr-2" /> Volver al Inicio
        </Link>
      </motion.div>

      <motion.h2
        className="text-5xl font-extrabold mb-12 text-center drop-shadow-lg"
        variants={itemVariants}
      >
        <BookOpen className="inline-block mr-4 text-yellow-400" />
        Apuntes de Clases
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl"
        variants={containerVariants}
      >
        {noteBooks.map((notebook, index) => (
          <motion.a
            key={index}
            href={notebook.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`relative flex flex-col items-center justify-center p-8 rounded-3xl shadow-xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 group bg-gradient-to-br ${notebook.bgColor} text-white`}
            variants={itemVariants}
            whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)" }}
            whileTap={{ scale: 0.98 }}
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
                <BookOpen className="w-12 h-12" />
              </motion.div>
              <h3 className="text-3xl font-extrabold mb-2">{notebook.title}</h3>
              <p className="text-lg font-medium opacity-90">{notebook.description}</p>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default NotesPage;