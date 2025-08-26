import { CheckCircle2 } from "lucide-react";

export const FormSuccess = ({ message }: { message: string }) => {
  if (!message) return null;

  return (
    <div className="text-teal-400 text-sm mb-4">
      <CheckCircle2 className="w-4 h-4" />
      <p>{message}</p>
    </div>
  );
};
