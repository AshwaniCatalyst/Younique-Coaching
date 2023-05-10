import React from "react";
import arrow from "../images/btnArrow.svg";

const PreFooterSection = () => {
  return (
    <>
      <div className="pt-[60px] pb-[100px]">
        <div className="container flex flex-col items-center">
          <h2 className="max-w-[864px] h-auto text-center">
            Let's work together to grow you and your{" "}
            <span className="font-bold">business</span>
          </h2>
          <div className="pt-[48px]">
            <button className="actionBtn  gap-4 max-w-[325px]">
              Work with Sophie{" "}
              <img
                src={arrow}
                className="max-w-[16px] max-h-[12px]"
                alt="btnarrow"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PreFooterSection;
