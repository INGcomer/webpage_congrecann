// React
import React from "react";
// Components
// import Footer from "./footer";
// import Navbar from "./NavBar/NavBar";
import ResponsiveAppBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";

export default function BaseLayout(props) {
    const { children, handleOpen } = props
    return (
        <React.Fragment>
            {/* <Navbar handleOpen={handleOpen}/> */}
            <ResponsiveAppBar/>
            { children }
            <Footer/>
        </React.Fragment>
    )
}