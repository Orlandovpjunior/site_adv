"use client";

import { motion } from "framer-motion";
import { ArrowRight, Scale } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-accent-50 pt-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Scale className="w-4 h-4" />
              <span>Consultoria Jurídica Especializada</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Excelência em{" "}
              <span className="text-primary-600">Advocacia</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Oferecemos serviços jurídicos de alta qualidade com dedicação,
              ética e comprometimento. Sua segurança jurídica é nossa
              prioridade.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="#contato"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Entre em Contato
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="#servicos"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold border-2 border-primary-600 hover:bg-primary-50 transition-all duration-300"
              >
                Nossos Serviços
              </Link>
            </motion.div>
          </motion.div>

          {/* Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full h-[500px] bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden">
              {/* Placeholder para imagem da advogada */}
              <div className="w-64 h-64 bg-white/50 rounded-full flex items-center justify-center">
                <Scale className="w-32 h-32 text-primary-400" />
              </div>
              {/* Decorative elements */}
              <div className="absolute top-10 right-10 w-20 h-20 bg-primary-200 rounded-full opacity-50"></div>
              <div className="absolute bottom-10 left-10 w-32 h-32 bg-accent-200 rounded-full opacity-50"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

