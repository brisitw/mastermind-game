import React, {Component} from "react";
import Peg from "./Peg";

export default class CodeBreakerAttempt extends Component {
    render() {
        console.log(this.props.attempt);
        let pegs = [1, 2, 3, 4];
        return (
        <div className="row border border-dark">
            <div className="col-12">
                {pegs.map( pegNr => {
                    return <Peg key={pegNr} className = {this.props.attempt[pegNr-1].color}/>
                })}
            </div>
        </div>
        );
    }
}