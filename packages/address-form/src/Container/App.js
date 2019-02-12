import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { TextBox } from "../../../components/textbox/textbox";

class Counter extends Component {
    render() {
        const { value, onIncreaseClick, onDecreaseClick } = this.props;
        return (
            <div>
                <TextBox />
                <span>{value}</span> <br />
                <button onClick={onIncreaseClick}>Increase</button> <br />
                <button onClick={onDecreaseClick}>Decrease</button>
            </div>
        );
    }
}

Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncreaseClick: PropTypes.func.isRequired,
    onDecreaseClick: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        value: state.addressForm.count
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: () => dispatch({ type: "INCREMENT" }),
        onDecreaseClick: () => dispatch({ type: "DECREMENT" })
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);
