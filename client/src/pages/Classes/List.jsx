import { Table } from "antd"

import { classColumns } from "./assets"

const ClassList = ({ classes }) => {
  return (
    <Table
      columns={classColumns}
      dataSource={classes || []}
      rowKey={(record) => record.formTeacher.name}
      pagination={false}
    />
  )
}

export default ClassList