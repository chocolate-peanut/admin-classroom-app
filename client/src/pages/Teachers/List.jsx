import { Table } from "antd"

import { teacherColumns } from "./assets"

const TeacherList = ({ teachers }) => {
  return (
    <Table
      columns={teacherColumns}
      dataSource={teachers || []}
      rowKey={(record) => record.id}
      pagination={false}
    />
  )
}

export default TeacherList