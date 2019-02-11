import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "../store";

import { Title } from "./../../../components/Title/index";

console.log(store.getState());

store.dispatch({ type: "INCREMENT" });
console.log(store.getState());

store.dispatch({ type: "INCREMENT" });
const Root = document.getElementById("address-form");

render(
    <Provider store={store}>
        <Title />
    </Provider>,
    Root
);
