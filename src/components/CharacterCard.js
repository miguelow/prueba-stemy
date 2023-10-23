function CharacterCard(props) {
  const {name} = props;
  return (
        <h3 className="CharacterList__list--name">Nombre pokemon: {name}</h3>
  );
}

export default CharacterCard;
