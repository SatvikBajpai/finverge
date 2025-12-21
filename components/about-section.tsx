"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about-section" className="w-full py-24 md:py-32 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 gradient-section" />

      {/* Decorative elements */}
      <div className="absolute top-1/4 -right-32 w-64 h-64 bg-amber-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-32 w-64 h-64 bg-amber-400/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              About <span className="gradient-text">FinVerge</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
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
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="relative h-[200px] rounded-2xl overflow-hidden glass-card group">
              <Image
                src="https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&auto=format&fit=crop&q=80"
                alt="Financial analytics dashboard on computer screen"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
            </div>
            <div className="relative h-[200px] rounded-2xl overflow-hidden glass-card group">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80"
                alt="Financial documents and calculator"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
            </div>
            <div className="relative h-[200px] rounded-2xl overflow-hidden glass-card col-span-2 group">
              <Image
                src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?w=800&auto=format&fit=crop&q=80"
                alt="Modern office workspace with financial charts"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
