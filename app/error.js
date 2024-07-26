"use client";

import Link from "next/link";
import React from "react";

const Error = ({ error }) => {
  return (
    <>
      <div className="text-lg font-bold place-self-start">
        <Link href="/">← Back to home page</Link>
      </div>
      <p>
        <div>{error.message}</div>
      </p>
    </>
  );
};

export default Error;
