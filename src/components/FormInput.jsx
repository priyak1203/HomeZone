function FormInput({ type, label, name, defaultValue }) {
  return (
    <div className="form-row">
      <label className="form-label" htmlFor={name}>
        {label || name}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        defaultValue={defaultValue || ''}
        className="form-input"
      />
    </div>
  );
}

export default FormInput;
