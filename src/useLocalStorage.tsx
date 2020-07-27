import React, { useState, useEffect, SetStateAction, Dispatch } from "react";
import { Animal } from "@frontendmasters/pet";

function getSavedValue(key: string, initialValue: string) {
  
  const savedValue = JSON.parse(localStorage.getItem(key) || '{}');

  if (savedValue) {
    return savedValue;
  }

  return initialValue;
}

export default function useLocalStorage(key: string, initialValue: string) {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);
  return [value, setValue] as [Animal[], Dispatch<SetStateAction<Animal[] | null>>];
}
