import { toast } from "react-toastify";

export const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text).then(
    () => {
      // Show success toast
      toast.success("Text copied to clipboard!");
    },
    (err) => {
      // Show error toast
      toast.error("Failed to copy text!");
      console.error("Failed to copy text: ", err);
    }
  );
};
