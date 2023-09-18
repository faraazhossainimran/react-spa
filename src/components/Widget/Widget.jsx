const Widget = ({addPlayer, costRemaining}) => {
    const {name, image, role, price} = addPlayer;
    return (
        <div>
          <div className="flex py-2">
          <img className="w-[40%]" src={image}/>
          <div className="flex flex-col px-4">
          <p className="text-2xl font-bold">{name}</p>
          <p>{role}</p>
          <p className="text-2xl font-bold">{price} USD </p>
          </div>
          </div>
        </div>
    )
}

export default Widget