import { Component } from "react";
import { Carousel } from 'react-responsive-carousel';


export default class Image extends Component {
    constructor() {
        super()
    }
    render() {
        return <div>
            
            <Carousel
            className=''
            autoPlay={false}
            centerMode={false}
            infiniteLoop={false}
            interval={2000}
            swipeable={false}
            showThumbs={false}
            showStatus={false}
            showArrows={false}>
            <div >
                <img className='rounded' src={this.props.image} />
            </div>
        </Carousel>
        </div>
    }
}