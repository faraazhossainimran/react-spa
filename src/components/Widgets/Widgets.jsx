import Widget from "../Widget/Widget"

const Widgets = ({addPlayers, price, costRemaining}) => {
    return (
        <div className="w-1/5 container">
         <h1 className="text-2xl font-bold">Players to be added</h1>
         <p className="text-xl ">Your Budget Remaining: {costRemaining} USD</p>
         <p className="text-xl ">Players added: {addPlayers.length}</p>
         <p className="text-xl ">Total Cost: {price} USD</p>
         <ul className="flex flex-col">
            {addPlayers.map(addPlayer => <Widget addPlayer={addPlayer}></Widget>)}

         </ul>
       
        </div>
    )
}

export default Widgets