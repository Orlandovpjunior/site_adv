"use client";

import { motion } from "framer-motion";
import {
  Scale,
  FileText,
  Briefcase,
  Home,
  Users,
  Shield,
  Building2,
  Heart,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Scale,
      title: "Direito Civil",
      description:
        "Contratos, responsabilidade civil, direito das coisas e sucessões.",
    },
    {
      icon: Briefcase,
      title: "Direito Trabalhista",
      description:
        "Defesa dos direitos trabalhistas, rescisões e acordos coletivos.",
    },
    {
      icon: Home,
      title: "Direito Imobiliário",
      description:
        "Compra e venda, locação, regularização de imóveis e condomínios.",
    },
    {
      icon: Users,
      title: "Direito de Família",
      description:
        "Divórcios, pensão alimentícia, guarda de filhos e inventários.",
    },
    {
      icon: Shield,
      title: "Direito Criminal",
      description:
        "Defesa criminal, habeas corpus e acompanhamento processual.",
    },
    {
      icon: Building2,
      title: "Direito Empresarial",
      description:
        "Constituição de empresas, contratos comerciais e consultoria empresarial.",
    },
    {
      icon: FileText,
      title: "Direito Tributário",
      description:
        "Planejamento tributário, defesa em execuções fiscais e consultoria.",
    },
    {
      icon: Heart,
      title: "Direito Previdenciário",
      description:
        "Aposentadorias, auxílios, benefícios e revisões de benefícios.",
    },
  ];

  return (
    <section
      id="servicos"
      className="py-20 bg-gradient-to-br from-gray-50 to-primary-50"
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
            Serviços Prestados
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma ampla gama de serviços jurídicos para atender todas
            as suas necessidades legais com excelência e dedicação.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

