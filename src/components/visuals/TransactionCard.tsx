import React from 'react'

export default function TransactionCard(props) {
    const {name,date,info} = props
  return (
    <div className="bg-gray-dark d-flex d-md-block d-xl-flex flex-row py-3 px-4 px-md-3 px-xl-4 rounded mt-3">
    <div className="text-md-center text-xl-left">
    <h6 className="mb-1">{name}</h6>
    <p className="text-muted mb-0">{date}</p>
    </div>
    <div className="align-self-center flex-grow text-right text-md-center text-xl-right py-md-2 py-xl-0">
    <h6 className="font-weight-bold mb-0">{info}</h6>
    </div>
    </div>
  )
}
