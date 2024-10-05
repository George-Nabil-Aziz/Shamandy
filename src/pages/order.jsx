// Flowbite
import { Button, Datepicker, Dropdown } from "flowbite-react";

// TODO: Static data
import { PreferencesUser } from "../services/static-data";

export const OrderPage = () => {
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
      <hr />

      <div className=" flex gap-4">
        {PreferencesUser.map((user) => (
          <div>
            <p>
              <span>Name: </span>
              <span>{user.name}</span>
            </p>
            <p>
              <span>Fool: </span>
              <span>{user.fool}</span>
            </p>
            <p>
              <span>Ta3mia: </span>
              <span>{user.ta3mia}</span>
            </p>
            <p>
              <span>Fool: </span>
              <span>{user.fool}</span>
            </p>
            <p>
              <span>Batates: </span>
              <span>{user.batates}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
