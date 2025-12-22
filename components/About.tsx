"use client";

import { motion } from "framer-motion";
import { Award, Users, Target, Heart } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Award,
      title: "Excelência",
      description: "Comprometimento com a qualidade em cada caso atendido.",
    },
    {
      icon: Users,
      title: "Atendimento Personalizado",
      description: "Cada cliente recebe atenção dedicada e individualizada.",
    },
    {
      icon: Target,
      title: "Foco em Resultados",
      description: "Estratégias jurídicas eficazes para alcançar seus objetivos.",
    },
    {
      icon: Heart,
      title: "Ética e Transparência",
      description: "Valores fundamentais que guiam nosso trabalho diário.",
    },
  ];

  return (
    <section
      id="sobre"
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Sobre Nós
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Com anos de experiência no mercado jurídico, nosso escritório se
            destaca pela dedicação, profissionalismo e resultados consistentes
            para nossos clientes.
          </p>
        </motion.div>

        {/* Image placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="w-full h-64 sm:h-96 bg-gradient-to-r from-primary-100 to-accent-100 rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <Users className="w-24 h-24 text-primary-400 mx-auto mb-4" />
              <p className="text-gray-500">Espaço para foto da advogada</p>
            </div>
          </div>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <value.icon className="w-7 h-7 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

