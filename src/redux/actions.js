export function saveMeeting(meeting) {
    return { type: 'SAVE_MEETING', payload: meeting }
}

export function busySlot(slot, exp) {
    if (exp === 'AddToMyBusySlots')
        return { type: 'ADD-TO-MY-BUSY-SLOTS', payload: slot };
    else if (exp === 'RemoveFromMyBusySlots')
        return { type: 'REMOVE-TO-MY-WATCHED-LIST', payload: slot };
}