/* eslint-disable react/display-name */
import React, { InputHTMLAttributes } from 'react';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
  isRequired?: boolean;
}

type Props = InputFieldProps & React.InputHTMLAttributes<HTMLInputElement>;

const InputField = React.forwardRef<HTMLInputElement, Props>((props: Props, ref): JSX.Element => {
  const { label, placeholder, isRequired, ...prop } = props;
  return (
    <div className="grid grid-cols-1 gap-[4px]">
      <p className="text-black mb-2">{label}</p>
      <input
        className="w-full px-3 py-2 border rounded-md border-gray focus:outline-none text-black"
        placeholder={placeholder}
        {...prop}
        ref={ref}
      />
    </div>
  );
});

export default InputField;
