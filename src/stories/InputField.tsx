import "./input-field.css";

export interface InputFieldProps {
  defaultValue?: string;
  onValueChange?: (x: string) => void;
}

function InputField({ defaultValue, onValueChange }: InputFieldProps) {
  return (
    <input
      type="text"
      defaultValue={defaultValue}
      onChange={(evt) => {
        if (onValueChange) onValueChange(evt.currentTarget.value);
      }}
    />
  );
}

export default InputField;
