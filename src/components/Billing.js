import React from 'react'
import { Table } from 'antd';
import { useState } from 'react';
import { useEffect } from 'react';

const dataSource = [
    {
      key: '1',
      
      
    },
    {
      key: '2',
      
      
    },
  ];
const columns = [
    {
      title: 'Bill#',
      dataIndex: 'bill',
      key: 'bill',
    },
    {
      title: 'Store',
      dataIndex: 'store',
      key: 'store',
    },
    {
        title: 'Due Date',
      dataIndex: 'duedate',
      key: 'duedate',
    },
    {
        title: 'Total',
        dataIndex: 'total',
        key: 'total',
      },
      {
        title: 'Pending',
        dataIndex: 'pending',
        key: 'pending',
      },
      {
        title: 'Published',
        dataIndex: 'published',
        key: 'published',
      },
      {
          title: 'Received',
        dataIndex: 'Received',
        key: 'Received',
      },
      {
        title: 'Notifications',
        dataIndex: 'notifications',
        key: 'notifications',
      },
      {
          title: 'Actions',
        dataIndex: 'actions',
        key: 'actions',
      }
  ];
export const Billing = () => {


 

    return(

        <div>
        
        <h1>Billing</h1>
        <Table dataSource={dataSource} columns={columns} />
     
              
            </div>
        
    )
}
