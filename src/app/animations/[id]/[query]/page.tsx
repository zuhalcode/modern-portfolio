"use client";

import PlacesPage from "@/components/animations/qatar-travel-v2/places";
import { useParams, usePathname } from "next/navigation";
import React from "react";

const Page = () => {
  const { id, query } = useParams();
  const queryURL = `/${String(id)}/${String(query)}`;
  if (queryURL === "/qatar-travel-v2/places") return <PlacesPage />;

  return <div className="">This is Query Page</div>;
};

export default Page;
