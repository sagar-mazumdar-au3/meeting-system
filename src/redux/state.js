import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import produce from 'immer';

const initialState = {
    myMeetings: [{
        date: { date: "14 SEP", day: "MON" },
        description: "this is meeting description",
        designation: "Tech Lead",
        name: "Nirav",
        time: "07:30 AM"
    }],
    myBusySlots: [{
        date:
            { date: "14 SEP", day: "MON" },
        time:
            "09:45 AM"
    }]
}

const reducer = produce((draft, action) => {
    switch (action.type) {
        case 'SAVE_MEETING': {

            draft.myMeetings.unshift(action.payload);
            break;
        }
        case 'ADD-TO-MY-BUSY-SLOTS': {
            draft.myBusySlots.unshift(action.payload);
            break;
        }
        case 'REMOVE-TO-MY-WATCHED-LIST': {
            for (var i = 0; i < draft.myBusySlots.length; i++) {
                if (draft.myBusySlots[i].date.date === action.payload.date.date && draft.myBusySlots[i].time === action.payload.time) {
                    draft.myBusySlots.splice(i, 1);
                }
            }
            break;
        }
        default:
            break;
    }
}, initialState);


// Store
const store = createStore(reducer, applyMiddleware(thunk));
export default store;