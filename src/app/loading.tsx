"use client";

import { ThreeDots } from "react-loader-spinner";

const Loading = () => (
  <div className="flex justify-center items-center">
    <ThreeDots
      height="100"
      width="100"
      color="#4fa94d"
      ariaLabel="bars-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  </div>
)

export default Loading
