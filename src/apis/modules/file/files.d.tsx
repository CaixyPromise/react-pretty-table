interface RowData {
    id : number
    name : string
    file_type : string
    file_size : number
    add_time: string
    target_url : string
}

interface PublicFile {
    total: number,
    pageNo: number,
    size: number,
    row_data : RowData[]
}

export type{
    PublicFile
}