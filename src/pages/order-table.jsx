// React
import { useContext, useEffect, useState } from "react";

// Core
import { AppButton, AppContext } from "/src";

// Flowbite
import { TextInput, Label, Select, Table } from "flowbite-react";

export const OrderPage = () => {
  // Context
  const {
    mainUserSandwitchs,
    setMainUserSandwitchs,
    usersData,
    setUsersData,
    unitPrice,
    setUnitPrice,
  } = useContext(AppContext);

  // State
  const [isShowFullButtons, setShowFullButtons] = useState(false);
  const [order, setOrder] = useState(usersData);

  // Methods
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

  const handleTotalReceipt = () => {
    let totalPriceAllSandwichs = 0;
    Object.keys(unitPrice).map((unit) => {
      let totalPriceUnitSandwich = 0;
      Object.keys(order).map((user) => {
        totalPriceUnitSandwich += +order[user][unit];
      });
      return (totalPriceAllSandwichs +=
        totalPriceUnitSandwich * unitPrice[unit]);
    });
    return totalPriceAllSandwichs;
  };

  useEffect(() => handleShowFullButton(), []);

  return (
    <div className="overflow-x-auto">
      <Table striped hoverable>
        <Table.Head>
          <Table.HeadCell>Name</Table.HeadCell>
          {Object.keys(Object.values(order)[0]).map((mainSandwitch) => (
            <Table.HeadCell>{mainSandwitch}</Table.HeadCell>
          ))}
        </Table.Head>
        <Table.Body className="divide-y">
          {Object.keys(order).map((user) => (
            <Table.Row
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
              key={user}
            >
              <Table.Cell className="capitalize">{user}</Table.Cell>
              {Object.keys(Object.values(order)[0]).map((mainSandwitch) => (
                <Table.Cell key={mainSandwitch} className="capitalize">
                  <TextInput
                    type="number"
                    min={0}
                    sizing="sm"
                    className="min-w-12 max-w-20"
                    value={order[user][mainSandwitch]}
                    onChange={(sandwichCount) =>
                      setOrder((prev) => ({
                        ...prev,
                        [user]: {
                          ...prev[user],
                          [mainSandwitch]: sandwichCount.target.value,
                        },
                      }))
                    }
                  />
                </Table.Cell>
              ))}
            </Table.Row>
          ))}

          {/* Total count sandwich */}
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 font-medium text-gray-900 dark:text-white">
            <Table.Cell className="whitespace-nowrap">Count</Table.Cell>
            {Object.keys(unitPrice).map((unit) => (
              <Table.Cell key={unit} className="whitespace-nowrap">
                {handleAllOfKind(unit)}
              </Table.Cell>
            ))}
          </Table.Row>

          {/* Total unit sandwich price */}
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 font-medium text-gray-900 dark:text-white">
            <Table.Cell className="whitespace-nowrap">Column price</Table.Cell>
            {Object.keys(unitPrice).map((unit) => (
              <Table.Cell key={unit} className="whitespace-nowrap">
                {handleAllOfKind(unit) * unitPrice[unit]}
              </Table.Cell>
            ))}
          </Table.Row>

          {/* Total Receipt */}
          <Table.Row className="!bg-red-500 dark:!bg-red-700 border-t border-gray-300 text-white dark:border-white text-base font-semibold">
            <Table.Cell className="whitespace-nowrap">Total</Table.Cell>
            <Table.Cell
              className="text-center"
              colSpan={Object.keys(mainUserSandwitchs)?.length}
            >
              {handleTotalReceipt()} LE
            </Table.Cell>
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
              onClick={() => {
                setOrder(JSON.parse(localStorage.getItem("shamandy")));
                setUnitPrice(
                  JSON.parse(localStorage.getItem("shamandy-unit-price"))
                );
              }}
            />
          </>
        )}
        <AppButton
          label="Save"
          icon="basil:save-outline"
          className="cursor-pointer"
          onClick={() => {
            localStorage.setItem("shamandy", JSON.stringify(order));
            localStorage.setItem(
              "shamandy-unit-price",
              JSON.stringify(unitPrice)
            );
            handleShowFullButton();
          }}
        />
      </div>
    </div>
  );
};
