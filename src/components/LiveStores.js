import React from 'react'
import { Table } from 'antd';
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
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'UID',
      dataIndex: 'uid',
      key: 'uid',
    },
    {
      title: 'Domain',
      dataIndex: 'domain',
      key: 'domain',
    },
    {
        title: 'StartDate',
      dataIndex: 'startdate',
      key: 'startdate',
    }
  ];
 
  
  export default function LiveStores() {
    return (
      <div>
        <h1>Livestores</h1>
        <Table dataSource={dataSource} columns={columns} />
        </div>
    )
  }
  