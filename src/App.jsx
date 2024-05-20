import { Button, Datepicker, Dropdown } from "flowbite-react";

function App() {
  return (
    <>
      <Datepicker />
      <Button>Click me</Button>
      <Dropdown label="Dropdown button" dismissOnClick={false}>
        <Dropdown.Item>Dashboard</Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item>Earnings</Dropdown.Item>
        <Dropdown.Item>Sign out</Dropdown.Item>
      </Dropdown>
    </>
  );
}

export default App;
