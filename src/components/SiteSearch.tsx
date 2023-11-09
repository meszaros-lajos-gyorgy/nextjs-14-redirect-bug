"use client";

import { FC } from "react";
import { handleSearch } from "../services/SiteSearch.service";

type SiteSearchProps = {};

export const SiteSearch: FC<SiteSearchProps> = () => {
  return (
    <form action={handleSearch}>
      <label>
        <input type="search" name="search" placeholder="Search" />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};
