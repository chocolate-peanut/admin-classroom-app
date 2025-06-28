import React from "react"
import { Table } from "antd"

const TeacherList = ({ teachers }) => {
  const columns = [
    {
      title: "#",
      dataIndex: "id",
      render: (_, __, index) => index + 1,
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Subject",
      dataIndex: "subject",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Work Contact",
      dataIndex: "contact_number",
    },
  ]

  return (
    <Table
      columns={columns}
      dataSource={teachers || []}
      rowKey={(record) => record.email}
      pagination={false}
    />
  )
}

export default TeacherList