
import { ConnectButton } from 'thirdweb/react'
import { client } from './client'
import { IconCloudDemo } from '@/components/IconCloudDemo'
import RetroGrid from '@/components/magicui/retro-grid'

import ShimmerButton from '@/components/magicui/shimmer-button'
import SparklesText from '@/components/magicui/sparkles-text'
import { MarqueeDemo } from '@/components/MarqueeDemo'
import { CardHoverEffectDemo } from '@/components/CardHoverEffectDemo'

export default function Home() {
  return (
    <div>
 
      <main className="bg-light text-dark">
        <header className="text-white p-2">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-3xl text-red-700 font-bold">
              In<span className='text-black'>clusiv</span>
              <span className='text-blue-700'>IT</span>
            </h1>
            <nav className='hidden lg:flex'>
              <a href="#services" className="mr-6 hover:underline text-black">Services</a>
              <a href="#packages" className="mr-6 hover:underline text-black">Packages</a>
              <a href="#contact" className="hover:underline text-black">Contact</a>
            </nav>
            <ConnectButton 
              client={client} 
              appMetadata={{
                name: "Example App",
                url: "https://example.com",
              }}
            />
          </div>
        </header>
        <RetroGrid/>
        <section className="flex flex-col items-center justify-center h-screen" id="hero">
          <div className="container text-center text-black mt-14">
            <SparklesText text='  Empowering Schools and Businesses with IT Solutions'/>
            <p className="text-md animate-fade-in-up mt-8">
              Reduce paperwork and enhance educational focus with our affordable ERP solutions.
            </p>
            <ShimmerButton className="shadow-2xl mx-auto justify-center my-4">
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
       Know more
        </span>
      </ShimmerButton>
          </div>
          <IconCloudDemo/>
        </section>
<CardHoverEffectDemo/>
        <section className=" py-20" id="services">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-2">ERP Solutions for Schools</h3>
                <p className="mb-4">Custom ERP solutions designed to streamline school operations and reduce file work.</p>
                <a href="#" className="text-blue-600 hover:underline">Learn More</a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-2">Business Digitalization</h3>
                <p className="mb-4">Tailored IT services to digitalize your business processes and improve efficiency.</p>
                <a href="#" className="text-blue-600 hover:underline">Learn More</a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20" id="packages">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Packages</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-2">Basic ERP Package</h3>
                <p className="mb-4">Includes core ERP functionalities for small to medium-sized schools.</p>
                <ul className="text-left list-disc list-inside mb-4">
                  <li>Student Management</li>
                  <li>Attendance Tracking</li>
                  <li>Report Generation</li>
                </ul>
                <a href="#" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">Choose Basic</a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-2">Advanced ERP Package</h3>
                <p className="mb-4">Everything in Basic, plus additional features for larger institutions.</p>
                <ul className="text-left list-disc list-inside mb-4">
                  <li>Library Management</li>
                  <li>Advanced Reporting</li>
                  <li>Parent Portal</li>
                  <li>Analytics Dashboard</li>
                </ul>
                <a href="#" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">Choose Advanced</a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-2">Premium ERP Package</h3>
                <p className="mb-4">Our most comprehensive package for the largest institutions and businesses.</p>
                <ul className="text-left list-disc list-inside mb-4">
                  <li>Unlimited Users</li>
                  <li>Custom Integrations</li>
                  <li>eLearning Platform</li>
                  <li>24/7 Support</li>
                  <li>Custom Features</li>
                </ul>
                <a href="#" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">Choose Premium</a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20" id="contact">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">Contact Us</h2>
            <form className="max-w-lg mx-auto">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your Name" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your Email" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" rows={4} placeholder="Your Message"></textarea>
              </div>
              <button className="bg-primary text-white py-2 px-4 rounded hover:bg-accent transition" type="submit">
                Send Message
              </button>
            </form>
          </div>
        </section>
        <MarqueeDemo/>
      </main>

      <footer className="bg-primary text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 InclusivIT. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
