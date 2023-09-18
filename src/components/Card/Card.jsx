const Card = ({ player }) => {
  const { id,price,image, name, description, role} = player;
  return (
    <div >
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img
          className="w-full h-56"
            src={image}
            alt={`image of Bangladeshi cricketer ${name}`}
          />
          <div className="absolute top-5 right-5">
            <button className="p-4 bg-[#FFD700] rounded-lg">Price: {price} USD</button>
            </div>
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">
            {name}
            <div className="badge badge-secondary p-4 text-xl">{role}</div>
          </h2>
          <p>{description}</p>
          <div className="card-actions">
          <button className="btn btn-active btn-neutral font-bold text-lg my-4 px-8 text-[white]">Buy</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
