import React,{Fragment} from 'react'

async function getTickets(){
    const res = await fetch('http://localhost:4000/tickets')
    return res.json()
}

export default async function TicketList() {
  const tickets = await getTickets()
  return (
    <div>
        {tickets.map(ticket=>(
            <div key={ticket.id} className='card my-5'>
                <h3>{ticket.title}</h3>
                <p>{ticket.body.slice(0,200)}...</p>
                <div className={`pill ${ticket.priority}`}>
                {ticket.priority} priority
                </div>
            </div>
        ))}
        {tickets.legnth === 0 && (
            <p className="text-center">There are no open tickets!</p>
        )}
    </div>
  )
}
