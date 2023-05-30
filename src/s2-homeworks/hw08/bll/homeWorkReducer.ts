import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export type StateType = {
    initialState: Array<UserType>
}
export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => {
    switch (action.type) {
        case 'sort': { // by name
            // sort() создаёт новый массив? или нужно в ручную?...
            const copyState = [...state]
            // const sortState = copyState.sort
            const sortedState = copyState.sort((a, b) => {
                if (action.payload === 'up') {
                    return a.name.localeCompare(b.name)
                } else if (action.payload === 'down') {
                    return b.name.localeCompare(a.name)
                }
                return 0
            })

                //  console.log(sortedState)
            return sortedState
            // need to fix

        }
        case 'check': {
            // filter() создаёт новый массив? или нужно в ручную?...

            const filteredStateByAge = state.filter(t => t.age >= action.payload)
            //console.log(filteredStateByAge)
            return filteredStateByAge
        }
        default:
            return state
    }
}
