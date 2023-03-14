import { Link } from "react-router-dom";

export const CharacterListItem = ({ name, url }) => {

  const id = url.split("/")[5];

  return (
    <li>
      <Link to={`/characters/${id}`}>{name}</Link>
    </li>
  );
};
