import { AlertCircle } from "lucide-react";

export const FormError = ({ message }: { message: string }) => {
  if (!message) return null;

  return (
    <div className="text-red-500 text-sm mb-4">
      <AlertCircle className="w-4 h-4" />
      <p>{message}</p>
    </div>
  );
};
