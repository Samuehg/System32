import React from 'react';
import { motion } from 'framer-motion';
import { FaMicrosoftTeams } from 'react-icons/fa';
import { BookOpen } from 'lucide-react';
import Card from './components/Card';
import LocationCard from './components/LocationCard';
import ParticlesBackground from './components/ParticlesBackground';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NotesPage from './components/NotesPage';
import EngineeringQuotes from './components/EngineeringQuotes';

// Componente para el logo hecho en código
const CodeLogo = () => (
  <motion.div
    className="text-white font-mono text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 text-center leading-none"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1, ease: "easeOut" }}
  >
    <motion.span
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="text-blue-400"
    >
      &lt;
    </motion.span>
    <motion.span
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className="text-purple-400"
    >
      Sys
    </motion.span>
    <motion.span
      initial={{ x: 20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.5 }}
      className="text-green-400"
    >
      25
    </motion.span>
    <motion.span
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.5 }}
      className="text-red-400"
    >
      -2
    </motion.span>
    <motion.span
      initial={{ x: 20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="text-blue-400"
    >
      /&gt;
    </motion.span>
  </motion.div>
);


const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
      <CodeLogo /> {/* Aquí va el logo hecho en código */}
      <EngineeringQuotes /> {/* Aquí van las frases de ingeniería */}

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Card
          icon={FaMicrosoftTeams}
          title="Grupo de Teams"
          description="Acceso directo a nuestro grupo de Teams. ¡No hay excusas para no unirse a la reunión!"
          link="https://teams.microsoft.com/l/team/19%3AE3t1C7a-NqxnbIoxZ_AvU9U5RHPWFi11_H7443qnPIU1%40thread.tacv2/conversations?groupId=3816f84d-0f93-4974-a28a-46239c0fa93c&tenantId=99f7b55e-9cbe-467b-8143-919782918afb"
          bgColor="bg-gradient-to-br from-purple-700 to-indigo-700"
          textColor="text-white"
        />

        <Link to="/notes" className="contents">
          <Card
            icon={BookOpen}
            title="Apuntes 365"
            description="Todos los apuntes y notas del paquete 365. ¡Para que no digas que no tienes dónde estudiar!"
            bgColor="bg-gradient-to-br from-green-500 to-teal-600"
            textColor="text-white"
          />
        </Link>

        <LocationCard
          title="Consultorio de Cálculo"
          locationDetails={{ block: "Bloque 20, Piso 4", room: "Salón 412" }}
          bgColor="bg-gradient-to-br from-orange-500 to-red-600"
          textColor="text-white"
        />

        <LocationCard
          title="Monitoreo Pensamiento Computacional"
          description="Horarios y ubicación para monitoreo de Pensamiento Computacional."
          locationDetails={{ block: "Bloque 19, 2do Piso", room: "Área de Telemática" }}
          scheduleLink="https://eafit-my.sharepoint.com/personal/sjmartinet_eafit_edu_co/Documents/Datos%20adjuntos/FH1037-20252-horario-monitorias.png?web=1"
          bgColor="bg-gradient-to-br from-cyan-600 to-blue-700"
          textColor="text-white"
        />
      </motion.div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex flex-col items-center justify-center p-8 overflow-hidden">
        <ParticlesBackground />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notes" element={<NotesPage />} />
        </Routes>
      </div>
    </Router>
  );
}