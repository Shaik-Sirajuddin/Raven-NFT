import { render } from "@testing-library/react"
import { Component } from "react"
import Banner from "../banner"
import Footer from "../Footer"
import RegisterHeader from "../RegisterHeader"

export default class Faq extends Component {

    render() {
        return <div>
            <Banner />
            <RegisterHeader />
            <div className="section  " >
                <div className="hero-center-wrap relative-on-lg">
                    <div className="container">

                        <div className="row">
                            <div style={{ "display": "flex" }} className='faqq'>
                                <img src="./images/how to mint.png" style={{
                                    "width": "80%",
                                    "marginLeft": "auto",
                                    "marginRight": "auto",
                                    "marginTop": "7vh"
                                }} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    }
}