import React, {Component} from "react";
import Row from "./Row";

export default class RowPanel extends Component {
    render() {
        let rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        return(
               rows.map( rowId =>  <Row key={rowId}
                                        attempt={this.props.rows[rowId -1].attempt}
                                        feedback = {this.props.rows[rowId -1].feedback}
                                        dataKey={rowId}
               />)
        )
    }
}
