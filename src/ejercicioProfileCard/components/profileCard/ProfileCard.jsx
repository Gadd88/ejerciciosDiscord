import CardLine from "../cardLine/CardLine";
import Proptypes from "prop-types";

const ProfileCard = ({ user }) => {
  ProfileCard.propTypes = {
    user: Proptypes.object,
  };
  const { name, email, picture, location, registered } = user;

  return (
    <div className="p-4 flex flex-col items-center justify-between w-96 h-[500px] bg-slate-950 rounded-xl">
      <figure className="w-full h-2/5 flex p-3 justify-center items-center">
        <img
          src={picture.large}
          alt="profilePic"
          className="h-full rounded-xl"
        />
      </figure>
      <article className="flex flex-col items-center gap-2 w-3/4">
        <h2 className="font-bold">
          {name.title}. {name.first} {name.last}
        </h2>
        <CardLine> {email}</CardLine>
      </article>
      <article className="flex flex-col gap-3 items-center w-3/4">
        <CardLine>
          Fecha de Ingreso: {new Date(registered.date).toLocaleDateString()}
        </CardLine>
        <CardLine>
          {location.city}, {location.state}
        </CardLine>
        <CardLine>{location.country}</CardLine>
        <p className="font-semibold text-center w-full">
          Front-end developer and avid reader
        </p>
      </article>
    </div>
  );
};

export default ProfileCard;
