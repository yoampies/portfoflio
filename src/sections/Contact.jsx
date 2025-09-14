import React from 'react'; 
import Navbar from '../components/Navbar'; // Import the Navbar component from the components directory.
import InputField from '../components/InputField'; // Import the InputField component for form inputs.
import { useForm } from '@formspree/react'; // Import the useForm hook from Formspree for form handling.
import { Link } from 'react-router-dom'; // Import the Link component for client-side navigation.

function Contact() {
  // Initialize Formspree form hook. It requires Formspree backend URL (or environment variable).
  // `state` contains submission status and errors, `handleSubmit` is the function to call on form submission.
  const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_KEY);

  // If the form submission was successful (`state.succeeded` is true),
  // render a success message and a link back to the homepage.
  if (state.succeeded) {
    return (
      <div className="text-center"> {/* Container for centering content. */}
        <Navbar /> {/* Render the Navbar component. */}
        <div className="py-16"> {/* Padding for vertical spacing. */}
          <h2 className="text-3xl font-bold text-[var(--text-primary)]">
            Thank you for your message! {/* Success message heading. */}
          </h2>
          <p className="mt-4 text-lg text-[#4d4d4d]"> {/* Margin top and text styling for the message. */}
            I'll get back to you as soon as possible. {/* Confirmation message. */}
          </p>
          <Link
            to="/" // Link to the home page.
            className="bubbly-button inline-flex items-center gap-3 bg-[#C1E1C1] 
                       text-gray-800 text-xl font-bold py-4 px-10 rounded-full hover:scale-105 
                       transition-transform duration-300 shadow-lg hover:shadow-xl mt-10"
          >    
            Back to Home {/* Text for the link. */}
          </Link>
        </div>
      </div>
    );
  }

  // If the form has not succeeded, render the contact form itself.
  return (
    <div className="relative flex size-full min-h-screen flex-col overflow-x-hidden bg-[var(--background-color)] text-[var(--text-primary)]">
      {/* Main container for the contact page.
          `relative` for positioning children, `flex` for layout, `size-full` for occupying full space,
          `min-h-screen` ensures it takes at least the full viewport height,
          `flex-col` stacks children vertically, `overflow-x-hidden` prevents horizontal scrollbars,
          `bg-[var(--background-color)]` sets the background color,
          `text-[var(--text-primary)]` sets the default text color. */}
      <div className="flex h-full grow flex-col"> {/* Flex container to ensure content grows. */}
        <Navbar /> {/* Render the Navbar component. */}
        <main className="flex-1 px-4 py-16 sm:px-6 lg:px-8 bg-grid-teal-100/[0.2]">
          {/* Main content area. `flex-1` allows it to grow,
              `px` and `py` for padding, `bg-grid-teal-100/[0.2]` applies a subtle teal grid background. */}
          <div className="mx-auto max-w-xl"> {/* Centered content with a max width. */}
            <div className="text-center"> {/* Text alignment for the heading and description. */}
              <h1 className="text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl">Get in Touch</h1>
              {/* Main heading for the contact section. */}
              <p className="mt-4 text-lg leading-relaxed text-[#4d4d4d]">
                {/* Introductory paragraph explaining the purpose of the contact form. */}
                I'm always open to discussing new projects, creative ideas, or just a friendly chat. Feel free to reach out, and I'll get back to you as soon as possible.
              </p>
            </div>

            {/* Form element for collecting user contact information. */}
            <form className="mt-12 space-y-6" onSubmit={handleSubmit}>
              {/* `onSubmit` is linked to the Formspree `handleSubmit` function.
                  `mt-12` adds margin top, `space-y-6` adds vertical spacing between form elements. */}

              {/* Input field for the user's name. */}
              <InputField name='name' type='text' placeholder='Your Name' state={state} />
              {/* Input field for the user's email. */}
              <InputField name='email' type='email' placeholder='Your Email' state={state} />
              {/* Input field for the subject of the message. */}
              <InputField name='subject' type='text' placeholder='Subject' state={state} />
              {/* Text area input field for the message content. `isTextArea` prop is set to true. */}
              <InputField name='message' placeholder='Your Message' state={state} isTextArea />

              {/* Container for the submit button, aligned to the right. */}
              <div className="flex justify-end pt-4">
                <button
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[#13ecc8] px-8 py-3 text-lg font-bold text-[var(--text-primary)] shadow-lg transition-all duration-300 hover:scale-105"
                  // `group` and `peer-focus` related classes are for styling interactions.
                  // `rounded-full` makes the button circular.
                  // `bg-[#13ecc8]` sets the primary accent color.
                  // `text-[var(--text-primary)]` sets text color.
                  // `shadow-lg` adds a shadow.
                  // `transition-all duration-300` for smooth animations.
                  // `hover:scale-105` makes the button slightly larger on hover.
                  type="submit" // This button triggers form submission.
                  disabled={state.submitting} // Disables the button when the form is submitting to prevent multiple submissions.
                >
                  {/* Pseudo-element for hover effect, creating a gradient overlay. */}
                  <span className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                  {/* The actual button text. `relative` is used to ensure it's above the overlay. */}
                  <span className="relative">Send Message</span>
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Contact; // Export the Contact component as the default export.