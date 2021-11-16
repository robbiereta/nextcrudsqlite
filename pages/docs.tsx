import React from "react";
import dynamic from "next/dynamic";
import "swagger-ui-react/swagger-ui.css";
const SwaggerUI = dynamic(() => import("swagger-ui-react"), { ssr: false });

const origin = typeof window !== "undefined" ? window.location.origin : "";

const Docs = () => {
  return <SwaggerUI url={`${origin}/api/docs`} />;
};

export default Docs;
