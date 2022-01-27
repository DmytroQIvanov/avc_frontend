import React, { ReactNode } from "react";
import { Helmet } from "react-helmet";
import { Loader } from "../../Components/Loader/Loader";

type WrapperProps = {
  children: ReactNode;
  meta: {
    title?: string;
    description?: string;
  };
  loading: boolean;
};

const Wrapper: React.FC<WrapperProps> = ({ children, meta, loading }) => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Helmet>
      <div>{loading ? <Loader /> : children}</div>
    </div>
  );
};

export default Wrapper;
