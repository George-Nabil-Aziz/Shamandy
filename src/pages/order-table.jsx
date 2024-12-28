// React
import { useContext, useEffect, useState } from "react";

// Core
import { AppButton, AppContext, db } from "/src";

// Flowbite
import { TextInput, Table } from "flowbite-react";

// Firebase
import { doc, setDoc, getDoc } from "firebase/firestore";

export const OrderPage = () => {
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
  } = useContext(AppContext);

  // State
  const [isShowFullButtons, setShowFullButtons] = useState(true);
  const [order, setOrder] = useState(usersData);
  const [loading, setLoading] = useState(false);

  // Methods
  const handleAllOfKind = (kind) => {
    let resultAllOfKind = 0;
    Object.keys(order).map((user) => (resultAllOfKind += +order[user][kind]));
    return resultAllOfKind;
  };

  const handleShowFullButton = () => {
    try {
      const responseOne = handleGetData(
        firebaseDabaseIdName.order.collection,
        firebaseDabaseIdName.order.id
      );

      const responseTwo = handleGetData(
        firebaseDabaseIdName.unitPrice.collection,
        firebaseDabaseIdName.unitPrice.id
      );

      if (
        Object.keys(responseOne).length > 0 &&
        Object.keys(responseTwo).length > 0
        // localStorage.getItem("shamandy") &&
        // localStorage.getItem("shamandy-unit-price")
      )
        setShowFullButtons(true);
      else setShowFullButtons(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSaveUserPreferences = async (
    orderDatabase,
    unitPriceDatabase
  ) => {
    try {
      setLoading(true);

      const orderDocRef = doc(
        db,
        firebaseDabaseIdName.order.collection,
        firebaseDabaseIdName.order.id
      );
      await setDoc(orderDocRef, orderDatabase);
      console.log("orderDocRef", orderDocRef.id);

      const unitPriceDocRef = doc(
        db,
        firebaseDabaseIdName.unitPrice.collection,
        firebaseDabaseIdName.unitPrice.id
      );
      await setDoc(unitPriceDocRef, unitPriceDatabase);
      console.log("unitPriceDocRef", unitPriceDocRef.id);

      alert("Saved! 😊");
    } catch (error) {
      console.log("error", error);
      alert("Error");
    } finally {
      setLoading(false);
    }
  };

  const handleGetData = async (collection, id) => {
    try {
      setLoading(true);

      const docRef = doc(db, collection, id);
      const docSnap = await getDoc(docRef);
      return docSnap.data();
    } catch (error) {
      console.error("Error getting data:", error);
      alert("Error getting data");
    } finally {
      setLoading(false);
    }
  };

  const handleLoadUserPreferences = async () => {
    setOrder(
      handleGetData(
        firebaseDabaseIdName.order.collection,
        firebaseDabaseIdName.order.id
      )
    );

    setUnitPrice(
      handleGetData(
        firebaseDabaseIdName.unitPrice.collection,
        firebaseDabaseIdName.unitPrice.id
      )
    );

    try {
      setLoading(true);

      const orderDocRef = doc(
        db,
        firebaseDabaseIdName.order.collection,
        firebaseDabaseIdName.order.id
      );
      const docSnapOrder = await getDoc(orderDocRef);
      setOrder(docSnapOrder.data());

      const unitPriceDocRef = doc(
        db,
        firebaseDabaseIdName.unitPrice.collection,
        firebaseDabaseIdName.unitPrice.id
      );
      const docSnapUnitPrice = await getDoc(unitPriceDocRef);
      setUnitPrice(docSnapUnitPrice.data());
    } catch (error) {
      console.error("Error getting document:", error);
      alert("Error");
    } finally {
      setLoading(false);
    }
  };

  const handleClearUserPreferences = async () => {
    try {
      setLoading(true);

      const orderDocRef = doc(
        db,
        firebaseDabaseIdName.order.collection,
        firebaseDabaseIdName.order.id
      );
      await setDoc(orderDocRef, {});

      const unitPriceDocRef = doc(
        db,
        firebaseDabaseIdName.unitPrice.collection,
        firebaseDabaseIdName.unitPrice.id
      );
      await setDoc(unitPriceDocRef, {});

      // setShowFullButtons(false);
      alert("Cleard! 🚫");
    } catch (error) {
      console.log("error", error);
      alert("Error");
    } finally {
      setLoading(false);
    }
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

  // useEffect(() => handleShowFullButton(), []);

  return (
    <div className="overflow-x-auto">
      <Table striped hoverable>
        <Table.Head>
          <Table.HeadCell>Name</Table.HeadCell>
          {Object.keys(Object.values(order)[0] || [])?.map((mainSandwich) => (
            <Table.HeadCell key={mainSandwich}>{mainSandwich}</Table.HeadCell>
          ))}
        </Table.Head>
        <Table.Body className="divide-y">
          {Object.keys(order).map((user) => (
            <Table.Row
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
              key={user}
            >
              <Table.Cell className="capitalize">{user}</Table.Cell>
              {Object.keys(Object.values(order)[0]).map((mainSandwich) => (
                <Table.Cell key={mainSandwich} className="capitalize">
                  <TextInput
                    type="number"
                    min={0}
                    sizing="sm"
                    className="min-w-12 max-w-20"
                    value={order[user][mainSandwich]}
                    onChange={(sandwichCount) =>
                      setOrder((prev) => ({
                        ...prev,
                        [user]: {
                          ...prev[user],
                          [mainSandwich]: +sandwichCount.target.value,
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
            {Object.keys(Object.values(order)[0] || []).map((unit) => (
              <Table.Cell key={unit} className="whitespace-nowrap">
                {handleAllOfKind(unit)}
              </Table.Cell>
            ))}
          </Table.Row>

          {/* Total unit sandwich price */}
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 font-medium text-gray-900 dark:text-white">
            <Table.Cell className="whitespace-nowrap">Column price</Table.Cell>
            {Object.keys(Object.values(order)[0] || []).map((unit) => (
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
              colSpan={Object.keys(unitPrice)?.length}
            >
              {handleTotalReceipt()} LE
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>

      <div className="flex justify-end gap-2 m-2">
        {isShowFullButtons && (
          <>
            {/* <AppButton
              label="Clear"
              danger
              icon="ic:baseline-delete-forever"
              className="cursor-pointer"
              onClick={() => {
                // localStorage.removeItem("shamandy");
                // localStorage.removeItem("shamandy-unit-price");
                handleClearUserPreferences();
                // handleShowFullButton();
              }}
              loading={loading}
              disabled={loading}
            /> */}
            <AppButton
              label="Load"
              icon="ic:outline-cloud-download"
              className="cursor-pointer"
              outline
              onClick={() => {
                // setOrder(JSON.parse(localStorage.getItem("shamandy")));
                // setUnitPrice(
                //   JSON.parse(localStorage.getItem("shamandy-unit-price"))
                // );
                handleLoadUserPreferences();
              }}
              loading={loading}
              disabled={loading}
            />
          </>
        )}
        <AppButton
          label="Save"
          icon="basil:save-outline"
          className="cursor-pointer"
          onClick={() => {
            // localStorage.setItem("shamandy", JSON.stringify(order));
            // localStorage.setItem(
            //   "shamandy-unit-price",
            //   JSON.stringify(unitPrice)
            // );
            handleSaveUserPreferences(order, unitPrice);
            // handleShowFullButton();
          }}
          loading={loading}
          disabled={loading}
        />
      </div>
    </div>
  );
};
