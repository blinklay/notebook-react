export default function reducer(state, action) {
  switch (action.type) {
    case "SET_TITLE":
      return {
        ...state,
        title: action.value,
      };
    case "SET_TAG":
      return {
        ...state,
        tag: action.value,
      };
    case "SET_DATE":
      return {
        ...state,
        date: action.value,
      };
    case "SET_TEXT":
      return {
        ...state,
        text: action.value,
      };
    case "VALIDATE_FORM":
      const errors = {
        title: false,
        date: false,
        text: false,
      };

      if (state.title === "") errors.title = true;
      if (state.date === "") errors.date = true;
      if (state.text === "") errors.text = true;

      return {
        ...state,
        errors,
      };
    case "RESET_ERROR":
      return {
        ...state,
        errors: {
          title: false,
          date: false,
          text: false,
        },
      };
    case "CLEAR_FORM":
      return {
        ...state,
        title: "",
        date: "",
        tag: "",
        text: "",
      };
    default:
      return state;
  }
}