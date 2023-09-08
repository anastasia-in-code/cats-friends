const Card = ({id, name, email}) => {
  return (
    <div className="bg-light-pink dib br3 pa3 ma3 grow bw2 shadow-5">
      <img alt="cat" src={`https://robohash.org/${id}?set=set4`} />
      <div>
        <h1>{name}</h1>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
