import { Spin } from "antd";

const Loading = () => {
  return (
    <div className="h-20 flex justify-center items-center">
      <Spin />
    </div>
  );
};

export default Loading;
