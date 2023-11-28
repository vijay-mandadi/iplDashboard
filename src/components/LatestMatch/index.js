// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const newList = {
    date: latestMatchDetails.date,
    umpires: latestMatchDetails.umpires,
    result: latestMatchDetails.result,
    manOfTheMatch: latestMatchDetails.man_of_the_match,
    venue: latestMatchDetails.venue,
    competingTeam: latestMatchDetails.competing_team,
    competingTeamLogo: latestMatchDetails.competing_team_logo,
    firstInnings: latestMatchDetails.first_innings,
    secondInnings: latestMatchDetails.second_innings,
    matchStatus: latestMatchDetails.match_status,
  }
  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = newList

  return (
    <div className="latestmatch-container">
      <div className="first-cont">
        <p className="team">{competingTeam}</p>
        <p className="date">{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <img src={competingTeamLogo} alt={`latest match ${competingTeam}`} />
      <div className="last-cont">
        <p className="date">First Innings</p>
        <p>{firstInnings}</p>
        <p className="date">Second Innings</p>
        <p>{secondInnings}</p>
        <p className="date">Man Of The Match</p>
        <p>{manOfTheMatch}</p>
        <p className="date">Umpires</p>
        <p>{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
