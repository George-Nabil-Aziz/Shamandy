// React
import { useContext, useEffect, useState } from "react";

// Immer
import { useImmer } from "use-immer";

// Core
import { db, AppButton, AppContext, useNotify } from "/src";

// Flowbite
import { TextInput, Table } from "flowbite-react";

// Firebase
import { doc, setDoc, getDoc } from "firebase/firestore";

export const Receipt = () => {
  // Context
  const {
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
  } = useContext(AppContext);

  // Hooks
  const { notify } = useNotify();

  // State
  const [loading, setLoading] = useState(false);
  const [editTable, setEditTable] = useImmer(firebaseAllUsers);

  // Methods
  const handleAllOfKind = (item) => {
    let resultAllOfKind = 0;
    (editTable ? editTable : firebaseAllUsers)?.map(
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
      notify("Checked!");
    } finally {
      setLoading(false);
    }
  };

  const handleEditSaveTable = async () => {
    try {
      for (const user of firebaseAllUsers) {
        await setDoc(
          doc(db, "firebase-users", user.id),
          ...editTable.filter(
            (singleEditTable) => singleEditTable.id === user.id
          ),
          { merge: true }
        );
      }
      handleGetAllUsers();
      notify("Orders saved successfully!");
    } catch (error) {
      notify.error(error.message);
    }
  };

  return (
    <div className="space-y-2 relative">
      <Table striped hoverable className="overflow-x-hidden overflow-y-auto">
        <Table.Head className="sticky top-[60px] z-10">
          <Table.HeadCell>Name</Table.HeadCell>
          {firebaseAllItems?.map((item) => (
            <Table.HeadCell key={item?.id}>{item?.name}</Table.HeadCell>
          ))}
        </Table.Head>

        <Table.Body className="divide-y">
          {(editTable ? editTable : firebaseAllUsers)?.map((user) => (
            <Table.Row
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
              key={user?.id}
            >
              <Table.Cell className="capitalize">
                {user?.displayName}
              </Table.Cell>

              {firebaseAllItems?.map((item) => (
                <Table.Cell key={item?.id} className="capitalize">
                  {editTable ? (
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
                      onChange={(e) =>
                        setEditTable((draft) => {
                          const selectedUser = draft.find(
                            (userEditTable) => userEditTable.id === user.id
                          );
                          if (selectedUser) {
                            const selectedFood = selectedUser?.order?.find(
                              (userOrder) => userOrder.name === item.name
                            );
                            if (selectedFood) {
                              selectedFood.count = +e.target.value;
                            } else {
                              selectedUser.order.push({
                                name: item.name,
                                count: +e.target.value,
                              });
                            }
                          }
                        })
                      }
                    />
                  ) : (
                    <div className="w-20">
                      {user?.order?.find(
                        (userOrder) => item?.name === userOrder?.name
                      )?.count || 0}
                    </div>
                  )}
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

      <div className="flex gap-2 p-1">
        <AppButton
          label="Check"
          icon="material-symbols:sync-outline"
          className="cursor-pointer"
          onClick={handleCheck}
          loading={loading}
          disabled={loading}
        />
        {editTable && (
          <AppButton
            label="Save"
            icon="basil:save-outline"
            className="cursor-pointer"
            onClick={handleEditSaveTable}
            loading={loading}
            disabled={loading}
          />
        )}

        <AppButton
          label={editTable ? "Cancel" : "Edit"}
          icon={
            editTable
              ? "material-symbols:cancel-outline-rounded"
              : "material-symbols:edit-outline"
          }
          className="cursor-pointer"
          onClick={() =>
            setEditTable((draft) => (draft ? null : firebaseAllUsers))
          }
          loading={loading}
          disabled={loading}
          outline
        />
      </div>
    </div>
  );
};
