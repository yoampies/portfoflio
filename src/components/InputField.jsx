import React from 'react'
import { ValidationError } from '@formspree/react'

function InputField({ name, type, placeholder, state, isTextArea, ...rest }) {
  const inputClass = "peer block w-full rounded-xl border-0 bg-gray-50 py-4 pl-4 pr-10 text-lg text-[var(--text-primary)] placeholder-gray-400 ring-1 ring-inset ring-transparent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#13ecc8] transition-all duration-300"
  
  const InputElement = isTextArea ? 'textarea' : 'input'

  return (
    <div className="relative rounded-xl shadow-sm">
      <InputElement
        className={inputClass}
        name={name}
        placeholder={placeholder}
        type={type}
        rows={isTextArea ? "5" : undefined}
      />
      <ValidationError 
        prefix={name.charAt(0).toUpperCase() + name.slice(1)}
        field={name}
        errors={state.errors}
      />
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 transition-all duration-300 peer-focus:scale-110 peer-focus:-translate-x-1 peer-focus:text-[#13ecc8]">
        <div
          className="h-1 w-1 rounded-full bg-current"
          style={{ boxShadow: '0 0 10px 3px #13ecc8' }}
        ></div>
      </div>
    </div>
  )
}

export default InputField