const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ChangeThemeIdType): typeof initState => { // fix any
    switch (action.type) {
        // дописать
        case "SET_THEME_ID": {
            return {
                ...state, themeId: action.id
            }
        }

        default:
            return state
    }
}

type ChangeThemeIdType = ReturnType<typeof changeThemeIdAC>
export const changeThemeIdAC = (id: number) => {
    return {type: 'SET_THEME_ID', id} as const
}// fix any
