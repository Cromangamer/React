import TicketNum from "./ticketNum"

export default function Ticket({array}){
    return(
        <div>
            {array.map((num, index)=>(
                <TicketNum num={num} key={index} />
            ))}
        </div>
    )
}