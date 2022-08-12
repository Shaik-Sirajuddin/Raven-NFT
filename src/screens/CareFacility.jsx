import { Component } from "react";
import Image from "./Image";

export default class CareFacility extends Component {
    constructor() {
        super()
    }
    render() {
        return <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="title-wrap text-center">
                        <div className="back-title" style={{ "color": "white" }}>Our Vision</div>
                        <h3 className="text-white">Raven Care Facilities.</h3>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Image image="./images/care_1.png" />
                </div>
                <div className="col">
                    <Image image="./images/care_4.png" />
                </div>
            </div>
            <div className="row my-3">
                <div className="col mx-2 my-3">
                    <Image image="./images/care_2.png" />
                </div>
                <div className="col mx-2 my-3" >
                    <Image image="./images/care_3.png" />
                </div>
            </div>
        </div>
    }
}