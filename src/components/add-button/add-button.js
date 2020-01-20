import React, {Component} from 'react';
import "./add-button.css";

export default class AddTodoListItem extends Component {

    state = {
        label: ''
    };

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.newTextItem(this.state.label);
        this.setState({
            label: ''
        })
    };


    render() {
        return (
            <form className="add-todo-list-item d-flex"
                  onSubmit={this.onSubmit}>
                <input type="text"
                       className="form-control"
                       onChange={this.onLabelChange}
                       placeholder="Choose your next aim"
                       value={this.state.label}
                />
                <button
                    className="btn btn-outline-secondary btn_add_goal"
                >
                    Add goal
                </button>
            </form>
        )
    }
}






