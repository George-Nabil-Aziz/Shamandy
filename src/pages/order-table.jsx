// React
import { useEffect, useState } from "react";

// UI
import { AppButton } from "/src";

// Flowbite
import { TextInput, Label, Select, Table } from "flowbite-react";

// TODO: Static data
import {
  PreferencesUser,
  PreferencesUser2,
  UnitPrice,
} from "../services/static-data";

export const OrderPage = () => {
  const [isShowFullButtons, setShowFullButtons] = useState(false);
  const [order, setOrder] = useState({
    mina: {
      name: "pappy",
      fool: 0,
      ta3mia: 0,
      batates: 0,
      koshary: 0,
      tagen: 0,
    },
    dalia: {
      name: "mummy",
      fool: 0,
      ta3mia: 0,
      batates: 0,
      koshary: 0,
      tagen: 0,
    },
    pero: {
      name: "batbat",
      fool: 0,
      ta3mia: 0,
      batates: 0,
      koshary: 0,
      tagen: 0,
    },
    devo: {
      name: "davdav",
      fool: 0,
      ta3mia: 0,
      batates: 0,
      koshary: 0,
      tagen: 0,
    },
    gedo: {
      name: "boobol",
      fool: 0,
      ta3mia: 0,
      batates: 0,
      koshary: 0,
      tagen: 0,
    },
    teta: {
      name: "smsm",
      fool: 0,
      ta3mia: 0,
      batates: 0,
      koshary: 0,
      tagen: 0,
    },
    gogo: {
      name: "gogo",
      fool: 0,
      ta3mia: 0,
      batates: 0,
      koshary: 0,
      tagen: 0,
    },
  });

  const handleAllOfKind = (kind) => {
    let resultAllOfKind = 0;
    Object.keys(order).map((user) => (resultAllOfKind += +order[user][kind]));
    return resultAllOfKind;
  };

  const handleShowFullButton = () => {
    if (localStorage.getItem("shamandy")) {
      setShowFullButtons(true);
    } else setShowFullButtons(false);
  };

  useEffect(() => handleShowFullButton(), []);

  return (
    <div className="overflow-x-auto">
      <Table striped>
        <Table.Head>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Fool</Table.HeadCell>
          <Table.HeadCell>Ta3mia</Table.HeadCell>
          <Table.HeadCell>Batates</Table.HeadCell>
          <Table.HeadCell>Koshary</Table.HeadCell>
          <Table.HeadCell>Tagen</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {Object.keys(order).map((user) => (
            <Table.Row
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
              key={user}
            >
              <Table.Cell className="capitalize">{order[user].name}</Table.Cell>
              <Table.Cell className="capitalize">
                <TextInput
                  type="number"
                  min={0}
                  sizing="sm"
                  className="max-w-20"
                  value={order[user].fool}
                  onChange={(sandwitchCount) =>
                    setOrder((prev) => ({
                      ...prev,
                      [user]: {
                        ...prev[user],
                        fool: sandwitchCount.target.value,
                      },
                    }))
                  }
                />
              </Table.Cell>
              <Table.Cell className="capitalize">
                <TextInput
                  type="number"
                  min={0}
                  sizing="sm"
                  className="max-w-20"
                  value={order[user].ta3mia}
                  onChange={(sandwitchCount) =>
                    setOrder((prev) => ({
                      ...prev,
                      [user]: {
                        ...prev[user],
                        ta3mia: sandwitchCount.target.value,
                      },
                    }))
                  }
                />
              </Table.Cell>
              <Table.Cell className="capitalize">
                <TextInput
                  type="number"
                  min={0}
                  sizing="sm"
                  className="max-w-20"
                  value={order[user].batates}
                  onChange={(sandwitchCount) =>
                    setOrder((prev) => ({
                      ...prev,
                      [user]: {
                        ...prev[user],
                        batates: sandwitchCount.target.value,
                      },
                    }))
                  }
                />
              </Table.Cell>
              <Table.Cell className="capitalize">
                <TextInput
                  type="number"
                  min={0}
                  sizing="sm"
                  className="max-w-20"
                  value={order[user].koshary}
                  onChange={(sandwitchCount) =>
                    setOrder((prev) => ({
                      ...prev,
                      [user]: {
                        ...prev[user],
                        koshary: sandwitchCount.target.value,
                      },
                    }))
                  }
                />
              </Table.Cell>
              <Table.Cell className="capitalize">
                <TextInput
                  type="number"
                  min={0}
                  sizing="sm"
                  className="max-w-20"
                  value={order[user].tagen}
                  onChange={(sandwitchCount) =>
                    setOrder((prev) => ({
                      ...prev,
                      [user]: {
                        ...prev[user],
                        tagen: sandwitchCount.target.value,
                      },
                    }))
                  }
                />
              </Table.Cell>
            </Table.Row>
          ))}
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 font-medium text-gray-900 dark:text-white">
            <Table.Cell className="whitespace-nowrap">Total</Table.Cell>
            <Table.Cell>{handleAllOfKind("fool")}</Table.Cell>
            <Table.Cell>{handleAllOfKind("ta3mia")}</Table.Cell>
            <Table.Cell>{handleAllOfKind("batates")}</Table.Cell>
            <Table.Cell>{handleAllOfKind("koshary")}</Table.Cell>
            <Table.Cell>{handleAllOfKind("tagen")}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>

      <div className="flex justify-end gap-2 m-2">
        {isShowFullButtons && (
          <>
            <AppButton
              label="Clear"
              danger
              icon="ic:baseline-delete-forever"
              className="cursor-pointer"
              onClick={() => {
                localStorage.removeItem("shamandy");
                handleShowFullButton();
              }}
            />
            <AppButton
              label="Load"
              icon="ic:outline-cloud-download"
              className="cursor-pointer"
              outline
              onClick={() =>
                setOrder(JSON.parse(localStorage.getItem("shamandy")))
              }
            />
          </>
        )}
        <AppButton
          label="Save"
          icon="basil:save-outline"
          className="cursor-pointer"
          onClick={() => {
            localStorage.setItem("shamandy", JSON.stringify(order));
            handleShowFullButton();
          }}
        />
      </div>
    </div>
  );
};
