import React from 'react'
import Navbar from '../components/Navbar'
import InputField from '../components/InputField'
import { useForm } from '@formspree/react'
import { Link } from 'react-router-dom'

function Contact() {
  const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_KEY)

  if (state.succeeded) {
    return (
      <div className="text-center">
        <Navbar />
        <div className="py-16">
          <h2 className="text-3xl font-bold text-[var(--text-primary)]">
            Thank you for your message!
          </h2>
          <p className="mt-4 text-lg text-[#4d4d4d]">
            I'll get back to you as soon as possible.
          </p>
          <Link
              to="/"
              className="bubbly-button inline-flex items-center gap-3 bg-[#C1E1C1] 
                        text-gray-800 text-xl font-bold py-4 px-10 rounded-full hover:scale-105 
                        transition-transform duration-300 shadow-lg hover:shadow-xl mt-10"
          >    
              Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex size-full min-h-screen flex-col overflow-x-hidden bg-[var(--background-color)] text-[var(--text-primary)]">
      <div className="flex h-full grow flex-col">
        <Navbar />
        <main className="flex-1 px-4 py-16 sm:px-6 lg:px-8 bg-grid-teal-100/[0.2]">
          <div className="mx-auto max-w-xl">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl">Get in Touch</h1>
              <p className="mt-4 text-lg leading-relaxed text-[#4d4d4d]">
                I'm always open to discussing new projects, creative ideas, or just a friendly chat. Feel free to reach out, and I'll get back to you as soon as possible.
              </p>
          </div>

            <form className="mt-12 space-y-6" onSubmit={handleSubmit}>
              <InputField name='name' type='text' placeholder='Your Name' state={state} />
              <InputField name='email' type='email' placeholder='Your Email' state={state} />
              <InputField name='subject' type='text' placeholder='Subject' state={state} />
              <InputField name='message' placeholder='Your Message' state={state} isTextArea />
              
              <div className="flex justify-end pt-4">
                <button
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[#13ecc8] px-8 py-3 text-lg font-bold text-[var(--text-primary)] shadow-lg transition-all duration-300 hover:scale-105"
                  type="submit"
                  disabled={state.submitting}
                >
                  <span className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                  <span className="relative">Send Message</span>
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Contact