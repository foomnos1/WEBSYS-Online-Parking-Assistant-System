import { useEffect, useState } from 'react'
import { supabase } from './../supabase'
import { useNavigate, useParams } from 'react-router-dom'
import './../App.css'

type Park = {
    id: number
    aisle_number: string
    status: string
    floor_number: number
    username: string | null
}

function Dashboard() {
    const Navigate = useNavigate()
    const [park, setPark] = useState<Park[]>([])
<<<<<<< HEAD
    const { name, password } = useParams()

    // IF THE LOGGED IN NAME IS 'admin', THIS IS TRUE. OTHERWISE, FALSE.
    const isAdmin = name === 'admin' || name === 'Admin' || name === 'ADMIN' && password === 'admin123' // Simple password check for admin access;
=======
    const { name } = useParams()
>>>>>>> 075f609c5742ad2b693f01fef708e44a162f109f

    // IF THE LOGGED IN NAME IS 'admin', THIS IS TRUE. OTHERWISE, FALSE.
    const isAdmin = name === 'admin';

    const logout = () => {
        Navigate('/')
    }

    async function getParks() {
        const { data, error } = await supabase.from('parks').select().order('id', { ascending: true }) // Ensure parks are ordered by ID
        if (error) {
            console.log('Error fetching parks:', error)
        } else {
            setPark(data || [])
        }
    }

    async function reserveHandler(id: number, username: string | null) {
        // Prevent user from booking multiple slots
        const alreadyHasReservation = park.some(p => p.username === username);

        if (alreadyHasReservation && !isAdmin) {
            alert('You already have a reserved slot!');
            return;
        }

        const { error } = await supabase
            .from('parks')
            .update({ status: 'occupied', username: username })
            .eq('id', id)

        if (error) {
            console.log('Error reserving slot:', error)
        } else {
            getParks()
        }
    }

    async function resetHandler(id: number) {
        const { error } = await supabase
            .from('parks')
            .update({ 
                status: 'vacant', 
                username: null 
            })
            .eq('id', id)
            
        if (error) {
            console.log('Error resetting slot:', error)
        } else {
            getParks() 
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
                <div className='userInfo'>
                    <span className='welcomeMessage'>
                        {isAdmin ? '👑 Admin Mode' : `Welcome, ${name}`}
                    </span>
                    <button className='btn-logout' onClick={logout}>Logout</button>
                </div>
            </div>

            <div className="dashboardContent">
                {/* ... (Parking Information Stats Section Remains Exactly the Same) ... */}
                
                <div className='parkingSlots dashboard-main'>
                    <h3>Parking Slots</h3>
                    
                    <div className="slots-grid">
                        {park.map((slot) => {
                            const isAvailable = slot.status === 'vacant';
                            const usernameText = slot.username ? (`Reserved by: ${slot.username}`) : 'No Reservation';
                            
                            return (
                                <div key={slot.id} className={`slot-card ${isAvailable ? 'available' : 'occupied'}`}>
                                    <div className="slot-icon-circle"><i className="fas fa-car-side"></i></div>
                                    <div className="slot-id">{slot.aisle_number}</div>
                                    <div className="slot-floor">Floor {slot.floor_number}</div>
                                    
                                    <div className="status-pill">
                                        {isAvailable ? (
                                            <><i className="fas fa-check-circle"></i> Available</>
                                        ) : (
                                            <><i className="far fa-clock"></i> Occupied</>
                                        )}
                                    </div>

                                    <div className="slot-user">{usernameText}</div>
                                    
                                    {isAvailable ? (
                                        <button 
                                            className="action-btn btn-reserve" 
                                            onClick={() => reserveHandler(slot.id, name || null)}
                                        >
                                            Reserve
                                        </button>
                                    ) : (
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
                                            <button className="action-btn btn-disabled" disabled>Occupied</button>
                                            
                                            {/* ADMIN EXCLUSIVE BUTTON */}
                                            {isAdmin && (
                                                <button 
                                                    className="action-btn btn-reset" 
                                                    onClick={() => resetHandler(slot.id)}
                                                    style={{ backgroundColor: '#e74c3c', color: 'white' }}
                                                >
                                                    Admin: Release Slot
                                                </button>
                                            )}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard