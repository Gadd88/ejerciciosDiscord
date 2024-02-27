import LinkItem from "../link/Link";

const ListaLinks = () => {
  return (
    <ul className="links">
      <LinkItem link='/'>Inicio</LinkItem>
      <LinkItem link='/nosotros'>Nosotros </LinkItem>
      <LinkItem link='/contacto'>Contacto </LinkItem>
    </ul>
  );
};

export default ListaLinks;
