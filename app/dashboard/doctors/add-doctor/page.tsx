"use client";

import { Card, Input, Typography, Button } from "@material-tailwind/react";
import { useForm, Controller, FormProvider } from "react-hook-form";
import { DoctorsSchema, zDoctorsSchema } from "@/types/doctors-schema";
import { addDoctor } from "@/server/actions/add-doctor";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAction } from "next-safe-action/hooks";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { getDoctor } from "@/server/actions/get-doctors";
import { useEffect, useState } from "react";

export default function DoctorForm() {
  const form = useForm<zDoctorsSchema>({
    resolver: zodResolver(DoctorsSchema),
    defaultValues: {
      name: "",
      email: "",
      number: "",
      streetAddress: "",
      province: "",
      city: "",
      baranggay: "",
      region: "",
    },
    mode: "onChange",
  });

  const router = useRouter();
  const searchParams = useSearchParams();
  const editMode = searchParams.get("id");

  const [regions, setRegions] = useState<any[]>([]);
  const [provinces, setProvinces] = useState<any[]>([]);
  const [cities, setCities] = useState<any[]>([]);
  const [barangays, setBarangays] = useState<any[]>([]);

  const selectedRegion = form.watch("region");

  useEffect(() => {
    fetch("https://psgc.cloud/api/v2/regions")
      .then((res) => res.json())
      .then((data) => setRegions(data.data))
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (!selectedRegion) return;

    // NCR (1300000000) has no provinces
    if (selectedRegion === "1300000000") {
      setProvinces([]); // clear provinces
      form.setValue("province", ""); // reset province value

      fetch(`https://psgc.cloud/api/v2/regions/${selectedRegion}/cities`)
        .then((res) => res.json())
        .then((data) => setCities(data.data))
        .catch(console.error);
    } else {
      fetch(`https://psgc.cloud/api/v2/regions/${selectedRegion}/provinces`)
        .then((res) => res.json())
        .then((data) => setProvinces(data.data))
        .catch(console.error);

      setCities([]); // clear cities until province is selected
    }
  }, [selectedRegion]);

  useEffect(() => {
    const provinceCode = form.watch("province");
    if (!provinceCode || selectedRegion === "1300000000") return;

    fetch(
      `https://psgc.cloud/api/v2/provinces/${provinceCode}/cities-municipalities`
    )
      .then((res) => res.json())
      .then((data) => setCities(data.data))
      .catch(console.error);
  }, [form.watch("province"), selectedRegion]);

  useEffect(() => {
    const cityCode = form.watch("city");
    if (!cityCode) return;

    fetch(
      `https://psgc.cloud/api/v2/cities-municipalities/${cityCode}/barangays`
    )
      .then((res) => res.json())
      .then((data) => setBarangays(data.data))
      .catch(console.error);
  }, [form.watch("city")]);

  const checkDoctor = async (id: number) => {
    if (editMode) {
      const data = await getDoctor(id);
      if (data.error) {
        toast.error(data.error);
        router.push("/dashboard/doctors");
        return;
      }
      if (data.success) {
        const id = parseInt(editMode);
        form.setValue("id", id);
        form.setValue("name", data.success.name);
        form.setValue("email", data.success.email);
        form.setValue("number", data.success.number);
        form.setValue("streetAddress", data.success.streetAddress);
        form.setValue("province", data.success.province);
        form.setValue("city", data.success.city);
        form.setValue("baranggay", data.success.baranggay);
        form.setValue("region", data.success.region);
      }
    }
  };

  useEffect(() => {
    if (editMode) {
      checkDoctor(parseInt(editMode));
    }
  }, []);

  const { execute, status } = useAction(addDoctor, {
    onSuccess: (data) => {
      if (data.data?.success) {
        router.push("/dashboard/doctors");
        toast.success("Successfully Created");
      }
    },
    onError: (error) => console.error(error),
  });

  const onSubmit = async (values: z.infer<typeof DoctorsSchema>) => {
    execute(values);
  };

  return (
    <Card
      className="m-6 border-2 border-gray-200 w-full"
      placeholder={undefined}
      onResize={undefined}
      onResizeCapture={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <FormProvider {...form}>
        <form
          className="mb-2 w-full max-w-screen-lg p-6"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          {/* Doctor's Name */}
          <div className="mb-4">
            <Controller
              control={form.control}
              name="name"
              render={({ field }) => (
                <>
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="mb-3"
                    placeholder={undefined}
                    onResize={undefined}
                    onResizeCapture={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    Doctor's Name
                  </Typography>
                  <Input
                    {...field}
                    size="lg"
                    placeholder="Enter doctor's full name"
                    type="text"
                    autoComplete="name"
                    className="border-1 border-gray-200 px-2 focus:border-blue-500"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    onResize={undefined}
                    onResizeCapture={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    crossOrigin={undefined}
                  />
                  {form.formState.errors.name && (
                    <Typography
                      variant="small"
                      color="red"
                      className="mt-1"
                      placeholder={undefined}
                      onResize={undefined}
                      onResizeCapture={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {form.formState.errors.name.message}
                    </Typography>
                  )}
                </>
              )}
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <Controller
              control={form.control}
              name="email"
              render={({ field }) => (
                <>
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="mb-3"
                    placeholder={undefined}
                    onResize={undefined}
                    onResizeCapture={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    Email Address
                  </Typography>
                  <Input
                    {...field}
                    size="lg"
                    placeholder="doctor@email.com"
                    type="email"
                    autoComplete="email"
                    className="border-1 border-gray-200 px-2 focus:border-blue-500"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    onResize={undefined}
                    onResizeCapture={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    crossOrigin={undefined}
                  />
                  {form.formState.errors.email && (
                    <Typography
                      variant="small"
                      color="red"
                      className="mt-1"
                      placeholder={undefined}
                      onResize={undefined}
                      onResizeCapture={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {form.formState.errors.email.message}
                    </Typography>
                  )}
                </>
              )}
            />
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <Controller
              control={form.control}
              name="number"
              render={({ field }) => (
                <>
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="mb-3"
                    placeholder={undefined}
                    onResize={undefined}
                    onResizeCapture={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    Phone Number
                  </Typography>
                  <Input
                    {...field}
                    size="lg"
                    placeholder="09123456789"
                    type="tel"
                    autoComplete="tel"
                    className="border-1 border-gray-200 px-2 focus:border-blue-500"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    onResize={undefined}
                    onResizeCapture={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    crossOrigin={undefined}
                  />
                  {form.formState.errors.number && (
                    <Typography
                      variant="small"
                      color="red"
                      className="mt-1"
                      placeholder={undefined}
                      onResize={undefined}
                      onResizeCapture={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {form.formState.errors.number.message}
                    </Typography>
                  )}
                </>
              )}
            />
          </div>

          {/* Street Address */}
          <div className="mb-4">
            <Controller
              control={form.control}
              name="streetAddress"
              render={({ field }) => (
                <>
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="mb-3"
                    placeholder={undefined}
                    onResize={undefined}
                    onResizeCapture={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    Street Address
                  </Typography>
                  <Input
                    {...field}
                    size="lg"
                    placeholder="Enter street address"
                    type="text"
                    autoComplete="street-address"
                    className="border-1 border-gray-200 px-2 focus:border-blue-500"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    onResize={undefined}
                    onResizeCapture={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    crossOrigin={undefined}
                  />
                  {form.formState.errors.streetAddress && (
                    <Typography
                      variant="small"
                      color="red"
                      className="mt-1"
                      placeholder={undefined}
                      onResize={undefined}
                      onResizeCapture={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {form.formState.errors.streetAddress.message}
                    </Typography>
                  )}
                </>
              )}
            />
          </div>

          {/* Region */}
          <div className="mb-4">
            <Typography
              variant="h6"
              color="blue-gray"
              className="mb-2"
              placeholder={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Region
            </Typography>
            <Controller
              control={form.control}
              name="region"
              render={({ field }) => (
                <>
                  <select
                    {...field}
                    className="border-gray-200 border-2 p-4 rounded-md w-full"
                  >
                    <option value="">Select Region</option>
                    {regions.map((r) => (
                      <option key={r.code} value={r.code}>
                        {r.name}
                      </option>
                    ))}
                  </select>
                  {form.formState.errors.region && (
                    <Typography
                      variant="small"
                      color="red"
                      className="mt-1"
                      placeholder={undefined}
                      onResize={undefined}
                      onResizeCapture={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {form.formState.errors.region.message}
                    </Typography>
                  )}
                </>
              )}
            />
          </div>
          <div className="flex gap-4">
            {/* Province (Disabled if NCR selected) */}
            <div className="mb-4 w-full">
              <Typography
                variant="h6"
                color="blue-gray"
                className="mb-2"
                placeholder={undefined}
                onResize={undefined}
                onResizeCapture={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Province
              </Typography>
              <Controller
                control={form.control}
                name="province"
                render={({ field }) => (
                  <>
                    <select
                      {...field}
                      className="border-gray-200 border-2 p-4 rounded-md w-full"
                      disabled={selectedRegion === "1300000000"}
                    >
                      <option value="">
                        {selectedRegion === "1300000000"
                          ? "Not applicable for NCR"
                          : "Select Province"}
                      </option>
                      {provinces.map((p) => (
                        <option key={p.code} value={p.code}>
                          {p.name}
                        </option>
                      ))}
                    </select>
                    {form.formState.errors.province && (
                      <Typography
                        variant="small"
                        color="red"
                        className="mt-1"
                        placeholder={undefined}
                        onResize={undefined}
                        onResizeCapture={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                      >
                        {form.formState.errors.province.message}
                      </Typography>
                    )}
                  </>
                )}
              />
            </div>

            {/* City */}
            <div className="mb-4 w-full">
              <Typography
                variant="h6"
                color="blue-gray"
                className="mb-2"
                placeholder={undefined}
                onResize={undefined}
                onResizeCapture={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                City
              </Typography>
              <Controller
                control={form.control}
                name="city"
                render={({ field }) => (
                  <>
                    <select
                      {...field}
                      className="border-gray-200 border-2 p-4 rounded-md w-full"
                    >
                      <option value="">Select City</option>
                      {cities.map((c) => (
                        <option key={c.code} value={c.code}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                    {form.formState.errors.city && (
                      <Typography
                        variant="small"
                        color="red"
                        className="mt-1"
                        placeholder={undefined}
                        onResize={undefined}
                        onResizeCapture={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                      >
                        {form.formState.errors.city.message}
                      </Typography>
                    )}
                  </>
                )}
              />
            </div>

            {/* Barangay */}
            <div className="mb-6 w-full">
              <Typography
                variant="h6"
                color="blue-gray"
                className="mb-2"
                placeholder={undefined}
                onResize={undefined}
                onResizeCapture={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Barangay
              </Typography>
              <Controller
                control={form.control}
                name="baranggay"
                render={({ field }) => (
                  <>
                    <select
                      {...field}
                      className="border-gray-200 border-2 p-4 rounded-md w-full"
                    >
                      <option value="">Select Barangay</option>
                      {barangays.map((b) => (
                        <option key={b.code} value={b.code}>
                          {b.name}
                        </option>
                      ))}
                    </select>
                    {form.formState.errors.baranggay && (
                      <Typography
                        variant="small"
                        color="red"
                        className="mt-1"
                        placeholder={undefined}
                        onResize={undefined}
                        onResizeCapture={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                      >
                        {form.formState.errors.baranggay.message}
                      </Typography>
                    )}
                  </>
                )}
              />
            </div>
          </div>

          <Button
            size="lg"
            variant="filled"
            type="submit"
            className="bg-amber-400 text-black hover:text-amber-400 hover:bg-black py-2 rounded-full w-64 my-8"
            disabled={
              status === "executing" ||
              !form.formState.isValid ||
              !form.formState.isDirty
            }
            placeholder={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            {status === "executing" ? "Saving..." : "Save"}
          </Button>
        </form>
      </FormProvider>
    </Card>
  );
}
