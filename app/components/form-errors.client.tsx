interface FormErrorsProps {
  errors?: string[];
}

const FormErrors = ({ errors }: FormErrorsProps) => {
  if (!errors?.length) return null;

  return (
    <div>
      {errors.map((err) => {
        return (
          <p className="text-sm text-tiny text-red-400" key={err}>
            {err}
          </p>
        );
      })}
    </div>
  );
};

export default FormErrors;
