"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about-section" className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-2 sm:px-3 md:px-4">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-[#1B365D]">
              About FinVerge
            </h2>
            <p className="text-gray-600 text-lg">
              At FinVerge Advisors, we empower startups and SMEs to turn their
              finance functions into engines of growth. Leveraging technology
              and deep financial expertise, we deliver tailored solutions that
              enhance agility, provide actionable insights, support real-time
              decision-making, and drive accountability through meticulous
              financial planning and monitoring. Our mission is to help
              forward-thinking businesses unlock their full potential by
              transforming their finance functions into trusted growth partners.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="relative h-[200px] rounded-lg overflow-hidden shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&auto=format&fit=crop&q=80"
                alt="Financial analytics dashboard on computer screen"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[200px] rounded-lg overflow-hidden shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80"
                alt="Financial documents and calculator"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[200px] rounded-lg overflow-hidden shadow-md col-span-2">
              <Image
                src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?w=800&auto=format&fit=crop&q=80"
                alt="Modern office workspace with financial charts"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
