import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {card} = props
  const {id, name, teamImageUrl} = card

  return (
    <li className="listitem">
      <Link to={`/team-matches/${id}`}>
        <img src={teamImageUrl} alt={name} className="team-logo" />
        <p className="team-name">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
