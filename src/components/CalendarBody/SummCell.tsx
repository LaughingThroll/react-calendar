import React from "react"

interface ISummCell {
  count: number
}

const SummCell = ({ count }: ISummCell) => {
  return <td className="calendar-body__cell cell-gray">{count}</td>
}

export default SummCell
