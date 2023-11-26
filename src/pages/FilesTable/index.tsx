import React, { useEffect, useState } from 'react';
import { ColumnData } from './index.d';
import Loadings from "@/components/Loading";
import { PrettyTable } from '@/components/Table';
import { TableStruct, RowData, searchColumnsType, 
  GenericEventHandler, CustomCallbackFunction } from '@/components/Table/index.d';
import { useDispatch, useSelector } from 'react-redux'
import {fetchDataList} from "@/stores/modules/file"
import { set_LoadingState } from "@/stores/modules/file"
// 用户数据示例

const UserList: React.FC = () => 
{
  const [isLoading, setIsLoading] = useState(true); // 添加一个状态来追踪加载状态
  const dataList = useSelector((state: any) => state.table.data)
  const dispatch = useDispatch();

  // 数据加载函数
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      dispatch<any>(set_LoadingState(true));
      console.log("get data");
      try {
        await dispatch<any>(fetchDataList());
      } 
      catch (error) 
      {
        console.error('Error fetching data:', error);
      }
      console.log("get data end");
      setIsLoading(false);
      dispatch<any>(set_LoadingState(false));

    };

    loadData();
  }, [dispatch]);

    const List = useSelector((state: any) => state.table.data);
    console.log("List: ", List)

    
    const transformedList = List.map((item: { [x: string]: any; }) => {
      let row: any[] = [];
      Object.keys(item).forEach(key => {
          let column:any = { key, data: item[key] };

          if (key === "targetUrl") {
              column.actions = [{ type: "button", content: "下载", onClick: () => console.log(item[key]) }];
              column.data = "下载"; // 如果需要保留原始数据，可以注释掉这行
          }
          
          row.push(column);
      });
      return row;
    });

    console.log("transformedList: ", transformedList);

  
    const columns: ColumnData[] = [
        { label: '文件ID', key: 'fileId' },
        { label: '文件名', key: 'fileName' },
        { label: '文件类型', key: 'fileType' },
        { label: '文件大小', key: 'fileSize' },
        { label: '上传日期', key: 'createTime' },
        { label: '下载链接', key: 'targetUrl' },

    ];

    // 发送消息的函数
    const sendMessage: GenericEventHandler<HTMLElement>
       = (event: CustomCallbackFunction): void  => 
    {
        console.log(event.currentTarget)
        const username = event.currentTarget.dataset.username;
        console.log(`Sending message to ${username}`);
        // 实际的发送消息逻辑
    };

    const rowData: RowData<any>[] = [
        [
          { key: 'id', data: '001' },
          { key: 'username', data: 'Lisa', actions: [
            { type: 'link', content: 'https://www.baidu.com', },
          ] },
          { key: 'location', data: 'Korea' },
          { key: 'lastContactDate', data: '2023-5-14' },
          { key: 'action', data: 'Send Message', 
            actions: [
              { type: 'button', content: 'Send Message', onClick: sendMessage },
              { type: 'button', content: 'Send Message', onClick: sendMessage },
            ] },
        ],
        [
          { key: 'id', data: '002' },
          { key: 'username', data: 'Lisa', actions: [
            { type: 'link', content: 'Send Message', },
          ] },
          { key: 'location', data: 'Korea' },
          { key: 'lastContactDate', data: '2023-5-14' },
          { key: 'action', data: 'Send Message', 
            actions: [
              { type: 'button', content: 'Send Message', onClick: sendMessage },
              { type: 'button', content: 'Send Message', onClick: sendMessage },
            ] },
        ],[
          { key: 'id', data: '003' },
          { key: 'username', data: 'Lisa', actions: [
            { type: 'link', content: 'Send Message', },
          ] },
          { key: 'location', data: 'Korea' },
          { key: 'lastContactDate', data: '2023-5-14' },
          { key: 'action', data: 'Send Message', 
            actions: [
              { type: 'button', content: 'Send Message', onClick: sendMessage },
              { type: 'button', content: 'Send Message', onClick: sendMessage },
            ] },
        ],[
          { key: 'id', data: '003' },
          { key: 'username', data: 'Lisa', actions: [
            { type: 'link', content: 'Send Message', },
          ] },
          { key: 'location', data: 'Korea' },
          { key: 'lastContactDate', data: '2023-5-14' },
          { key: 'action', data: 'Send Message', 
            actions: [
              { type: 'button', content: 'Send Message', onClick: sendMessage },
              { type: 'button', content: 'Send Message', onClick: sendMessage },
            ] },
        ],
        [
          { key: 'id', data: '004' },
          { key: 'username', data: 'Lisa', actions: [
            { type: 'link', content: 'Send Message', },
          ] },
          { key: 'location', data: 'Korea' },
          { key: 'lastContactDate', data: '2023-5-14' },
          { key: 'action', data: 'Send Message', 
            actions: [
              { type: 'button', content: 'Send Message', onClick: sendMessage },
              { type: 'button', content: 'Send Message', onClick: sendMessage },
            ] },
        ],
        [
          { key: 'id', data: '005' },
          { key: 'username', data: 'Lisa', actions: [
            { type: 'link', content: 'Send Message', },
          ] },
          { key: 'location', data: 'Korea' },
          { key: 'lastContactDate', data: '2023-5-14' },
          { key: 'action', data: 'Send Message', 
            actions: [
              { type: 'button', content: 'Send Message', onClick: sendMessage },
              { type: 'button', content: 'Send Message', onClick: sendMessage },
            ] },
        ],
        [
          { key: 'id', data: '006' },
          { key: 'username', data: 'Lisa', actions: [
            { type: 'link', content: 'Send Message', },
          ] },
          { key: 'location', data: 'Korea' },
          { key: 'lastContactDate', data: '2023-5-14' },
          { key: 'action', data: 'Send Message', 
            actions: [
              { type: 'button', content: 'Send Message', onClick: sendMessage },
              { type: 'button', content: 'Send Message', onClick: sendMessage },
            ] },
        ],
        [
          { key: 'id', data: '007' },
          { key: 'username', data: 'Lisa', actions: [
            { type: 'link', content: 'Send Message', },
          ] },
          { key: 'location', data: 'Korea' },
          { key: 'lastContactDate', data: '2023-5-14' },
          { key: 'action', data: 'Send Message', 
            actions: [
              { type: 'button', content: 'Send Message', onClick: sendMessage },
              { type: 'button', content: 'Send Message', onClick: sendMessage },
            ] },
        ],
        [
          { key: 'id', data: '008' },
          { key: 'username', data: 'Lisa', actions: [
            { type: 'link', content: 'Send Message', },
          ] },
          { key: 'location', data: 'Korea' },
          { key: 'lastContactDate', data: '2023-5-14' },
          { key: 'action', data: 'Send Message', 
            actions: [
              { type: 'button', content: 'Send Message', onClick: sendMessage },
              { type: 'button', content: 'Send Message', onClick: sendMessage },
            ] },
        ],
        [
          { key: 'id', data: '009' },
          { key: 'username', data: 'Lisa', actions: [
            { type: 'link', content: 'Send Message', },
          ] },
          { key: 'location', data: 'Korea' },
          { key: 'lastContactDate', data: '2023-5-14' },
          { key: 'action', data: 'Send Message', 
            actions: [
              { type: 'button', content: 'Send Message', onClick: sendMessage },
              { type: 'button', content: 'Send Message', onClick: sendMessage },
            ] },
        ],
        [
          { key: 'id', data: '010' },
          { key: 'username', data: 'Lisa', actions: [
            { type: 'link', content: 'Send Message', },
          ] },
          { key: 'location', data: 'Korea' },
          { key: 'lastContactDate', data: '2023-5-14' },
          { key: 'action', data: 'Send Message', 
            actions: [
              { type: 'button', content: 'Send Message', onClick: sendMessage },
              { type: 'button', content: 'Send Message', onClick: sendMessage },
            ] },
        ],

      ];
      const userTable = new TableStruct(transformedList, columns, "User Table");


      
    const searchColumns: searchColumnsType = [
        'username','location'
    ]      


    return (
      <>
      {/* 数据加载时显示 Loading 组件 */}
      {isLoading && <Loadings />}

      {/* 数据加载完成后显示表格内容 */}
      {!isLoading && (
        <PrettyTable table_data={userTable}  description="caixypromise" searchColumns={searchColumns}/>
      )}
      </>
        
    );
};

export {
    UserList
};