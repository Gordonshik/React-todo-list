import React, {Component} from "react";
import "./search-panel.css";

export default class SearchPanel extends Component {





state = {
        term: ''
    };

    onSearchChange = (e) => {
        const term = e.target.value;
        this.setState({ term });
        this.props.onSearchChange(term);
    };



    render() {




        return (

            <div>

                <form
                    onSubmit={this.onSubmit}
                >

                    <input
                        className="form-control mr-sm-2"
                        type="text"
                        placeholder="type to search"
                        onChange={this.onSearchChange}
                        value={this.state.term}
                        >
                    </input>
                </form>



            </div>
        )
    }


}

