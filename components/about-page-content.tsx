"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const MotionDiv = motion.div;

export function AboutPageContent() {
  return (
    <>
      <section className="w-full py-12 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="grid gap-10 lg:grid-cols-2 items-center"
          >
            <MotionDiv
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <h2 className="text-3xl font-bold tracking-tighter text-[#1B365D]">
                Our Story
              </h2>
              <p className="text-gray-600">
                Finverge Advisors was born from a deep understanding of the
                unique financial challenges startups and SMEs face every day.
                From managing unpredictable cash flows to scaling processes and
                navigating complex tax and compliance regulations, these hurdles
                often stand in the way of growth.
              </p>
              <p className="text-gray-600">
                It became clear that what these businesses needed went beyond
                financial advice — they required a partner who could provide
                on-ground execution, deliver strategic insights, and implement
                scalable processes without the cost burden of a full-time CFO.
                That’s where Finverge comes in.
              </p>
            </MotionDiv>
            <div className="relative h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?w=800&auto=format&fit=crop&q=80"
                alt="Modern office building with glass facade"
                fill
                className="object-cover rounded-lg shadow-md"
              />
            </div>
          </MotionDiv>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="grid gap-10 lg:grid-cols-2 items-center"
          >
            <div className="relative h-[400px] order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&auto=format&fit=crop&q=80"
                alt="Financial data analytics dashboard on computer screen"
                fill
                className="object-cover rounded-lg shadow-md"
              />
            </div>
            <MotionDiv
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4 order-1 lg:order-2"
            >
              <p className="text-gray-600">
                At Finverge Advisors, the mission is to build tech-driven,
                scalable finance functions that act as true business enablers.
                By combining deep financial expertise with technology, Finverge
                helps businesses gain real-time insights, automate manual
                processes, and make informed decisions that fuel growth.
              </p>
              <p className="text-gray-600">
                The team’s experience spans working with leading startups across
                industries like e-commerce, hospitality, and ed-tech, managing
                sales and receivables worth over INR 500+ Cr annually,
                overseeing inventory across multiple states, and supporting
                fundraising efforts that raised over USD 500 million. These
                experiences shaped Finverge’s core philosophy: startups and SMEs
                deserve the same level of financial rigor and strategic thinking
                as large corporations, but with solutions tailored to their
                scale and pace.
              </p>
            </MotionDiv>
          </MotionDiv>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="grid gap-10 lg:grid-cols-2 items-center"
          >
            <MotionDiv
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <p className="text-gray-600">
                Whether it’s optimizing cash flows, simplifying tax compliance,
                or preparing for investor conversations, Finverge Advisors
                empowers founders to focus on building their businesses while a
                dedicated partner handles their finance function. More than just
                consultants, Finverge becomes a trusted growth partner, helping
                startups and SMEs unlock their full potential through smarter
                financial management.
              </p>
            </MotionDiv>
            <div className="relative h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80"
                alt="Business documents with financial charts and graphs"
                fill
                className="object-cover rounded-lg shadow-md"
              />
            </div>
          </MotionDiv>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Founder Section - full width above mission/vision */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#1B365D]/5 p-8 rounded-lg border border-[#1B365D]/10 flex flex-col md:flex-row items-center gap-8 mb-16"
          >
            <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
              <Image
                src="/founder_image.jpg"
                alt="Vishal Manwani, Founder of Finverge Advisors"
                width={180}
                height={180}
                className="rounded-full object-cover border-4 border-[#1B365D]/20 shadow-md"
              />
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-2xl font-bold tracking-tight text-[#1B365D] mb-2">About the Founder</h2>
              <h3 className="text-lg font-semibold text-[#1B365D] mb-2">Vishal Manwani, CA</h3>
              <p className="text-gray-600 mb-2">
                Vishal Manwani is a Chartered Accountant and seasoned finance professional with over five years of experience across diverse industries, including e-commerce, agritech, and hospitality. His expertise spans financial planning and analysis, cash flow management, compliance, and driving automation in finance operations.
              </p>
              <p className="text-gray-600 mb-2">
                Vishal has worked closely with high-growth startups, managing receivables worth INR 50+ Cr and supporting fundraising efforts exceeding USD 500 million. His hands-on experience in optimizing financial processes, enhancing working capital efficiency, and leading tech-driven transformations has shaped the core philosophy of Finverge Advisors — to empower startups and SMEs with scalable, technology-driven finance solutions that enable growth.
              </p>
              <p className="text-gray-600">
                With a deep understanding of the unique challenges startups face, Vishal founded Finverge Advisors to bridge the gap between financial strategy and execution, offering founders the insights and support they need to navigate complex financial landscapes.
              </p>
            </div>
          </MotionDiv>
          {/* Mission and Vision in a two-column grid */}
          <div className="grid gap-12 md:grid-cols-2">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-[#1B365D]/5 p-8 rounded-lg border border-[#1B365D]/10"
            >
              <h2 className="text-3xl font-bold tracking-tighter text-[#1B365D] text-center mb-8">
                Our Mission
              </h2>
              <p className="text-gray-600 text-center text-lg">
                To provide startups and SMEs with bespoke financial solutions
                that enhance agility, efficiency, and strategic decision-making,
                positioning the finance function as a catalyst for growth.
              </p>
              <div className="mt-8 h-48 relative">
                <Image
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80"
                  alt="Financial growth chart with upward trend"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#1B365D]/5 p-8 rounded-lg border border-[#1B365D]/10"
            >
              <h2 className="text-3xl font-bold tracking-tighter text-[#1B365D] text-center mb-8">
                Our Vision
              </h2>
              <p className="text-gray-600 text-center text-lg">
                To be the trusted financial partner for forward-thinking
                businesses, recognized for transforming finance teams into
                strategic enablers of scalability and long-term success.
              </p>
              <div className="mt-8 h-48 relative">
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80"
                  alt="Modern business district with skyscrapers"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-[#1B365D] mb-4">
            Our Presence
          </h2>
          <p className="text-gray-600 mb-8">
            FinVerge Advisors is proudly based in Delhi NCR.
          </p>
          <div className="relative h-[400px] w-full max-w-4xl mx-auto">
            <Image
              src="https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Delhi NCR cityscape with modern buildings"
              fill
              className="rounded-lg object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end justify-center pb-8">
              <h3 className="text-white text-2xl font-bold">Delhi NCR</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
