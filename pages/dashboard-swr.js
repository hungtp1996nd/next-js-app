import React from "react";
import useSwr from 'swr'

const DashboardSwr = () => {
  const fetchDashboardData = async () => {
    const response = await fetch('http://localhost:4000/dashboard')
    const data = await response.json()
    return data
  }

  const { data, error } = useSwr('dashboard', fetchDashboardData)

  if (error) return <h2>Error is occur {error}</h2>

  if (!data) return <h2>Loading...</h2>

  return (
    <div>
      <h2>Dashboard page</h2>
      <h2>Post: {data?.post}</h2>
      <h2>Likes: {data?.likes}</h2>
      <h2>Followers: {data?.followers}</h2>
      <h2>Following: {data?.following}</h2>
    </div>
  )
}

export default DashboardSwr
