import { useContext } from "react";
import { ContentModalContext } from "../context/ContentModalContext";

export default function useContentModal() {
  return useContext(ContentModalContext)
}
