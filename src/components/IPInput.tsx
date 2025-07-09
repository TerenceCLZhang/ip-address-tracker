import { fetchIPData } from "../api/ip";
import { transformData } from "../utility/transformData";
import { useDispatch, useSelector } from "react-redux";
import { setIPData } from "../state/dataSlice";
import type { RootState } from "../state/store";
import { setAddress } from "../state/addressSlice";
import { useEffect } from "react";
import { clearError, setError } from "../state/errorSlice";

const IPInput = () => {
  const address = useSelector((state: RootState) => state.address.address);
  const error = useSelector((state: RootState) => state.error.error);
  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, []);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formdata = new FormData(form);

    let address = formdata.get("address");
    if (typeof address !== "string" || !address.trim()) {
      address = "";
    }

    getData();
  };

  const getData = async () => {
    dispatch(clearError());

    try {
      const data = await fetchIPData(address.toString());
      const transformedData = transformData(data);

      if (transformedData) {
        dispatch(setIPData(transformedData));
      } else {
        dispatch(setError("Unable to fetch data for that IP Address"));
      }
    } catch (error) {
      dispatch(setError("Error fetching IP data"));
    }
  };

  return (
    <form
      className={error ? "mb-2 lg:mb-5" : "mb-5 lg:mb-10"}
      onSubmit={onSubmit}
    >
      <div className="rounded-xl overflow-hidden mt-5 flex">
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
          onChange={(e) => dispatch(setAddress(e.target.value))}
          className="bg-white w-full border-tran p-3 rounded-tl-xl rounded-bl-xl focus:outline-transparent placeholder:text-xs md:placeholder:text-lg"
        />
        <input
          type="submit"
          value=""
          aria-label="submit"
          className="h-13 w-20 bg-black bg-[url(./images/icon-arrow.svg)] bg-no-repeat bg-center hover:bg-very-dark-gray transition"
        />
      </div>
      {error && <p className="mt-2 text-white font-medium">ERROR: {error}</p>}
    </form>
  );
};

export default IPInput;
