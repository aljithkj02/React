import { Component } from "react";
import { MyContext } from "../context";

class ClassComp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="flex items-center justify-center py-20 flex-col">
                <h1 className="text-2xl">Class Component accessing the UserContext</h1>
                <h1 className="text-3xl font-bold text-orange-700">User: &nbsp;
                    <MyContext.Consumer>
                        {
                            (item) => item.user
                        }
                    </MyContext.Consumer>
                </h1>
            </div>
        )
    }
}

export default ClassComp;