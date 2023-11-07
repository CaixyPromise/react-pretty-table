import { Reducer, createSlice } from "@reduxjs/toolkit";
// import { request } from "@/utils/requests";
import { getPublicFileInfo } from "@/apis/modules/file/files";

const publicFile = createSlice(
{
    name : "publicFile",

    initialState: 
    {
        files: [],
        publicFileLoading: false,
        publicFileError: null,
    },

    reducers: 
    {
        set_FileList(state, action)
        {
            state.files = action.payload;
        }
    }
})

const {set_FileList} = publicFile.actions;

const fetchFileList = () => 
{
    return async (dispatch: any) => 
    {
        try 
        {
            dispatch(set_FileList(await getPublicFileInfo()));
        }
        catch (error) 
        {
            console.log('something wrong when fetch file info from server');
            return Promise.reject(error);
        }
    }   
}

const publicReducer : Reducer<{
    files: never[];
    publicFileLoading: boolean;
    publicFileError: null;
}> = publicFile.reducer;

export default publicReducer;

export {
    fetchFileList
}