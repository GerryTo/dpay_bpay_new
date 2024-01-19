import { Button, Modal, Table } from 'antd';
import React, { useState } from 'react';
import dataAccountTableData from './data/dataaccountTableData';
import ModalAccount from './components/ModalAccount';
import ModalEdit from './components/ModalEdit';

const Account = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleAddNewClick = () => {
    setIsModalVisible(true);
  };
  
  const handleModalOk = () => {
    setIsModalVisible(false);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  let { columns, records, isLoading,  setIsEditModalOpen, isEditModalOpen } = dataAccountTableData();

  return (
    <>
      <Button type="primary" onClick={handleAddNewClick}>
        Add New
      </Button>
      <Table
        dataSource={records}
        columns={columns}
        loading={isLoading}
        scroll={{ x: 10 }}
      />
      <ModalAccount
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
      <ModalEdit
        isEditModalOpen={isEditModalOpen}
        setIsEditModalOpen={setIsEditModalOpen}
      />
      
    </>
  );
};

export default Account;
