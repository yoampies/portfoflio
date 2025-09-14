import React from 'react'; 
import { ValidationError } from '@formspree/react'; // A component from Formspree to display validation errors

// Define the InputField functional component
function InputField({ name, type, placeholder, state, isTextArea, ...rest }) {
  // Define CSS classes for the input element
  const inputClass = "peer block w-full rounded-xl border-0 bg-gray-50 py-4 pl-4 pr-10 text-lg text-[var(--text-primary)] placeholder-gray-400 ring-1 ring-inset ring-transparent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#13ecc8] transition-all duration-300";
  
  // Determine whether to use a 'textarea' or 'input' element based on the isTextArea prop
  const InputElement = isTextArea ? 'textarea' : 'input';

  return (
    // Main container for the input field, with rounded corners and a subtle shadow effect
    <div className="relative rounded-xl shadow-sm">
      {/*
        Render the appropriate input element (input or textarea).
        - 'className' applies the defined styling.
        - 'name', 'placeholder', 'type' are passed as props.
        - 'rows' is set for textarea for height.
        - '...'rest passes any other props (like value, onChange, etc.) down to the input element.
      */}
      <InputElement
        className={inputClass}
        name={name}
        placeholder={placeholder}
        type={type}
        rows={isTextArea ? "5" : undefined}
        {...rest} // Spread remaining props (e.g., value, onChange, required)
      />
      
      {/*
        ValidationError component from '@formspree/react'.
        - 'prefix' capitalizes the first letter of the 'name' prop for the error message.
        - 'field' is the name of the input field to match with errors.
        - 'errors' is an object containing validation errors, presumably from a Formspree submission state.
      */}
      <ValidationError 
        prefix={name.charAt(0).toUpperCase() + name.slice(1)}
        field={name}
        errors={state.errors}
      />
      
      {/*
        This div creates a visual indicator that appears on focus.
        - 'pointer-events-none' allows clicks to pass through to elements behind it.
        - 'absolute inset-y-0 right-0 flex items-center pr-3' positions it to the right of the input.
        - 'transition-all duration-300 peer-focus:scale-110 peer-focus:-translate-x-1 peer-focus:text-[#13ecc8]' applies animations and styles when the input field (peer) is focused.
      */}
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 transition-all duration-300 peer-focus:scale-110 peer-focus:-translate-x-1 peer-focus:text-[#13ecc8]">
        {/* A small glowing dot used as a focus indicator.
          - 'h-1 w-1 rounded-full bg-current' makes it a small, circular dot.
          - 'style={{ boxShadow: '0 0 10px 3px #13ecc8' }}' creates a glowing effect using a box-shadow.
        */}
        <div
          className="h-1 w-1 rounded-full bg-current"
          style={{ boxShadow: '0 0 10px 3px #13ecc8' }}
        ></div>
      </div>
    </div>
  )
}

// Export the component to be used in other parts of the application
export default InputField;