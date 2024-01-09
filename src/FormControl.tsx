import React from "react";

interface FormControlProps {
  type: string;
  value: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  options?: Array<{ value: string, text: string }>;
}

const FormControl: React.FC<FormControlProps> = ({
  type,
  name,
  value,
  onChange,
  options,
}) => {
  switch (type) {
    case "textbox":
      return (
        <div className="form-control">
          <input data-testId={name} type="text" placeholder={`Input ${name}`} name={name} value={value} onChange={onChange} />
        </div>
      );
    case "dropdown":
      return (
        <div className="form-control">
          <select name={name} value={value} onChange={onChange}>
            <option value=''>{`Select ${name}`}</option>
            {options?.map(({ value, text }, index) => (
              <option key={`${value}_${index}`} value={value}>{text}</option>
            ))}
          </select>
        </div>
      );
    default:
      return null;
  }
};

export default FormControl;
