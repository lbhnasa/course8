import React from "react";

function Nav() {
    return
    <>
    <Routes> 
    <Route path="/" element={<HomePage />}></Route>
    <Route path="/booking" element={<BookingPage />}></Route>
    </Routes>
    </>
}

export default Nav;