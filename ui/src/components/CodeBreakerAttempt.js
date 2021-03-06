import React, {Component} from "react";
import Peg from "./Peg";

export default class CodeBreakerAttempt extends Component {
    render() {
        let pegs = [1, 2, 3, 4];
        return (
        <div className="row border border-dark">
            <div className="col-12">
                {pegs.map( pegNr => {
                    return <Peg key={pegNr} dataKey={"pegAttempt_" + pegNr + "_" + this.props.dataKey} className={this.props.attempt[pegNr-1].className}/>
                })}
            </div>
        </div>
        );
    }
}