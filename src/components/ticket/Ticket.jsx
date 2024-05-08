/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/prop-types */
import classes from './ticket.module.scss'
import formatTime from '../../utilities/time'
import wordEndings from '../../utilities/formatWords'

const FlightSegment = ({ segment }) => {
  return (
    <span>
      <span className={classes.opaci}>
        {segment.origin} - {segment.destination}
      </span>
      <span>{formatTime(segment)}</span>
    </span>
  )
}

const FlightInfo = ({ segment }) => {
  return (
    <span>
      <span className={classes.opaci}>В пути</span>
      <time>
        {Math.floor(segment.duration / 60)}ч {segment.duration % 60}мин
      </time>
    </span>
  )
}

const FlightStops = ({ stops }) => {
  return (
    <span>
      <span className={classes.opaci}>
        {stops.length === 0 ? '' : stops.length} {wordEndings(stops.length)}
      </span>
      <span>{stops.join(', ')}</span>
    </span>
  )
}

function Ticket({ ticket }) {
  const { price, carrier, segments } = ticket
  const logoUrl = `//pics.avs.io/99/36/${carrier}.png`
  const maxId = () => Math.random().toString(36).slice(2)
  return (
    <li className={classes.ticket}>
      <span className={classes.price}>{price} Р</span>
      <img className={classes.logo} src={logoUrl} alt="logo" />
      <div className={classes.flights}>
        <div className={classes.rows}>
          {segments.map((segment, index) => (
            <div key={maxId()} className={index === 0 ? classes['row-top'] : classes['row-bottom']}>
              <FlightSegment segment={segment} />
              <FlightInfo segment={segment} />
              <FlightStops stops={segment.stops} />
            </div>
          ))}
        </div>
      </div>
    </li>
  )
}

export default Ticket