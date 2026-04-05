import { useEffect, useState } from 'react'
import { supabase } from './../supabase'
import { Router, useNavigate, useParams } from 'react-router-dom'
import './../App.css'

type Park = {
    id: number
    aisle_number: string
    status: string
    floor_number: number
}

// for dashboard, for now
function Dashboard() {
    const Navigate = useNavigate()

    const [park, setPark] = useState<Park[]>([])

    const { name } = useParams()

    const logout = () => {
        Navigate('/')
    }

    async function getParks() {
        const { data, error } = await supabase.from('parks').select()
        if (error) {
            console.log('Error fetching parks:', error)
        } else {
            setPark(data || [])
        }
    }

    useEffect(() => {
        getParks()
    }, [])

    return (
        <>
            <div className="dashboardHeader">
                <div className='title'>
                    <h2>ParkEasy</h2>
                </div>
                <div>
                    <button className='btn-logout' onClick={() => { logout() }}>Logout</button>
                </div>
            </div>

            <div className="dashboardContent">
                <div className='parkingInformation'>
                    <h3>Parking Information</h3>
                    <div className="information">
                        <div className='card'>
                            <div>
                                <p>Total Slots</p>
                                <h2>{park.length}</h2>
                            </div>
                            <div className='icon'><i className="fa-solid fa-car"></i></div>
                        </div>
                        <div className='card'>
                            <div>
                                <p>Available Slots</p>
                                <h2>{park.filter(p => p.status === 'vacant').length}</h2>
                            </div>
                            <div className='icon'><i className="fa-regular fa-circle-check"></i></div>
                        </div>
                        <div className='card'>
                            <div>
                                <p>Occupied Slots</p>
                                <h2>{park.filter(p => p.status === 'occupied').length}</h2>
                            </div>
                            <div className='icon'><i className="fa-regular fa-circle-xmark"></i></div>
                        </div>
                    </div>
                </div>
                <div className='mainContent'></div>
            </div>
        </>
    )
}

export default Dashboard
