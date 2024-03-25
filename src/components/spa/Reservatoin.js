import {useState} from 'react';
import {Link} from 'react-router-dom';

function Reservation() {
const [firstName, setFirstName] =useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] =useState("");
const [numGuest, setNumGuest] =useState("");
const [date, setDate] = useState("");
const [time, setTime] = useState("17:00");
const [occasion, setOccasion] =useState("");
const [comments, setComments] =useState("");

const timeArray =
 ["17:00", "18:00", "19:00", "20:00", "21:00"]



// const [time, setTime] =useState(
//     props.availableTimes.map((times) => <option>{times}</option>)
// );

// function handleDateChange() {
//     setDate(e.target.value);
    

    // var stringfy = e.target.value;
    // const date =new Date(stringfy);

    // props.updateTimes(date);

    // setTime(props.availableTimes.map((times) => <option>{times}</option>));
// }


    return(
        <form className="reservation-form">
            <div>
                <label htmlFor="firstName">First Name</label> <br/>
                <input
                type="text"
                id="firstName"
                placeholder='FirstName'
                required
                minLength={2}
                maxLength={50}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                ></input>
            </div>
            <div>
                <label htmlFor="lastName">Last Name</label> <br/>
                <input
                type="text"
                id="lastName"
                placeholder='LastName'
                required
                minLength={2}
                maxLength={50}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                ></input>
            </div>
            <div>
                <label htmlFor="email">Email</label> <br/>
                <input
                type="email"
                id="email"
                placeholder='Email'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                ></input>
            </div>
            <div>
                <label htmlFor="guests">Number of Guests</label> <br/>
                <input
                type="number"
                id="guests"
                placeholder='Number of Guests'
                required
                min={1}
                max={10}
                onChange={(e) => setNumGuest(e.target.value)}
                ></input>
            </div>
            <p>Please Contact us for 10 or more guests</p> <br/>
            <div>
                <label htmlFor="date">Select Date</label> <br/>
                <input
                type="date"
                id="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                ></input>
            </div>
            <div>
                <label htmlFor="time">Select Times</label> <br/>
                <select value={time} onChange={(e) => setTime(e.target.value)}>
                <option value={timeArray[0]}>{timeArray[0]}</option>
                <option value={timeArray[1]}>{timeArray[1]}</option>
                <option value={timeArray[2]}>{timeArray[2]}</option>
                <option value={timeArray[3]}>{timeArray[3]}</option>
                <option value={timeArray[4]}>{timeArray[4]}</option>
                </select>
            </div>
            <div>
                <label htmlFor="occasion">Select The Occasion</label> <br/>
                <select
                onChange={(e) => setOccasion(e.target.value)}
                >
                    <option>None</option>
                    <option>Birsthday</option>
                    <option>Anniversary</option>
                    <option>Other</option>
                </select>
            </div>
            <div>
                <label htmlFor='comments'>Special requests</label> <br/>
                <textarea
                    id='comments'
                    rows={6}
                    cols={40}
                    placeholder="Please leave special requests for the reservation"
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                ></textarea>
                <br/>
            </div>
        <Link className="action-button" to='/confirmation'>Confirm Reservation</Link>
        <br/>
        </form>
       
    )}

export default Reservation;