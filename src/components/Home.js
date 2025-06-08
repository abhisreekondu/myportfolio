import React from 'react'

import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div> <section className="h-screen flex flex-col justify-center items-center text-center px-4">
      <motion.h1 className="text-5xl md:text-7xl font-bold text-blue-500"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>
        Hi, I'm Abhi Sree Kondu
      </motion.h1>
      <p className="text-gray-400 mt-4 text-xl">Backend Developer | MERN Stack | Java</p>
    </section>
    </div>
  )
}

export default Home

