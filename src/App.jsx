import { Button, Datepicker, Dropdown } from "flowbite-react";

function App() {
  return (
    <div>
      <Datepicker />
      <div>TmTm</div>
      <div>SmSm</div>
      <div>BmBm</div>
      <Button>Shalaby</Button>
      <Dropdown label="Dropdown button" dismissOnClick={false}>
        <Dropdown.Item>Dashboard</Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item>Earnings</Dropdown.Item>
        <Dropdown.Item>Sign out</Dropdown.Item>
      </Dropdown>
    </div>
  );
}

export default App;
