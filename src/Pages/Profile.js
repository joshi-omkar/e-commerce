import React, { useEffect, useState } from "react";
import { useAuthContext } from "../context/authContext";
import AddressCard from "../Components/AddressCard";
import { useAddressContext } from "../context/addressContext";
import { AddressForm } from "../Components/AddressEditForm";

const Profile = () => {
  const { logOut, user } = useAuthContext();
  const {
    isAddAddress,
    setIsAddAddress,
    addresses,
    setAddresses,
    addUserAddress,
  } = useAddressContext();
  const handleOnClickLogout = () => {
    logOut();
  };
  const userAddress = user?.address;
  useEffect(() => {
    setAddresses(userAddress);
  }, []);

  const initialAddressForm = {
    name: "",
    street: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
    mobile: "",
  };

  const [addressForm, setAddressForm] = useState(initialAddressForm);

  return (
    <>
      {isAddAddress ? (
        <AddressForm
          setIsAddressForm={setIsAddAddress}
          setAddressForm={setAddressForm}
          addressForm={addressForm}
          initialAddressForm={initialAddressForm}
        />
      ) : (
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div onClick={handleOnClickLogout} className="login-button-navbar">
            <p>Logout</p>
          </div>
          <div>
            {addresses?.map((address) => {
              return <AddressCard key={address._id} address={address} />;
            })}
            <button onClick={() => setIsAddAddress(true)}>
              Add New Address
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
