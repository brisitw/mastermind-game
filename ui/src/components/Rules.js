import React from "react";

const rules = (props) => {
    return(
        <div className="col-sm-8 text-left">
            <h1>Mastermind</h1>
            <p>The play of the game goes as follows:</p>
            <ul>
                <li>
                    One player, known as the Codemaker, secretly places the 4 Code Pegs in the 4
                    holes, which are then covered by flipping over the plastic shield to conceal them from
                    the opponent's sight. The Codemaker can use any combination of the 6 colors he
                    chooses. He can also use 2 or more Code Pegs of the same color if he wishes.
                </li>
                <li>
                    The other player, known as the Codebreaker, sits opposite the Codemaker and
                    places Code Pegs in the 1st row of the Code Peg holes (closest to him). The
                    Codebreaker is attempting to duplicate the exact colors and positions of the secret
                    code.
                </li>
                <li>
                    The Codemaker responds by placing 4 Key Pegs in the Key Peg holes
                    on the 1st row as follows:
                    (b) A red Key Peg to indicate a Code Peg of the right color and in the right position
                    (without indication of which Code Peg it corresponds to).
                    (b) A white Key Peg to indicate a Code Peg of the right color but in the wrong position.
                    (b) A black Key Peg to indicate a wrong color that does not appear in the secret code.
                </li>
            </ul>
        </div>
    )
}

export default rules;