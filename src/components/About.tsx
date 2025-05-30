'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <p className="text-lg text-gray-600 mb-6">
            안녕하세요! 저는 프론트엔드 개발자입니다. 사용자 경험을 중요시하며,
            모던 웹 기술을 활용하여 아름답고 효율적인 웹 애플리케이션을 만드는 것을 좋아합니다.
          </p>
          <div className="grid grid-cols-2 gap-6 mt-12">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">연락처</h3>
              <p className="text-gray-600">contact@example.com</p>
              <p className="text-gray-600">010-1234-5678</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">위치</h3>
              <p className="text-gray-600">서울특별시</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 