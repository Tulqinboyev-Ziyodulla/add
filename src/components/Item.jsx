import React from 'react';
import { DeleteOutlined, EditOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;

const Item = ({ item, setRefreshStudent, refreshStudent, setRefreshTeacher, refreshTeacher }) => {
  
  function handleDeleteUser(user) {
    if (user.job) {
      fetch(`http://localhost:4000/teachers/${user.id}`, { method: "DELETE" })
        .then(res => {
          if (res.ok) {
            setRefreshTeacher(!refreshTeacher);
          }
        })
        .catch(err => console.error('Teacher o\'chirishda xato:', err));
    } else {
      fetch(`http://localhost:4000/students/${user.id}`, { method: "DELETE" })
        .then(res => {
          if (res.ok) {
            setRefreshStudent(!refreshStudent);
          }
        })
        .catch(err => console.error('Student o\'chirishda xato:', err));
    }
  }

  return (
    <Card
      style={{ width: 300 }}
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <DeleteOutlined onClick={() => handleDeleteUser(item)} className="hover:!text-red-500" />
      ]}
    >
      <Meta
        avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
        title={`${item.name} - ${item.surname}`}
        description={item?.study ? item.study : item.job}
      />
    </Card>
  );
};

export default Item;
