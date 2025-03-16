// React
import { useContext, useEffect, useState } from "react";

// Core
import { AppButton, AppContext, db } from "/src";

// Flowbite
import { TextInput, Table } from "flowbite-react";

// Firebase
import { doc, setDoc, getDoc } from "firebase/firestore";

export const Receipt = () => {
  // Context
  const {
    mainUserSandwichs,
    setMainUserSandwichs,
    usersData,
    setUsersData,
    unitPrice,
    setUnitPrice,
    firebaseDabaseIdName,
    setFirebaseDabaseIdName,

    firebaseUserData,
    setFirebaseUserData,
    firebaseFullUserData,
    setFirebaseFullUserData,
    handleGetUserFullData,
    firebaseAllUsers,
    setFirebaseAllUsers,
    handleGetAllUsers,
    firebaseAllItems,
    setFirebaseAllItems,
    handleGetAllItems,
    handleLogout,
  } = useContext(AppContext);

  // State
  const [loading, setLoading] = useState(false);

  // Methods
  const handleAllOfKind = (item) => {
    let resultAllOfKind = 0;
    firebaseAllUsers?.map(
      (user) =>
        (resultAllOfKind +=
          +user?.order?.find((singleOrder) => singleOrder?.name === item?.name)
            ?.count || 0)
    );
    return resultAllOfKind;
  };

  const handleTotalReceipt = () => {
    let totalPriceAllSandwichs = 0;
    firebaseAllItems?.map(
      (item) => (totalPriceAllSandwichs += +handleAllOfKind(item) * item?.price)
    );
    return totalPriceAllSandwichs;
  };

  const handleCheck = async () => {
    try {
      setLoading(true);
      await handleGetAllUsers();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="overflow-x-auto space-y-2">
      <Table striped hoverable>
        <Table.Head>
          <Table.HeadCell>Name</Table.HeadCell>
          {firebaseAllItems?.map((item) => (
            <Table.HeadCell key={item?.id}>{item?.name}</Table.HeadCell>
          ))}
        </Table.Head>

        <Table.Body className="divide-y">
          {firebaseAllUsers?.map((user) => (
            <Table.Row
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
              key={user?.id}
            >
              <Table.Cell className="capitalize">
                {user?.displayName}
              </Table.Cell>

              {firebaseAllItems?.map((item) => (
                <Table.Cell key={item?.id} className="capitalize">
                  <TextInput
                    type="number"
                    min={0}
                    sizing="sm"
                    className="min-w-12 max-w-20"
                    value={
                      user?.order?.find(
                        (userOrder) => item?.name === userOrder?.name
                      )?.count || 0
                    }
                    onChange={() => {}}
                  />
                </Table.Cell>
              ))}
            </Table.Row>
          ))}

          {/* Total count sandwich */}
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 font-medium text-gray-900 dark:text-white">
            <Table.Cell className="whitespace-nowrap">Count</Table.Cell>
            {firebaseAllItems?.map((item) => (
              <Table.Cell key={item?.id} className="whitespace-nowrap">
                {handleAllOfKind(item)}
              </Table.Cell>
            ))}
          </Table.Row>

          {/* Total unit sandwich price */}
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 font-medium text-gray-900 dark:text-white">
            <Table.Cell className="whitespace-nowrap">Column price</Table.Cell>
            {firebaseAllItems?.map((item) => (
              <Table.Cell key={item?.id} className="whitespace-nowrap">
                {handleAllOfKind(item) * item?.price}
              </Table.Cell>
            ))}
          </Table.Row>

          {/* Total Receipt */}
          <Table.Row className="!bg-red-500 dark:!bg-red-700 border-t border-gray-300 text-white dark:border-white text-base font-semibold">
            <Table.Cell className="whitespace-nowrap">Total</Table.Cell>
            <Table.Cell
              className="text-center"
              colSpan={firebaseAllItems?.length}
            >
              {handleTotalReceipt()} LE
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>

      <AppButton
        label="Check"
        icon="material-symbols:sync-outline"
        className="cursor-pointer"
        onClick={handleCheck}
        loading={loading}
        disabled={loading}
      />
    </div>
  );
};
