import React from "react";

export let Config = "http://localhost:4000/";

export const SendPostrequest = async (data, url) => {
  const result = await fetch(Config + url, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return await result.json();
};
export const SendUsername = async (username, password) => {
  const result = await fetch(Config + "", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(),
  });
  return await result.json();
};

export const getDatarequest = async (url) => {
  const result = await fetch(Config + url);
  return await result.json();
};

export const deleterequest = async (url) => {
  const result = await fetch(Config + url, {
    method: "delete",
    headers: { "Content-Type": "application/json" },
  });
  return await result.json();
};
