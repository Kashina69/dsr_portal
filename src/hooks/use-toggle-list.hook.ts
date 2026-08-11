"use client";

import { useCallback, useState } from "react";

export function useToggleList(initial: string[] = []) {
  const [items, setItems] = useState<string[]>(initial);

  const toggle = useCallback((value: string) => {
    setItems((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
    );
  }, []);

  return { items, toggle };
}
