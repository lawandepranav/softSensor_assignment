import {legacy_createStore as createStore}  from "redux"

import cart from "./redux/reducer"

export const store = createStore(cart)