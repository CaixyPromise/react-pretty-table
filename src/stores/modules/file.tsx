import { createSlice } from "@reduxjs/toolkit";
// import { request } from "@/utils/requests";
import { getPublicFileInfo } from "@/apis/modules/file/files";
import type { AppDispatch, RootState } from '../index.d';
import { stat } from "fs";
import { PublicFile } from "@/apis/modules/file/files.d";
import { AxiosResponse } from "axios";

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
        },
        set_pageSize(state, action)
        {
            state.pageSize = action.payload;
        },
        set_currentPage(state, action)
        {
            state.currentPage = action.payload;
        },
        set_totalItems(state, action)
        {
            state.totalItems = action.payload;
        },
        set_LoadingState(state, action)
        {
            state.isLoading = action.payload;
        }
    }
})

const { set_currentPage, set_pageSize,
        set_totalItems,  set_data, set_LoadingState } = table.actions;

const fetchDataList = () => async (dispatch: AppDispatch, getState:RootState) => 
{
    try {
        const fileInfo:AxiosResponse<PublicFile, any> = await getPublicFileInfo();
        console.log("fileInfo.data:", fileInfo.data);
        dispatch(set_data(fileInfo.data.row_data));
        dispatch(set_totalItems(fileInfo.data.total));
        dispatch(set_currentPage(fileInfo.data.pageNo));
        dispatch(set_pageSize(fileInfo.data.size));
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
    fetchDataList,
    set_LoadingState
}