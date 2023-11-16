import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    // data:[],
    search:""
  };

  
export const searchAllContent = createAsyncThunk(
    "searchAllContent/fetch",
    async (payload, thunkAPI) => {
      try {
        // const response = await getAllContent();
        // return response;
      } catch (err) {
        console.log(thunkAPI.rejectWithValue(err.message))
        return thunkAPI.rejectWithValue(err.message);
      }
    }
  );

  const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setSearch:(state,payload)=>{
            state.search = payload.payload
        }
    },
    // extraReducers: (builder) => {
    //   builder
    //     .addCase(searchAllContent.pending, (state, action) => {
    //       state.loading = true;
    //       state.error = null;
    //       state.data = [];
    //     })
    //     .addCase(searchAllContent.fulfilled, (state, action) => {
    //       state.loading = false;
    //       state.error = null;
    //       state.data = action.payload;
    //     })
    //     .addCase(searchAllContent.rejected, (state, action) => {
    //       state.loading = false;
    //       state.error = action.payload;
    //       state.data = [];
    //     });
    // },
  });

  export const {setSearch} = searchSlice.actions
  
  export default searchSlice.reducer;
  