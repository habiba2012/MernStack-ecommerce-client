import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faHome, faComments, faUser, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { UserContext } from '../../../App';

const Sidebar = () => {
    const [isAdmin, setIsAdmin] = useState(false)
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('https://automobile-servicing.herokuapp.com/isAdmin', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },

            body: JSON.stringify({ email: loggedInUser.email }),
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data))
    }, [])
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/myBooking" className="text-white">
                        <FontAwesomeIcon icon={faCalendar} /> <span>My Booking</span>
                    </Link>
                </li>
                {isAdmin && <div>
                    <li>
                        <Link to="/bookingList/:id" className="text-white">
                            <FontAwesomeIcon icon={faFileAlt} /> <span>Booking List</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/makeAdmin" className="text-wite">
                            <FontAwesomeIcon icon={faUser} /> <span>Make Admin</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/manageServices" className="text-white">
                            <FontAwesomeIcon icon={faGripHorizontal} /> <span>Manage Services</span>
                        </Link>
                    </li>
                </div>}

                <li>
                    <Link to="/dashboard" className="text-white">
                        <FontAwesomeIcon icon={faCalendar} /> <span>Booking</span>
                    </Link>
                </li>


                <li>
                    <Link to="/addReview" className="text-white">
                        <FontAwesomeIcon icon={faComments} /> <span>Add Review</span>
                    </Link>
                </li>
                <div>
                    <li>
                        <Link to="/addServices" className="text-white">
                            <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                        </Link>
                    </li>

                </div>

                <li>
                    <Link to="/setting" className="text-white" >
                        <FontAwesomeIcon icon={faCog} /> <span>Setting</span>
                    </Link>
                </li>
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;