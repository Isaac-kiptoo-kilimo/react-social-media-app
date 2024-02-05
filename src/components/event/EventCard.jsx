import React from 'react'
import './EventCard.scss'
import EventHeader from './EventHeader'
import NavIcon from '../NavIcon'
import EventCalendar from './EventCalendar'

const EventCard = () => {
  return (
    <div className="event-container">
      <div className="events-top">
        <EventHeader />
      </div>
      <div className="event-sub-titles">
        <div className="events-title-top">
          <h4 className="popular-events">Popular</h4>
          <h4 >For You</h4>
          <h4 >Nearest</h4>
          <h4 >Favorite</h4>
          <h4 >Registered</h4>
        </div>
        <EventCalendar/>
        {/* <div className="btn-events">
          <NavIcon url={Calendar}/>
            <h5>November</h5>
        </div> */}
      </div>
      <div className="events-images">
       
      </div>
    </div>
  )
}

export default EventCard
