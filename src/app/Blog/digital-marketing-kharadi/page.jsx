'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function DigitalMarketingKharadi() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section with Brand Colors */}
      <motion.div
        className="relative w-full h-[80vh] flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Brand Colors Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary-dark via-brand-primary-dark to-brand-secondary-dark"></div>

        {/* Transparent Overlay for Brand Consistency */}
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/30 via-transparent to-brand-secondary-dark/20"></div>

        {/* Floating Brand Color Elements */}
        <motion.div
          className="absolute top-10 right-10 w-64 h-64 bg-brand-primary/20 rounded-full blur-3xl"
          animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-48 h-48 bg-brand-secondary/25 rounded-full blur-2xl"
          animate={{ y: [0, 20, 0], scale: [1, 0.9, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/3 left-1/4 w-32 h-32 bg-brand-primary/15 rounded-full blur-2xl"
          animate={{ y: [0, -15, 0], x: [0, 15, 0] }}
          transition={{ duration: 9, repeat: Infinity }}
        />

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6"
          >
            Digital Marketing Services in <span className="bg-gradient-to-r from-orange-300 to-orange-100 bg-clip-text text-transparent">Kharadi</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto"
          >
            Helping Local Businesses Grow with Strategic Digital Solutions
          </motion.p>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.article 
          className="prose prose-lg max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <motion.div 
              className="relative w-full h-96 rounded-2xl overflow-hidden mb-12 shadow-xl"
              whileHover={{ scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <Image
                src="/Blog/blog1.jpg"
                alt="Digital Marketing Services"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </motion.div>

            <p className="text-lg leading-relaxed mb-6">
              With the dawn of the digital age, customers are no longer depending on word-of-mouth or offline visits to learn about new businesses. The greater number of purchasing decisions now begin with searches on the internet, social networking, or review sites. For local companies, the internet trend has posed both opportunities and challenges. To be in the game, the need for digital marketing services in Kharadi cannot be overemphasized.
            </p>
            <p className="text-lg leading-relaxed mb-8">
              As Webutsav, we are actively involved with small and growing businesses and help them establish an online presence that is authentic, professional, and trustworthy. We are not in the business of finding shortcuts, but instead focus on the long-term growth prospects offered by the digital world.
            </p>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">The Changing Way Customers Find Businesses</h2>
              <p className="text-lg leading-relaxed mb-6 text-gray-700">
                Consumer behavior has witnessed a lot of changes in the past few years. Whether the customer is looking for a service provider or a restaurant or a professional consultant, the initial inquiry would be on Google or a social media website.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                If your company does not have an online presence or simply fails to make a great first impression, it can easily lead to a loss of customers to competitors. Digital marketing is not restricted to large corporations alone. Small businesses in Kharadi or Pune can compete effectively provided there is clarity in strategy and consistency in delivery.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">What Digital Marketing Really Means for Local Businesses</h2>
            <p className="text-lg leading-relaxed mb-6">
              Digital marketing is not just about running ads or posting on social media. It is a combination of strategies that work together to build visibility, trust, and engagement over time.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 my-16">
              <motion.div 
                className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-sm border border-blue-100"
                whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-semibold mb-6 text-gray-800 flex items-center">
                  <span className="w-8 h-1 bg-blue-500 mr-3"></span>
                  For local businesses, digital marketing helps in:
                </h3>
                <ul className="space-y-4">
                  {[
                    "Reaching nearby customers actively searching for services",
                    "Building credibility through online content and reviews",
                    "Creating awareness without spending excessively on ads",
                    "Generating steady leads instead of one-time inquiries"
                  ].map((item, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start group"
                      whileHover={{ x: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <span className="text-blue-500 mr-3 mt-1">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              <motion.div 
                className="relative rounded-2xl overflow-hidden h-full min-h-[300px] shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <Image
                  src="/Blog/blog2.jpg"
                  alt="Digital Marketing Services"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </motion.div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Webutsav – A Practical and Honest Digital Marketing Agency</h2>
            <p className="text-lg leading-relaxed mb-6">
              Webutsav is built on the belief that good marketing should feel human, not artificial. Every business has a story, and our job is to present that story in a way that connects with the audience naturally.
            </p>
            <p className="text-lg leading-relaxed mb-8">
              As a growing digital marketing agency in Pune, we work with startups, small businesses, and service providers who want clarity, transparency, and measurable outcomes. Our approach is simple—understand the business, study the market, and apply strategies that make sense.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Our Core Digital Marketing Services</h2>
            
            <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Search Engine Optimization (SEO)</h3>
            <p className="text-lg leading-relaxed mb-6">
              SEO is the backbone for the overall online presence. Our SEO solutions are more into the concept of growing, not into immediate solutions. Optimization, improvement, and local promotion are some areas here.
            </p>
            <p className="text-lg leading-relaxed mb-8">
              Companies are always searching for the most reputable SEO agency in Pune, but what matters most is being with a professional who adopts ethical procedures and has complete knowledge of their respective industry and market. Our search engine optimization professional services aim to increase search engine rankings with considerable content quality.
            </p>

            <motion.div 
              className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 rounded-2xl my-16 shadow-xl text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="max-w-3xl mx-auto">
                <div className="flex items-center mb-6">
                  <div className="p-2 bg-white/20 rounded-lg mr-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-bold">Social Media Marketing</h3>
                </div>
                <p className="text-blue-100 mb-6 text-lg leading-relaxed">
                  Social media is more than just posting content—it is about building relationships. As a trusted social media marketing agency Pune, Webutsav helps brands communicate clearly and consistently with their audience.
                </p>
                <p className="font-medium mb-4 text-blue-50">Our social media strategies focus on:</p>
                <ul className="grid md:grid-cols-3 gap-4 mb-6">
                  {[
                    { icon: 'M13 7h2m0 0v2m0-2h-2m2 6h-4m4 2h2m-2 2h-2m4-6h4m-9 0h-2m0 0H8m2 0v2m0-2V7m0 6h2m-2 0h2m-2 0v2m0 0v2m2-6v2m6 2h2m-2 0h-2',
                      text: 'Brand awareness and positioning' },
                    { icon: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z',
                      text: 'Audience engagement through content' },
                    { icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
                      text: 'Community building' }
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      className="bg-white/10 p-4 rounded-lg backdrop-blur-sm"
                      whileHover={{ y: -3, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-start">
                        <svg className="w-6 h-6 text-blue-200 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                        </svg>
                        <span className="text-blue-50">{item.text}</span>
                      </div>
                    </motion.li>
                  ))}
                </ul>
                <p className="text-blue-100 italic">
                  We avoid overposting or aggressive sales messaging, ensuring your brand remains relatable and trustworthy.
                </p>
              </div>
            </motion.div>

            <h3 className="text-2xl font-semibold text-gray-800 mt-12 mb-4">Paid Advertising (Google Ads & Social Ads)</h3>
            <p className="text-lg leading-relaxed mb-6">
              Paid marketing works best when supported by a clear strategy. Our team plans and manages ad campaigns that focus on intent-based targeting and budget efficiency.
            </p>
            <p className="text-lg leading-relaxed mb-8">
              Instead of chasing high traffic, we prioritize relevant traffic—people who are genuinely interested in your services.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Website Design and Optimization</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Your website is often the first interaction a customer has with your business. A slow or confusing website can harm trust instantly. Webutsav builds and optimizes websites that are:
                </p>
                <ul className="space-y-3">
                  {[
                    "Mobile-friendly",
                    "Fast-loading",
                    "Easy to navigate",
                    "Designed to convert visitors into leads"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl overflow-hidden">
                <Image
                  src="/Blog/website-design.jpg"
                  alt="Website Design and Optimization"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Supporting Businesses Across Pune and Kharadi</h2>
            <p className="text-lg leading-relaxed mb-8">
              While we actively work with businesses seeking digital marketing services in Kharadi, our reach extends across Pune. Many clients choose us while searching for the best marketing agency in Pune because of our practical approach and clear communication.
              We understand the local audience, competition, and search behavior, which allows us to create more relevant and effective marketing campaigns.
            </p>

            <div className="bg-orange-50 p-8 rounded-xl my-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Businesses Choose Webutsav</h2>
              <p className="text-lg leading-relaxed mb-6">
                Choosing a marketing partner is a long-term decision. Businesses trust Webutsav because we focus on quality over quantity.
              </p>
              <p className="text-lg font-medium mb-4">Here's what sets us apart:</p>
              <ul className="list-disc pl-6 space-y-3 mb-6">
                <li>Honest recommendations, not unnecessary upselling</li>
                <li>Clear reporting and performance tracking</li>
                <li>Content that sounds natural and professional</li>
                <li>SEO strategies aligned with search engine guidelines</li>
                <li>A dedicated team that values client growth</li>
              </ul>
              <p className="text-lg">
                We aim to be more than just a service provider—we aim to be a growth partner.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Digital Marketing That Builds Trust Over Time</h2>
            <p className="text-lg leading-relaxed mb-8">
              Real digital growth does not happen overnight. It is built through consistent efforts, thoughtful content, and ongoing optimization. At Webutsav, we focus on strategies that build credibility and visibility gradually.
              By combining SEO, content marketing, social media, and paid campaigns, we help businesses create a balanced and sustainable online presence.
            </p>

            <div className="bg-white border border-gray-200 rounded-xl p-6 my-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQ)</h2>
              
              <div className="space-y-6">
                {[
                  {
                    question: "How can digital marketing help local businesses in Kharadi?",
                    answer: "Digital marketing helps local businesses appear in online searches, connect with nearby customers, and build trust through consistent online visibility and engagement."
                  },
                  {
                    question: "How long does it take to see results from SEO?",
                    answer: "SEO usually shows noticeable improvements within a few months. The timeline depends on competition, website condition, and consistency of efforts."
                  },
                  {
                    question: "Is social media marketing necessary for small businesses?",
                    answer: "Yes. Social media allows small businesses to engage with customers, share updates, and build brand awareness without heavy advertising costs."
                  },
                  {
                    question: "What makes Webutsav different from other agencies?",
                    answer: "Webutsav focuses on honest communication, human-written content, and long-term strategies instead of quick, risky shortcuts."
                  },
                  {
                    question: "Do you work only with Pune-based businesses?",
                    answer: "No. While we are a digital marketing agency in Pune, we also work with businesses from nearby areas and other locations based on their requirements."
                  }
                ].map((faq, index) => (
                  <div key={index} className="border-b border-gray-100 pb-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            <motion.div 
              className="relative rounded-2xl overflow-hidden mt-24 mb-16 shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src="/Blog/website-design.jpg"
                  alt="Grow Your Business"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-orange-700/80"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 p-8 sm:p-12 md:p-16 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Grow Your Business with <span className="text-orange-300">Webutsav</span>
                </h2>
                <p className="text-xl text-blue-50 mb-8 max-w-3xl mx-auto leading-relaxed">
                  Digital marketing has become a necessity for businesses that want to stay competitive and visible in today's market. 
                  Let's work together to create a strategy that drives real results for your business.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link 
                    href="/Contact" 
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-base font-semibold rounded-full text-white bg-transparent hover:bg-white/10 transition-all duration-300 hover:scale-105 transform"
                  >
                    Get Started Today
                    <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                 
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.article>
      </div>
    </div>
  );
}