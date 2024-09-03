import React from "react";

const Template1: React.FC = () => {
  return (
    <div
      className="flex flex-col items-center p-4 w-full lg:w-[60%] xl:w-[40%]"
      style={{
        background: "linear-gradient(150deg, #09203f 50%, #ffffff 50%)",
      }}
    >
      <div className="flex justify-center w-full mb-[80px]">
        <div className="text-white text-lg">Logo</div>
      </div>

      <div className="flex flex-col justify-between w-full h-full">
        <div className="relative border-[6px] border-red-800 p-4 rounded-full self-center">
          <div
            className="w-full max-w-xs bg-yellow-500 rounded-full border-3 self-center border-black"
            style={{ height: "300px", width: "300px" }}
          ></div>

          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-full h-full">
              <path
                id="textPath"
                fill="none"
                stroke="transparent"
                d="
              M 150,150
              m -147,0
              a 147,147 0 1,1 294,0
              a 147,147 0 1,1 -294,0
            "
              />
              <text
                className="fill-current text-white"
                fontSize="18"
                fontWeight="bold"
              >
                <textPath href="#textPath" startOffset="25%">
                  Insert Your Text Here
                </textPath>
              </text>
            </svg>
          </div>
        </div>

        <div className="mt-4 text-black self-end">logo</div>
      </div>
    </div>
  );
};

export default Template1;
