'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-12">Contact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-2">GitHub</h3>
              <p className="text-gray-600">github.com/yourusername</p>
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-600">linkedin.com/in/yourusername</p>
            </a>
          </div>
          <div className="mt-12">
            <a
              href="mailto:contact@example.com"
              className="inline-block px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
            >
              이메일 보내기
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 