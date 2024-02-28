import React, { useState } from 'react'

function BookingForm (props) {
    const [details, setDetails] = useState({
        date: "",
        time: "",
        guests: "",
        occasion: "",
    });

    const handleChange =(e) => {
        const {name, value}= e.target;
        setDetails((prev) =>{
            return{...prev, [name]: value}
        props.SubmitForm(e);
        props.dispatch(e);
        })
    };
    



    return(
    <header>
        <section>
            <form>
                <fieldset>
                    <div>
                        <label htmlFor='date'>Choose Date</label>
                        <input id='date' value={details.date} onChange={handleChange}
                        type='date' name="date"/>
                    </div>
                    
                    {/* available time */}
                    <div>
                        <label htmlFor='time'>Select Time</label>
                        <select id='time' min={1100} max={2200} value={details.time} onChange={handleChange}
                        type='time' name="time">
                            <option value="">Select a Time</option>
                            {
                                props.avaiableTimes.avaiableTimes.map(avaiableTimes => 
                                    {return <option key={avaiableTimes}>{avaiableTimes}</option>})
                            }
                        </select>
                    </div>


                    <div>
                        <label htmlFor='guests'>Number of Guests</label>
                        <input id='date' min={1} max={10} value={details.guests} onChange={handleChange}
                        type='number' name="guests"/>
                    </div>
                    <div>
                        <label htmlFor='occasion'>Choose Occasion</label>
                        <select id='date' value={details.occasion} onChange={handleChange}
                        type='number' name="occasion">
                            <option>BirthDay</option>
                            <option>Anniversary</option>
                        </select>
                    </div>
                    <div>
                        <input aria-label='On Click' type='submit' value={"Make your reservation"}/>
                    </div>
                </fieldset>
            </form>
        </section>
    </header>
    )
}


export default BookingForm;