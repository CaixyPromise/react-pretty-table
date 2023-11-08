import React from 'react';
import { ColumnData } from './index.d';

// import SearchIcon from "@/assets/search.png"
// import "./index.scss"
// import styles from './index.module.scss';

import { PrettyTable } from '@/components/Table';
import { TableStruct, RowData, searchColumnsType, 
  GenericEventHandler, CustomCallbackFunction } from '@/components/Table/index.d';

// 用户数据示例




const UserList: React.FC = () => 
{
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
          { key: 'id', data: '001' },
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
          { key: 'id', data: '001' },
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
          { key: 'id', data: '001' },
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
          { key: 'id', data: '001' },
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
        <PrettyTable table_data={userTable}  description="caixypromise" searchColumns={searchColumns}/>
    );
};

export {
    UserList
};