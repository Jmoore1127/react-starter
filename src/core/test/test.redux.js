import {createLogic} from 'redux-logic'
import {createAction, handleActions} from "redux-actions";

const Test = createAction("TEST_ACTION");
const Response = createAction("RESPONSE_ACTION")

const defaultState = {};
export const reducer = handleActions({
    [Test]: (state, action) => state
},defaultState);

export const logic = createLogic({
    type: Test,
    process({getState, action}, dispatch, done) {
        dispatch(Response());
        done();
    }
});