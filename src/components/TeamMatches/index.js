import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {matchList: [], isLoading: true}

  componentDidMount() {
    this.getMatchList()
  }

  getMatchList = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updated = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    this.setState({matchList: updated, isLoading: false})
  }

  render() {
    const {matchList, isLoading} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = matchList
    return (
      <div className="container">
        {isLoading ? (
          <div>
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="teammatch-container">
            <img src={teamBannerUrl} alt="team banner" className="banner" />
            <p>Latest Matches</p>
            <LatestMatch
              key={latestMatchDetails.id}
              latestMatchDetails={latestMatchDetails}
            />
            <ul className="matches-container">
              {recentMatches.map(each => (
                <MatchCard key={each.id} card={each} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
