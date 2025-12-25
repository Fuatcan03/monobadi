"use client"

import { Phone, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"

export function FloatingButtons() {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="fixed right-3 md:right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3"
    >
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        href="https://wa.me/905338809516"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] hover:bg-[#20BD5A] text-white p-3 md:p-4 rounded-full shadow-2xl shadow-[#25D366]/30"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        href="tel:+905338809516"
        className="bg-primary hover:bg-primary/90 text-primary-foreground p-3 md:p-4 rounded-full shadow-2xl shadow-primary/30"
        aria-label="Call"
      >
        <Phone className="w-5 h-5 md:w-6 md:h-6" />
      </motion.a>
    </motion.div>
  )
}