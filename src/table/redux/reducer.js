
const initialState = {
  tableData: [],
};

const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ROW":
      return {
        ...state,
        tableData: [...state.tableData, action.payload],
      };
    case "DELETE_ROW":
      return {
        ...state,
        tableData: state.tableData.filter(row => row.id !== action.payload),
      };
    default:
      return state;
  }
};

export default tableReducer;
