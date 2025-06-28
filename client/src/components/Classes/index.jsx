import React from "react"
import { Table } from "antd"

const ClassList = ({ classes }) => {
  const columns = [
    {
      title: "#",
      dataIndex: "id",
      render: (_, __, index) => index + 1,
    },
    {
      title: "Class Level",
      dataIndex: "level",
    },
    {
      title: "Class Name",
      dataIndex: "name",
    },
    {
      title: "Form Teacher",
      dataIndex: ["formTeacher", "name"],
    },
  ]

  return (
    <Table
      columns={columns}
      dataSource={classes || []}
      rowKey={(record) => record.formTeacher.name}
      pagination={false}
    />
  )
}

export default ClassList