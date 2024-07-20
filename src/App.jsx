import { Form, Container } from "./Components"
export default function App() {
  return (
    <div className="bg-gray-200 flex min-h-screen justify-center items-center">
      <div className="bg-white overflow-hidden w-fit h-fit flex flex-col pt-8 rounded-lg shadow-sm shadow-gray-400  border items-center justify-center">
        <Form />
        <Container />
      </div>
    </div>
  )
}