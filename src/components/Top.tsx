import DataDisplay from "./DataDisplay";
import IPInput from "./IPInput";

const Top = () => {
  return (
    <section className="bg-[url(./images/pattern-bg-mobile.png)] md:bg-[url(./images/pattern-bg-desktop.png)] bg-cover bg-no-repeat h-65 xl:h-70 p-8">
      <div className="relative">
        <div className="justify-self-center w-full md:w-[85vw] lg:w-[50vw] xl:w-[35vw]">
          <h1>IP Address Tracker</h1>
          <IPInput />
        </div>
        <DataDisplay />
      </div>
    </section>
  );
};

export default Top;
