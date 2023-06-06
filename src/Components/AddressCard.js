import React, { useState } from "react";
import { useAuthContext } from "../context/authContext";
import { useAddressContext } from "../context/addressContext";
import { AddressForm } from "./AddressEditForm";

const AddressCard = ({ address }) => {
  const { token } = useAuthContext();
  //   const [isEditAddress, setIsEditAddress] = useState(false)
  const { isEditAddress, setIsEditAddress, addresses, removeUserAddress } =
    useAddressContext();
  const initialAddressForm = {
    name: "",
    street: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
    mobile: "",
  };
  const [addressForm, setAddressForm] = useState(address);
  return (
    <>
      {isEditAddress ? (
        <AddressForm
          setIsAddressForm={setIsEditAddress}
          setAddressForm={setAddressForm}
          addressForm={addressForm}
          initialAddressForm={address}
        />
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "20px",
            backgroundColor: "#fff",
          }}
        >
          <p style={{ fontWeight: "700" }}>{address.name}</p>
          <p>
            {address.street}, {address.city}, {address.state}
          </p>
          <p>
            PinCode: {address.zipCode}, {address.country}
          </p>
          <p>Mobile No. {address.mobile}</p>
          <button
            style={{ cursor: "pointer" }}
            onClick={() => setIsEditAddress(true)}
          >
            Edit
          </button>
          <button onClick={() => removeUserAddress(address._id)}>Delete</button>
        </div>
      )}
    </>
  );
};

export default AddressCard;
