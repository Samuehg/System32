import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const quotes = [
  "Si funciona, no lo toques.",
  "El código es como el humor. Si tienes que explicarlo, es malo.",
  "Debugging: el arte de quitarle los bichos al software.",
  "No es un error, es una característica no documentada.",
  "La ingeniería es 90% sudor y 10% inspiración... o al revés.",
  "Un buen ingeniero es aquel que sabe dónde buscar la respuesta.",
  "La mejor documentación es el código que se explica solo.",
  "Siempre hay una solución más compleja de la que pensaste.",
  "La ley de Murphy se aplica doble en ingeniería.",
  "El cliente siempre tiene la razón... hasta que no la tiene.",
  "Programar es como construir un castillo de arena en una playa que se inunda.",
  "La optimización prematura es la raíz de todo mal.",
  "No hay atajos para ningún lugar que valga la pena ir.",
  "La calidad no es un acto, es un hábito.",
  "El diseño es pensar en voz alta.",
  "La simplicidad es la máxima sofisticación.",
  "Si no puedes explicarlo de forma sencilla, no lo entiendes lo suficiente.",
  "La innovación distingue a un líder de un seguidor.",
  "La única forma de hacer un gran trabajo es amar lo que haces.",
  "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
  "La paciencia es una virtud, especialmente en el debugging.",
  "Un byte de código vale más que mil palabras de especificación.",
  "La vida es demasiado corta para el código feo.",
  "El hardware es lo que golpeas, el software es lo que maldices.",
  "La ingeniería es el arte de modelar materiales que no entiendes completamente.",
  "La creatividad es inteligencia divirtiéndose.",
  "No te preocupes si no funciona bien. Si todo lo hiciera, te quedarías sin trabajo.",
  "La programación es un 10% de escritura y un 90% de depuración.",
  "El mejor programa es el que no necesita ser escrito.",
  "La perfección se logra no cuando no hay nada más que añadir, sino cuando no hay nada más que quitar.",
  "La ingeniería es el puente entre la ciencia y la sociedad.",
  "El futuro pertenece a quienes creen en la belleza de sus sueños.",
  "La lógica te llevará de A a B. La imaginación te llevará a todas partes.",
  "La única constante en la tecnología es el cambio.",
  "El conocimiento es poder, pero la implementación es la clave.",
  "Si no está roto, no lo arregles... a menos que seas ingeniero.",
  "La ingeniería es el arte de hacer lo imposible, posible.",
  "El error es el primer paso hacia el descubrimiento.",
  "La mejor manera de predecir el futuro es crearlo.",
  "La ingeniería es la profesión que aplica el conocimiento científico para el beneficio de la humanidad.",
  "El éxito no es definitivo, el fracaso no es fatal: es el coraje de continuar lo que cuenta.",
  "La ingeniería es la ciencia de la estimación.",
  "La programación es como la poesía, solo que más útil.",
  "El buen diseño es obvio. El gran diseño es transparente.",
  "La ingeniería es el arte de organizar y dirigir a los hombres y controlar las fuerzas y los materiales de la naturaleza para el beneficio de la raza humana.",
  "La tecnología es solo una herramienta. La gente usa las herramientas para mejorar sus vidas.",
  "La innovación es ver lo que todos han visto y pensar lo que nadie ha pensado.",
  "La ingeniería es la disciplina que nos permite construir el futuro.",
  "El código limpio siempre parece que fue escrito por alguien que se preocupa.",
  "Betty la fea es un ejemplo de ingeniería de sistemas... ¡de la vida real!"
];

const EngineeringQuotes = () => {
  const [currentQuote, setCurrentQuote] = useState('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);

    const interval = setInterval(() => {
      const newRandomIndex = Math.floor(Math.random() * quotes.length);
      setCurrentQuote(quotes[newRandomIndex]);
    }, 10000); // Cambia la frase cada 10 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.p
      className="text-xl font-medium text-white text-center mt-8 mb-12 max-w-2xl mx-auto drop-shadow-md"
      key={currentQuote} // Key para forzar la animación en cada cambio
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      "{currentQuote}"
    </motion.p>
  );
};

export default EngineeringQuotes;