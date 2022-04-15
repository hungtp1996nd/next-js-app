import React, { useState, useEffect } from 'react'

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [dashboardInfo, setDashboardInfo] = useState(null)

  useEffect(() => {
    const fetchDashboardData = async () => {
      const response = await fetch('http://localhost:4000/dashboard')
      const data = await response.json()
      setDashboardInfo(data)
      setIsLoading(false)
    }
    fetchDashboardData()
  }, [])

  if(isLoading) return <h2>Loading...</h2>

  return (
    <div>
      <h2>Dashboard page</h2>
      <h2>Post: {dashboardInfo?.post}</h2>
      <h2>Likes: {dashboardInfo?.likes}</h2>
      <h2>Followers: {dashboardInfo?.followers}</h2>
      <h2>Following: {dashboardInfo?.following}</h2>
    </div>
  )

}

export default Dashboard
