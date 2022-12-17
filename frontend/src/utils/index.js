export const methods = [
  { method: "GET", url: "/api/employees", name: "Find All", desc: "Find all employees details." },
  { method: "GET", url: "/api/employees/:id", name: "Find by ID", desc: "Find employee details by their user ID." },
  { method: "POST", url: "/api/employees", name: "Create", desc: "Create new employee by providing details." },
  { method: "PUT", url: "/api/employees/:id", name: "Update all value", desc: "Update complete employee details." },
  { method: "PATCH", url: "/api/employees/:id", name: "Update by value", desc: "Update specific employee details." },
  { method: "DELETE", url: "/api/employees/:id", name: "Delete", desc: "Delete employee by their ID." },
]
export const getColor = method => {
  switch (method) {
    case "GET":
      return "blue"
    case "POST":
      return "green"
    case "PATCH":
      return "violet"
    case "PUT":
      return "orange"
    case "DELETE":
      return "red"

    default:
      return ""
  }
}
