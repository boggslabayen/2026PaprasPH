"use client";

import { cn } from "@/lib/utils";
import { Toggle } from "@radix-ui/react-toggle";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Bold, Italic, List, ListOrdered, Strikethrough } from "lucide-react";

import { useState } from "react";
import { useFormContext } from "react-hook-form";

const Tiptap = ({ val }: { val: string }) => {
  const { setValue } = useFormContext();
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        orderedList: {
          HTMLAttributes: {
            class: "list-decimal pl-4",
          },
        },
        bulletList: {
          HTMLAttributes: {
            class: "list-disc pl-4",
          },
        },
      }),
    ],
    onUpdate: ({ editor }) => {
      const content = editor.getHTML();
      setValue("description", content, {
        shouldValidate: true,
        shouldDirty: true,
      });
    },
    editorProps: {
      attributes: {
        class:
          " border-1  rounded-md border-gray-200 p-2 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-1 h-54",
      },
    },
    content: val,
    // Don't render immediately on the server to avoid SSR issues
    immediatelyRender: false,
  });

  return (
    <div className="flex flex-col">
      {editor && (
        <div className="mb-4 border-input  rounded-md flex">
          <Toggle
            className={cn(
              "p-2 rounded-l-sm transition-colors", // base classes

              "hover:bg-amber-400" // optional hover effect
            )}
            pressed={editor.isActive("bold")}
            onPressedChange={() => editor.chain().focus().toggleBold().run()}
          >
            <Bold size={20} />
          </Toggle>
          <Toggle
            className={cn(
              "p-2  transition-colors", // base classes
              "hover:bg-amber-400" // optional hover effect
            )}
            pressed={editor.isActive("italic")}
            onPressedChange={() => editor.chain().focus().toggleItalic().run()}
          >
            <Italic size={20} />
          </Toggle>
          <Toggle
            className={cn(
              "p-2  transition-colors", // base classes
              "hover:bg-amber-400" // optional hover effect
            )}
            pressed={editor.isActive("strike")}
            onPressedChange={() => editor.chain().focus().toggleStrike().run()}
          >
            <Strikethrough size={20} />
          </Toggle>
          <Toggle
            className={cn(
              "p-2  transition-colors", // base classes
              "hover:bg-amber-400" // optional hover effect
            )}
            pressed={editor.isActive("orderedList")}
            onPressedChange={() =>
              editor.chain().focus().toggleOrderedList().run()
            }
          >
            <ListOrdered size={20} />
          </Toggle>
          <Toggle
            className={cn(
              "p-2   transition-colors", // base classes
              "hover:bg-amber-400" // optional hover effect
            )}
            pressed={editor.isActive("bulletList")}
            onPressedChange={() =>
              editor.chain().focus().toggleBulletList().run()
            }
          >
            <List size={20} />
          </Toggle>
        </div>
      )}
      <EditorContent editor={editor} />
    </div>
  );
};

export default Tiptap;
