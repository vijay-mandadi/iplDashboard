import Loader from 'react-loader-spinner'
import {Component} from 'react'

import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamList: [], isLoading: true}

  componentDidMount() {
    this.getteamList()
  }

  getteamList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedList = data.teams.map(each => ({
      name: each.name,
      id: each.id,
      teamImageUrl: each.team_image_url,
    }))

    this.setState({teamList: updatedList, isLoading: false})
  }

  render() {
    const {teamList, isLoading} = this.state
    return (
      <div className="home-container">
        <div className="heading-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logo"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>
        {isLoading ? (
          <div>
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <ul className="list-container">
            {teamList.map(each => (
              <TeamCard key={each.id} card={each} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Home
