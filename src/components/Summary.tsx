import React from 'react'

interface ISummary {
  countUsers: number
  percent: number
  date: Date
}

const Summary: React.FC<ISummary> = ({ date, countUsers, percent }) => {
  return (
    <div className="calendar__summary summary">
      <div className="summary__title">{date.toLocaleDateString('en-US', { month: 'long' })} teams Summary</div>
      <div className="summary__inner">
        <div className="summary__text">On vacation</div>
        <div className="summary__users users">
          <img className="users__svg" src="../assets/images/icons/users.svg" alt="" />
          <span className="users__count">{countUsers}</span>
        </div>
        <div className="summary__weekend-percent weekend-percent">{percent} %</div>
      </div>
    </div>
  )
}

export default Summary
