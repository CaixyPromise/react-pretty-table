import { createSlice } from "@reduxjs/toolkit";
// import { request } from "@/utils/requests";
import { getPublicFileInfo } from "@/apis/modules/file/files";
import type { AppDispatch, RootState } from '../index.d';

const table = createSlice(
{
    name: "table",

    initialState:
    {
        data: [],
        currentPage: 1, // 当前页码
        pageSize: 10, // 每页显示的数据量
        totalItems: 0, // 数据总量
        isLoading: false,
        tableError: null,
    },

    reducers:
    {
        set_data(state, action) 
        {
            state.data = action.payload;
        }
    }
})

const { set_data: set_FileList } = table.actions;

const fetchDataList = () => async (dispatch: AppDispatch, getState:RootState) => 
{
    try {
        const fileInfo = await getPublicFileInfo();
        dispatch(set_FileList(fileInfo.data));
        console.log("request successful!!");
        return true;
    }
    catch (error) {
        console.log('something wrong when fetch data from server');
        return error;
    }
}

const tableReducer = table.reducer;

export default tableReducer;

export {
    fetchDataList
}