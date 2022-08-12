import { Component } from "react"

export default class TeamMem extends Component {
    constructor(props) {
        super(props)

        this.mem = this.props.member

    }
    render() {
        return <div class="col-xl-4 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4" style={{ "height" : "100%"}} ><img src={this.mem.image} alt=""  width="100" height="100" class=" team-img rounded-circle mb-3 img-thumbnail shadow-sm" />
                <h5 class="mb-0">{this.mem.name}</h5><span class="small text-uppercase text-muted">{this.mem.position}</span>
                <ul class="social mb-0 list-inline mt-3">
                    {
                        this.mem.twitter ? (
                            <li class="list-inline-item"><a href={this.mem.twitter} target="_blank" class="social-link"><i class="fa fa-twitter"></i></a></li>

                        ) : (<div></div>)
                    }
                    {
                        this.mem.insta ? (<li class="list-inline-item"><a href={this.mem.insta} target="_blank" class="social-link"><i class="fa fa-instagram"></i></a></li>) : (<div></div>)
                    }

                </ul>
            </div>
        </div>
    }
}