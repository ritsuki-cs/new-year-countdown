import React from "react";

export function NextYear() {
  const nextYear = new Date()

  return <h1 className="next-year">{nextYear.getFullYear()+1}</h1>
}