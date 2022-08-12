import { Component } from "react"
import './banner.css'
export default class Banner extends Component {
    render() {
        return <>
            <div id="banner"  className="glow">
                <div id="banner-content">
                    Now Minting!
                </div>
            </div>
        </>
    }
}