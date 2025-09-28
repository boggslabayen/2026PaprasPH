import { Button } from "@/components/ui/button";

export default function DoctorsPage() {
  return (
    <>
      <h1> Doctors Dashboard</h1>
      <a href="/dashboard/doctors/add-doctor">
        <Button
          variant="default"
          className="bg-amber-500 hover:bg-black hover:text-amber-500 mb-8"
        >
          Add New Doctor
        </Button>
      </a>
    </>
  );
}
