import {useState} from 'react';
import {Link} from 'react-router-dom';

function Reservation() {
const [firstName, setFirstName] =useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] =useState("");
const [numGuest, setNumGuest] =useState("");
const [date, setDate] =useState("");
const [occasion, setOccasion] =useState("");
const [comments, setComments] =useState("");

const [time, setTime] =useState(
    props.availableTimes.map((times) => <option>{times}</option>)
);

function handleDateChange() {
    setDate(e.target.value);
    

    var stringfy = e.target.value;
    const date =new Date(stringfy);

    props.updateTimes(date);

    setTime(props.availableTimes.map((times) => <option>{times}</option>));
}


    return(
        <>
        </>
    )
}

export default Reservation;