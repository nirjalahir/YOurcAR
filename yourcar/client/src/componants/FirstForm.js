import React, { useState } from 'react'
import heroImage from '../hero1.jpg';
import '../componants/FirstForm.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function FirstForm() {
    const [userData, setUserdata] = useState({
        email: '',
        password: '',
        budget: '',
        cartype: '',
        Accomodation: '',
        driveoption: '',
        transmission: '',
        carBrands: [], 
    });
    let name, value;
    const handlechange = (e) => {
        name = e.target.name;
        value = e.target.value;


        if (name === 'carBrands') {
            const updatedCarBrands = userData.carBrands.includes(value)
                ? userData.carBrands.filter((brand) => brand !== value)
                : [...userData.carBrands, value];

            setUserdata({ ...userData, [name]: updatedCarBrands });
        } else {
            setUserdata({ ...userData, [name]: value });
        }
    };


    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();

        const { email, password, budget, cartype, Accomodation, driveoption, transmission, carBrands } = userData;

        console.log('Submitting:', userData);
        try {
            const response = await fetch('/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password, budget, cartype, Accomodation, driveoption, transmission, carBrands }),
            });

            const data = await response.json();

            if (response.ok) {
                console.log('Response data:', data);
                navigate('/filtered');
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    alert('Invalid email,please fill proper mail id!!');
                    return;
                }

                if (password.length < 8) {
                    alert('Password must be strong enough!');
                    return;
                }
            } else {
                console.error('Error response:', data);
                alert(data.message); 
            }
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }

    };
    return (
        <>
            <div className='pachhalnophoto'>
                <img src={heroImage} alt="" />
            </div>

            <div className="formFill">
                <form method="POST">
                    <div className="pelu">

                        <div id='mail' className="mx-1">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input value={userData.name} onChange={handlechange} name='email' type="email" placeholder="Enter your Mail" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                        </div>
                        <div id='password' className="mb-3 mx-1">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input value={userData.password} onChange={handlechange} name='password' type="password" placeholder="Enter a strong password" className="form-control" id="exampleInputPassword1" required />
                        </div>
                    </div>
                    <div className="pelu">
                        <select value={userData.budget} onChange={handlechange} name='budget' id='budget' className="form-select my-3 mx-2" aria-label="budget">
                            <option defaultValue>Budget</option>
                            <option value="1-5 Lakh">1-5 Lakh</option>
                            <option value="6-10 Lakh">6-10 Lakh</option>
                            <option value="11-15 Lakh">11-15 Lakh</option>
                            <option value="16-20 Lakh">16-20 Lakh</option>
                            <option value="21 Lakh & above">21 Lakh & above</option>
                        </select>
                        <select value={userData.cartype} onChange={handlechange} name='cartype' className="form-select my-3 mx-2" aria-label="Car Type" >
                            <option defaultValue>Car Type</option>
                            <option value="Sedans">Sedans</option>
                            <option value="Suvs">Suvs</option>
                            <option value="Hatchbacks">Hatchbacks</option>
                            <option value="Full-size Suv">Full-size Suv</option>
                        </select>
                    </div>
                    <div className="pelu">
                        <select value={userData.Accomodation} onChange={handlechange} name='Accomodation' className="form-select my-3 mx-2" aria-label="Accomodation" >
                            <option defaultValue>Accomodation</option>
                            <option value="2">2</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                        </select>
                        <select value={userData.driveoption} onChange={handlechange} name='driveoption' className="form-select my-3 mx-2" aria-label="Drive Option" >
                            <option defaultValue>Drive Option</option>
                            <option value="4x4">4 X 4</option>
                            <option value="RWD">RWD</option>
                            <option value="FWD">FWD</option>
                            <option value="AWD">AWD</option>
                        </select>
                    </div>
                    <div className="pelu">
                        <select value={userData.transmission} onChange={handlechange} name='transmission' className="form-select my-3" aria-label="Transmission Type" >
                            <option defaultValue>Transmission Type</option>
                            <option value="Manual">Manual</option>
                            <option value="Auto">Auto</option>
                            <option value="AMT">AMT</option>
                            <option value="DCT">DCT</option>
                        </select>
                    </div>
                    <div className='formbase'>
                        <label className="form-label">Choose your favorite car brands!</label>
                        <div className="pelukhanu">
                            <div className="checkbox-wrapper-47 my-3">
                                <input type="checkbox" value="Tata" checked={userData.carBrands.includes('Tata')} onChange={handlechange} name="carBrands" id="Tata" />
                                <label htmlFor="Tata">Tata</label>
                            </div>
                            <div className="checkbox-wrapper-47 my-3">
                                <input type="checkbox" value="Hyundai" checked={userData.carBrands.includes('Hyundai')} onChange={handlechange} name="carBrands" id="Hyundai" />
                                <label htmlFor="Hyundai">Hyundai</label>
                            </div>
                            <div className="checkbox-wrapper-47 my-3">
                                <input type="checkbox" value="Suzuki" checked={userData.carBrands.includes('Suzuki')} onChange={handlechange} name="carBrands" id="Suzuki" />
                                <label htmlFor="Suzuki">Suzuki</label>
                            </div>
                        </div>
                        <div className="bijukhanu">
                            <div className="checkbox-wrapper-47 my-3">
                                <input type="checkbox" value="Toyota" checked={userData.carBrands.includes('Toyota')} onChange={handlechange} name="carBrands" id="Toyota" />
                                <label htmlFor="Toyota">Toyota</label>
                            </div>
                            <div className="checkbox-wrapper-47 my-3">
                                <input type="checkbox" value="Mahindra" checked={userData.carBrands.includes('Mahindra')} onChange={handlechange} name="carBrands" id="Mahindra" />
                                <label htmlFor="Mahindra">Mahindra</label>
                            </div>
                            <div className="checkbox-wrapper-47 my-3">
                                <input type="checkbox" value="Honda" checked={userData.carBrands.includes('Honda')} onChange={handlechange} name="carBrands" id="Honda" />
                                <label htmlFor="Honda">Honda</label>
                            </div>
                        </div>
                        <div className="trijukhanu">
                            <div className="checkbox-wrapper-47 my-3">
                                <input type="checkbox" value="volkswagen" checked={userData.carBrands.includes('volkswagen')} onChange={handlechange} name="carBrands" id="volkswagen" />
                                <label htmlFor="volkswagen">volkswagen</label>
                            </div>
                            <div className="checkbox-wrapper-47 my-3">
                                <input type="checkbox" value="Skoda" checked={userData.carBrands.includes('Skoda')} onChange={handlechange} name="carBrands" id="Skoda" />
                                <label htmlFor="Skoda">Skoda</label>
                            </div>
                        </div>
                    </div>
                    <p>NOTE: You can login anytime in future with your email & password</p>
                    <button type='submit' onClick={handleSubmit} className='button-33-1 mx-2'> Submit</button>
                    <button type='reset' onClick={() => setUserdata({ email: '', password: '', budget: '', cartype: '', Accomodation: '', driveoption: '', transmission: '', carBrands: [] })} className='button-33-2 mx-1'>Reset</button>
                    <Link to='/readinfo' className='button-33-3 '> skip</Link>
                </form>
            </div>
            <div className="note1">
                <p>In order to get best cars which suits your requirements please fill all the details mentioned here. </p>
                <p>You can always skip this process if you want to, THANK YOU  </p>
            </div>

        </>
    )
}
