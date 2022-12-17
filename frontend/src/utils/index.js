export const methods = [
  { method: "GET", url: "http://localhost:3001/api/employees", name: "Find All" },
  { method: "GET", url: "http://localhost:3001/api/employees/:id", name: "Find by ID" },
  { method: "POST", url: "http://localhost:3001/api/employees", name: "Insertion" },
  { method: "PUT", url: "http://localhost:3001/api/employees/:id", name: "Update All (Using PUT)" },
  { method: "PATCH", url: "http://localhost:3001/api/employees/:id", name: "Update by value (Using PATCH)" },
  { method: "DELETE", url: "http://localhost:3001/api/employees/:id", name: "Delete" },
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