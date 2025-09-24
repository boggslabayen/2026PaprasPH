"use client";

import {
  Card,
  CardBody,
  Typography,
  Button,
  Input,
  Textarea,
} from "@material-tailwind/react";

import { useForm, Controller, FormProvider } from "react-hook-form";
import { ArticleSchema, zArticleSchema } from "@/types/articles-schema";
import Tiptap from "../tiptap";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAction } from "next-safe-action/hooks";
import { createArticle } from "@/server/actions/create-articles";
import z from "zod";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { getArticle } from "@/server/actions/get-articles";
import { useEffect, useState } from "react";

import "@uploadthing/react/styles.css";
import { UploadButton, UploadDropzone } from "@/app/api/uploadthing/upload";
import { PlusCircleIcon } from "lucide-react";

export default function ArticlesForm() {
  // uploading of article image
  const [imageUploading, setImageUploading] = useState(false);

  const form = useForm<zArticleSchema>({
    resolver: zodResolver(ArticleSchema),
    defaultValues: {
      title: "",
      description: "",
      image: "",
    },
    mode: "onChange",
  });

  const router = useRouter();
  const searchParams = useSearchParams();
  const editMode = searchParams.get("id");

  const imageUrl = form.watch("image");

  const checkArticle = async (id: number) => {
    if (editMode) {
      const data = await getArticle(id);
      if (data.error) {
        toast.error(data.error);
        router.push("/dashboard/articles");
        return;
      }
      if (data.success) {
        const id = parseInt(editMode);
        form.setValue("title", data.success.title);
        form.setValue("description", data.success.description);
        form.setValue("id", id);
        form.setValue("image", data.success.image);
      }
    }
  };

  useEffect(() => {
    if (editMode) {
      checkArticle(parseInt(editMode));
    }
  }, []);

  const { execute, status } = useAction(createArticle, {
    onSuccess: (data) => {
      if (data.data?.success) {
        console.log(data.data.success);
        router.push("/dashboard/articles");
        toast.success("Successfully Created");
      }
    },
    onExecute: (data) => {},
    onError: (error) => console.error(error),
  });

  const onSubmit = async (values: z.infer<typeof ArticleSchema>) => {
    console.log(values);
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
      {/* Card Header */}
      <div className="p-4">
        <Typography
          variant={undefined}
          color="blue-gray"
          className="text-2xl font-bold"
          placeholder={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {editMode ? <span>Edit Article</span> : <span>Add New Article</span>}
        </Typography>
      </div>

      <CardBody
        placeholder={undefined}
        onResize={undefined}
        onResizeCapture={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        className="w-full "
      >
        <div className="">
          <Card
            color="transparent"
            shadow={false}
            placeholder={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            className="w-full"
            //   {...form}
          >
            <FormProvider {...form}>
              <form
                className=" mb-2 w-full max-w-screen-lg  "
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <div className="mb-1 flex flex-col gap-6 w-full">
                  {/* Article Title */}
                  <Controller
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <>
                        <Typography
                          variant="h6"
                          color="blue-gray"
                          className="-mb-3"
                          placeholder={undefined}
                          onResize={undefined}
                          onResizeCapture={undefined}
                          onPointerEnterCapture={undefined}
                          onPointerLeaveCapture={undefined}
                        >
                          Article Title
                        </Typography>
                        <Input
                          {...field}
                          size="lg"
                          placeholder="Article Title"
                          type="text"
                          className=" border-1 border-gray-200 px-2 focus:border-blue-500 w-full"
                          labelProps={{
                            className: "before:content-none after:content-none",
                          }}
                          onResize={undefined}
                          onResizeCapture={undefined}
                          onPointerEnterCapture={undefined}
                          onPointerLeaveCapture={undefined}
                          crossOrigin={undefined}
                        />
                      </>
                    )}
                  />

                  {/* Article Description */}

                  <Controller
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <>
                        <Typography
                          variant="h6"
                          color="blue-gray"
                          className="-mb-3"
                          placeholder={undefined}
                          onResize={undefined}
                          onResizeCapture={undefined}
                          onPointerEnterCapture={undefined}
                          onPointerLeaveCapture={undefined}
                        >
                          Article Description
                        </Typography>

                        <Tiptap val={field.value} />
                      </>
                    )}
                  />
                  <div className="border-1 border-gray-200 px-4 rounded-md w-fit">
                    {/* {imageUrl && (
                      <div className="mt-4">
                        <img
                          src={imageUrl}
                          alt="Article preview"
                          className="w-64 h-40 object-cover rounded-lg border"
                        />
                      </div>
                    )} */}

                    {!imageUrl ? (
                      <div className="mt-4 w-64 h-40 object-cover rounded-lg border-2 border-dashed border-gray-400 flex flex-col items-center justify-center">
                        <PlusCircleIcon className="h-10 w-10 pb-4" />
                        <p>upload image</p>
                      </div>
                    ) : (
                      <div className="mt-4">
                        <img
                          src={imageUrl}
                          alt="Article preview"
                          className="w-64 h-40 object-cover rounded-lg border-0"
                        />
                      </div>
                    )}

                    <UploadButton
                      appearance={{
                        button: "",
                        container:
                          "w-max flex-row rounded-md border-cyan-300  mt-4",
                        allowedContent:
                          "flex h-8 flex-col items-center justify-center px-2 text-black",
                      }}
                      endpoint={"avatarUploader"}
                      onUploadBegin={() => {
                        setImageUploading(true);
                      }}
                      onUploadError={(error) => {
                        form.setError("image", {
                          type: "validate",
                          message: error.message,
                        });
                        setImageUploading(false);
                        return;
                      }}
                      onClientUploadComplete={(res) => {
                        form.setValue("image", res[0].ufsUrl);
                        setImageUploading(false);
                        return;
                      }}
                      content={{
                        button({ ready }) {
                          if (ready) return <div>Upload Image</div>;
                          return <div>Uploading...</div>;
                        },
                      }}
                    />
                  </div>
                </div>

                <Button
                  size="lg"
                  variant="filled"
                  type="submit"
                  placeholder={undefined}
                  onResize={undefined}
                  onResizeCapture={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                  className="bg-amber-400  text-black hover:text-amber-400 hover:bg-black py-2 rounded-full w-64 my-8"
                  disabled={
                    status === "executing" ||
                    !form.formState.isValid ||
                    !form.formState.isDirty
                  }
                >
                  {"Save Article"}
                </Button>
              </form>
            </FormProvider>
          </Card>
        </div>
      </CardBody>
    </Card>
  );
}
