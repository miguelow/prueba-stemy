function FilterName(props) {
  const handleChange = (ev) => {
    const data = {
      name: ev.currentTarget.name,
      value: ev.currentTarget.value,
    };
    props.handleFilters(data);
  };

  return (
    <>
      <label>Name</label>
      <input
        id="filterName"
        name="name"
        onChange={handleChange}
        value={props.filterName}
      />
    </>
  );
}

export default FilterName;
