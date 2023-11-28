// Write your code here
import './index.css'

const MatchCard = props => {
  const {card} = props
  const newList = {
    date: card.date,
    umpires: card.umpires,
    result: card.result,
    manOfTheMatch: card.man_of_the_match,
    venue: card.venue,
    competingTeam: card.competing_team,
    competingTeamLogo: card.competing_team_logo,
    firstInnings: card.first_innings,
    secondInnings: card.second_innings,
    matchStatus: card.match_status,
  }

  const {competingTeam, result, competingTeamLogo, matchStatus} = newList

  const isWon = matchStatus === 'Won' ? 'won' : 'lost'

  return (
    <li className="matchcard-item">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="team-logo"
      />
      <p className="team">{competingTeam}</p>
      <p>{result}</p>
      <p className={isWon}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
