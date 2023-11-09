"use server";

import { redirect } from "next/navigation";

export const handleSearch = async (data: FormData) => {
  redirect("/en/search/hello");
};
