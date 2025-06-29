export const levels = [
  "Primary 1",
  "Primary 2",
  "Primary 3",
  "Primary 4",
  "Primary 5",
  "Primary 6"
]

export const classColumns = [
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