import React, { useEffect, useState } from "react"
import './App.css'

const AsyncAwait = () => {
  const [data, setData] = useState([] || null === 'No Data')

  const fetchData = async () => {
    const response = await fetch("https://api.spacexdata.com/v4/launches/")
    const data = await response.json()
    setData(data)
  }

  useEffect(() => {
    fetchData()
  }, [setData])

  return (
    <div className="App">
      {data.length > 0 && (
        <div className="container">
          <form>
            <input type="search" class="searchbox" name="search" id="search" placeholder="Enter keywords..." />
          </form>
          <div className="retrievedata">
            {data.map(item => (
              <div className="itemByitem" key={item.id}>
                <div>
                  <img src={item.links.patch.small} loading="lazy" alt='spacexlaunch' />
                </div>
                <div className="info">
                  <h4>Flight Number: {item.flight_number} {item.name} ({item.date_local})</h4>
                  <small>Details: {item.details == null ? 'No Data' : item.details}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default AsyncAwait