import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuthContext } from "./authContext";
export const AddressContext = createContext({});

export function AddressProvider({ children }) {
  const { user, token } = useAuthContext();
  const [isAdressUpdated, setIsAdressUpdated] = useState(false);
  const [isEditAddress, setIsEditAddress] = useState(false);
  const [isAddAddress, setIsAddAddress] = useState(false);
  const [addresses, setAddresses] = useState(user?.address);
  const navigate = useNavigate();

  const updateUserAddress = async (address, setIsAddressForm) => {
    try {
      const res = await fetch(`api/user/address/${address._id}`, {
        method: "POST",
        headers: {
          authorization: token,
        },
        body: JSON.stringify({ address }),
      });
      const resJson = await res.json();
      console.log({...addresses, address:resJson?.address})
      if (res.status === 200) {
        // user?.address = resJson?.address
        setAddresses(resJson?.address);
        setIsAddressForm(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const addUserAddress = async (address, setIsAddressForm) => {
    try {
      const res = await fetch("/api/user/address", {
        method: "POST",
        headers: {
          authorization: token,
        },
        body: JSON.stringify({ address }),
      });
      const resJson = await res.json();
      if (res.status === 201) {
        setAddresses(resJson?.address)
        setIsAddressForm(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const removeUserAddress = async (addressId) => {
    try {
      const res = await fetch(`api/user/address/${addressId}`, {
        method: "DELETE",
        headers: { authorization: token },
      });
      const resJson = await res.json();
      if (res.status === 200) {
        setAddresses(resJson?.address);
      }
    } catch (err) {
      console.log(err);
    }
  };

  console.log(user)

  return (
    <AddressContext.Provider
      value={{
        addresses,
        setAddresses,
        isAdressUpdated,
        setIsAdressUpdated,
        updateUserAddress,
        addUserAddress,
        setIsEditAddress,
        isEditAddress,
        removeUserAddress,
        setIsAddAddress,
        isAddAddress
      }}
    >
      {children}
    </AddressContext.Provider>
  );
}
export const useAddressContext = () => useContext(AddressContext);
