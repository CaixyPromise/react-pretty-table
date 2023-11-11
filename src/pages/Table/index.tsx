import React, { useEffect, useState } from 'react';
import { ColumnData } from './index.d';
import Loadings from "@/components/Loading";
import { PrettyTable } from '@/components/Table';
import { TableStruct, RowData, searchColumnsType, 
  GenericEventHandler, CustomCallbackFunction } from '@/components/Table/index.d';

// 用户数据示例

const UserList: React.FC = () => 
{
  const [isLoading, setIsLoading] = useState(true); // 添加一个状态来追踪加载状态

  // 假设数据加载函数（此处需要根据您的实际情况进行调整）
  const loadData = () => {
    setIsLoading(true); // 开始加载数据时，设置为 true
    // 模拟数据加载
    setTimeout(() => {
      // ... 这里是数据加载逻辑
      setIsLoading(false); // 数据加载完成，设置为 false
    }, 2000);
  };

  useEffect(() => {
    loadData(); // 在组件挂载时加载数据
  }, []);
    const columns: ColumnData[] = [
        { label: 'ID', key: 'id' },
        { label: 'Username', key: 'username' },
        { label: 'Location', key: 'location' },
        { label: 'Last Contact Date', key: 'lastContactDate' },
        { label: 'Action', key: 'action' },
    ];

    
    // 发送消息的函数
    const sendMessage:GenericEventHandler<HTMLElement>
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
      const userTable = new TableStruct(rowData, columns, "User Table");


      
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