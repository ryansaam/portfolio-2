const initialState = {
  scrollY: 0,
  parallaxOffset: 0
}

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "SCROLL":
      return {...state, scrollY: action.scrollY}
    case "PARALLAX_OFFSET":
      return {...state, parallaxOffset: action.offset}
    default:
      return state
  }
}