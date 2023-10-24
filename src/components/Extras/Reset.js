function Reset(props) {
  const handleChange = () => {
    props.handleReset();
  };

  return (
    <button onClick={handleChange}>
      Resetear filtros
    </button>
  );
}

export default Reset;
