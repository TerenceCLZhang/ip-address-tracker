import { useState } from "react";
import { fetchIPData } from "../api/ip";
import { transformData } from "../utility/transformData";
import { useDispatch } from "react-redux";
import { setIPData } from "../state/dataSlice";

const IPInput = () => {
  const dispatch = useDispatch();
  const [address, setAddress] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formdata = new FormData(form);

    let address = formdata.get("address");
    if (typeof address !== "string" || !address.trim()) {
      address = "";
    }

    try {
      const data = await fetchIPData(address.toString());
      const transformedData = transformData(data);

      if (transformedData) {
        dispatch(setIPData(transformedData));
      } else {
        console.error("Unable to fetch data for that IP Address");
      }
    } catch (error) {
      console.error("Error fetching IP data:", error);
    }
  };

  return (
    <form className="rounded-xl overflow-hidden mt-5 flex" onSubmit={onSubmit}>
      <label htmlFor="address" className="sr-only">
        Enter an IPv4/IPv6 Address
      </label>
      <input
        type="text"
        id="address"
        name="address"
        inputMode="numeric"
        placeholder=" Enter an IPv4/IPv6 Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="bg-white w-full border-tran p-3 rounded-tl-xl rounded-bl-xl focus:outline-transparent placeholder:text-xs"
      />
      <input
        type="submit"
        value=""
        aria-label="submit"
        className="h-13 w-20 bg-black bg-[url(./images/icon-arrow.svg)] bg-no-repeat bg-center hover:bg-very-dark-gray transition"
      />
    </form>
  );
};

export default IPInput;
