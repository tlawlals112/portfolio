'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const technologies = [
  { name: 'React', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'Next.js', level: 80 },
  { name: 'Tailwind CSS', level: 85 },
  { name: 'Node.js', level: 75 },
]

export default function Stack() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">기술 스택</h2>
          <div className="space-y-6">
            {technologies.map((tech, index) => (
              <div key={tech.name} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{tech.name}</span>
                  <span className="text-gray-600">{tech.level}%</span>
                </div>
                <motion.div
                  className="h-2 bg-gray-200 rounded-full"
                  initial={{ width: 0 }}
                  animate={inView ? { width: '100%' } : { width: 0 }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                >
                  <motion.div
                    className="h-full bg-black rounded-full"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${tech.level}%` } : { width: 0 }}
                    transition={{ duration: 1.5, delay: index * 0.2 }}
                  />
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 