import Card from "../Card/Card"

const Cards = ({players}) => {
    return (
        <div className="container mx-auto w-4/5">
            <div className="grid grid-cols-3 gap-4">
            {players.map((player, idx) => <Card key={idx} player={player}></Card>)}
        </div>
        </div>
    )
}

export default Cards