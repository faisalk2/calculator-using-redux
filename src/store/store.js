import { legacy_createStore } from "redux";
import {reducer}  from './reducer';
const initial={
    count:0,
}
export const store=legacy_createStore(reducer,initial);