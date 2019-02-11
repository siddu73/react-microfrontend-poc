import { INCREMENT, DECREMENT } from "../actions";

function addressForm(state = { count: 0 }, action) {
    const count = state.count
    switch (action.type) {
        case INCREMENT:
            return { count: count + 1 };
        case DECREMENT:
            return { count: count - 1 };
        default:
            return state;
    }
}

export default addressForm;