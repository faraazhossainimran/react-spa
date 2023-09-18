import Widget from "../Widget/Widget"

const Widgets = ({addPlayers}) => {
    return (
        <div className="w-1/5 container">
         <h1 className="text-2xl font-bold">Players to be added</h1>
         <p className="text-xl ">Your Budget Remaining: 7000 USD</p>
         <ul className="flex flex-col">
            {addPlayers.map(addPlayer => <Widget addPlayer={addPlayer}></Widget>)}

         </ul>
         <p className="text-xl ">Total Cost: 500 USD</p>
        </div>
    )
}

export default Widgets