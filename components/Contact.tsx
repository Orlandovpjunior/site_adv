"use client";

/**
 * CONFIGURAÇÃO DO WHATSAPP:
 * 
 * Para configurar o número do WhatsApp, altere a constante WHATSAPP_NUMBER abaixo.
 * Formato: código do país + DDD + número (sem espaços, sem +, sem parênteses)
 * 
 * Exemplos:
 * - Brasil: 5511999999999 (55 = Brasil, 11 = DDD de São Paulo, 999999999 = número)
 * - Brasil: 5521987654321 (55 = Brasil, 21 = DDD do Rio, 987654321 = número)
 * 
 * IMPORTANTE: O número deve começar com o código do país (55 para Brasil)
 */

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

// ⚙️ CONFIGURE SEU NÚMERO DO WHATSAPP AQUI
const WHATSAPP_NUMBER = "5583996754636"; // Altere para o número real

// Mensagem pré-definida que será enviada
const DEFAULT_MESSAGE = "Olá! Gostaria de informações para consulta jurídica.";

export default function Contact() {
  const handleWhatsAppClick = () => {
    // Codifica a mensagem para URL
    const encodedMessage = encodeURIComponent(DEFAULT_MESSAGE);
    
    // Abre o WhatsApp Web/App
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section
      id="contato"
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
            Entre em Contato
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Estamos prontos para ajudar você. Entre em contato e agende uma
            consulta.
          </p>
        </motion.div>

        {/* Card do WhatsApp */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-md mx-auto"
        >
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            {/* Ícone do WhatsApp */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                <MessageCircle className="w-10 h-10 text-green-600" />
              </div>
            </div>

            {/* Título */}
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
              Fale Conosco
            </h3>

            {/* Texto explicativo */}
            <p className="text-gray-600 text-center mb-8">
              Clique no botão abaixo para iniciar uma conversa no WhatsApp
            </p>

            {/* Botão do WhatsApp */}
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-3"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Conversar no WhatsApp</span>
            </button>

            {/* Texto de garantia */}
            <p className="text-sm text-gray-500 text-center mt-6">
              Resposta garantida em até 24 horas
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
