import { useState } from "react"

const initialData = { data: null, message: "", desc: null }
export default function useQueryBuilder({ url, method, id, headers, body }) {
  const [status, setStatus] = useState()
  const [state, setState] = useState(initialData)

  const urlBuilder = (url, id) => {
    if (id) return url.replace(":id", id)
    return url
  }
  const handleFetch = async e => {
    try {
      e.preventDefault()
      setState(initialData)

      const response = await fetch(urlBuilder(url, id), { method, headers, body })
      const json = await response.json()
      setStatus(response.status)
      if ([200, 201].includes(response.status)) {
        setState({ data: json.data, message: json.message, desc: "Success" })
      } else {
        setState({ data: null, message: json.message, desc: "Failed" })
      }
    } catch (error) {
      setState({ data: null, message: "", desc: "Failed" })
      console.error(error)
    }
  }
  return { state, status, handleFetch }
}
