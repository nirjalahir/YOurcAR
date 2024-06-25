import React, { useState, useEffect } from 'react';
import backImage from '../hero1.jpg';
import '../componants/FilterInfo.css';

export default function FilterInfo() {
    const [userData, setUserData] = useState([]); 
    const [loggedInEmail, setLoggedInEmail] = useState(''); 
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/userspecs');
                if (!response.ok) {
                    throw new Error(`Error fetching data: ${response.status}`);
                }
                const data = await response.json();
                setUserData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

 

    useEffect(() => {
        const storedEmail = localStorage.getItem('loggedInEmail'); 
        setLoggedInEmail(storedEmail || ''); 
    }, []);

    const filteredUserData = userData.find((user) => user.email === loggedInEmail);

    return (
        <>
            <div className='brandsIamge'>
                <img src={backImage} alt="" />
            </div>
            <div className="uuu">
                <h2>User Data</h2>
                {filteredUserData && (
                    <ul>
                        <li key={filteredUserData.id}>
                            Email: {filteredUserData.email} <br />
                            Budget: {filteredUserData.budget || 'None'} <br />
                            CarType: {filteredUserData.cartype || 'None'} <br />
                            Accomodation: {filteredUserData.Accomodation || 'None'} <br />
                            driveoption: {filteredUserData.driveoption || 'None'} <br />
                            transmission: {filteredUserData.transmission || 'None'} <br />
                            carBrands: {filteredUserData.carBrands ? filteredUserData.carBrands.join(', ') : 'None'} <br />
                        </li>
                    </ul>
                )}
            </div>

            <div className="yyy" my-3>
                <h2>Happy Hunting!!</h2>
            </div>
        </>
    );
}
