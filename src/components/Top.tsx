import DataDisplay from "./DataDisplay";
import IPInput from "./IPInput";

const Top = () => {
  return (
    <section className="bg-[url(./images/pattern-bg-mobile.png)] bg-cover bg-no-repeat h-[35vh] p-8">
      <div className="relative">
        <h1>IP Address Tracker</h1>
        <IPInput />
        <DataDisplay />
      </div>
    </section>
  );
};

export default Top;
