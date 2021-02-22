import React from "react"

const TeamCell: React.FC<{ dayString: string }> = ({ dayString }) => {
  return <td className={`calendar-team__cell ${dayString === "Sa" || dayString === "Su" ? "cell-gray" : ""}`}></td>
}

export default TeamCell
