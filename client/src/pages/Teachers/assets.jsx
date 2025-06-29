export const teacherColumns = [
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
    title: "Work Contact Number",
    dataIndex: "contact_number",
  },
]

export const subjects = [
  { value: "English Language" },
  { value: "Mother Tongue Language" },
  { value: "Mathematics" },
  { value: "Science" },
  { value: "Art" },
  { value: "Music" },
  { value: "Physical Education" },
  { value: "Social Studies" },
  { value: "Character and Citizenship Education" },
]