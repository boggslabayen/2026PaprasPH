// "use client";

// import { cn } from "@/lib/utils";
// import { Toggle } from "@radix-ui/react-toggle";
// import { useEditor, EditorContent } from "@tiptap/react";
// import StarterKit from "@tiptap/starter-kit";
// import { Bold, Italic, List, ListOrdered, Strikethrough } from "lucide-react";
// import classes from "./tiptap.module.css";

// import { useEffect, useState } from "react";
// import { useFormContext } from "react-hook-form";

// const Tiptap = ({ val }: { val: string }) => {
//   const { setValue } = useFormContext();
//   const editor = useEditor({
//     extensions: [
//       StarterKit.configure({
//         orderedList: {
//           HTMLAttributes: {
//             class: "list-decimal pl-4",
//           },
//         },
//         bulletList: {
//           HTMLAttributes: {
//             class: "list-disc pl-4",
//           },
//         },
//       }),
//     ],
//     onUpdate: ({ editor }) => {
//       const content = editor.getHTML();
//       setValue("description", content, {
//         shouldValidate: true,
//         shouldDirty: true,
//       });
//     },
//     editorProps: {
//       attributes: {
//         class:
//           " border-1  rounded-md border-gray-200 p-2 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-1 h-54",
//       },
//     },
//     content: val,
//     // Don't render immediately on the server to avoid SSR issues
//     immediatelyRender: false,
//   });

//   useEffect(() => {
//     if (editor?.isEmpty) editor.commands.setContent(val);
//   }, [val]);

//   return (
//     <div className="flex flex-col">
//       {editor && (
//         <div className="mb-4 border-input  rounded-md flex">
//           <Toggle
//             className={cn(
//               "p-2 rounded-l-sm transition-colors", // base classes

//               "hover:bg-amber-400" // optional hover effect
//             )}
//             pressed={editor.isActive("bold")}
//             onPressedChange={() => editor.chain().focus().toggleBold().run()}
//           >
//             <Bold size={20} />
//           </Toggle>
//           <Toggle
//             className={cn(
//               "p-2  transition-colors", // base classes
//               "hover:bg-amber-400" // optional hover effect
//             )}
//             pressed={editor.isActive("italic")}
//             onPressedChange={() => editor.chain().focus().toggleItalic().run()}
//           >
//             <Italic size={20} />
//           </Toggle>
//           <Toggle
//             className={cn(
//               "p-2  transition-colors", // base classes
//               "hover:bg-amber-400" // optional hover effect
//             )}
//             pressed={editor.isActive("strike")}
//             onPressedChange={() => editor.chain().focus().toggleStrike().run()}
//           >
//             <Strikethrough size={20} />
//           </Toggle>
//           <Toggle
//             className={cn(
//               "p-2  transition-colors", // base classes
//               "hover:bg-amber-400" // optional hover effect
//             )}
//             pressed={editor.isActive("orderedList")}
//             onPressedChange={() =>
//               editor.chain().focus().toggleOrderedList().run()
//             }
//           >
//             <ListOrdered size={20} />
//           </Toggle>
//           <Toggle
//             className={cn(
//               "p-2   transition-colors", // base classes
//               "hover:bg-amber-400" // optional hover effect
//             )}
//             pressed={editor.isActive("bulletList")}
//             onPressedChange={() =>
//               editor.chain().focus().toggleBulletList().run()
//             }
//           >
//             <List size={20} />
//           </Toggle>
//         </div>
//       )}
//       <EditorContent
//         editor={editor}
//         className={`${classes.tiptap} focus:outline-none`}
//       />
//     </div>
//   );
// };

// export default Tiptap;

"use client";

import { cn } from "@/lib/utils";
import { Toggle } from "@radix-ui/react-toggle";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Bold, Italic, List, ListOrdered, Strikethrough } from "lucide-react";
import classes from "./tiptap.module.css";

import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

interface TiptapProps {
  val: string;
  className?: string;
}

const Tiptap = ({ val, className }: TiptapProps) => {
  const { setValue } = useFormContext();
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        orderedList: { HTMLAttributes: { class: "list-decimal pl-4" } },
        bulletList: { HTMLAttributes: { class: "list-disc pl-4" } },
      }),
    ],
    content: val,
    immediatelyRender: false,
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
          "border rounded-md border-gray-200 p-2 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-1 min-h-[200px]",
      },
    },
  });

  useEffect(() => {
    if (editor && editor.isEmpty) {
      editor.commands.setContent(val);
    }
  }, [val, editor]);

  return (
    <div className="flex flex-col">
      {editor && (
        <div className="mb-4 border-input rounded-md flex gap-1">
          <Toggle
            className={cn(
              "p-2 rounded-l-sm transition-colors",
              "hover:bg-amber-400"
            )}
            pressed={editor.isActive("bold")}
            onPressedChange={() => editor.chain().focus().toggleBold().run()}
          >
            <Bold size={20} />
          </Toggle>
          <Toggle
            className={cn("p-2 transition-colors", "hover:bg-amber-400")}
            pressed={editor.isActive("italic")}
            onPressedChange={() => editor.chain().focus().toggleItalic().run()}
          >
            <Italic size={20} />
          </Toggle>
          <Toggle
            className={cn("p-2 transition-colors", "hover:bg-amber-400")}
            pressed={editor.isActive("strike")}
            onPressedChange={() => editor.chain().focus().toggleStrike().run()}
          >
            <Strikethrough size={20} />
          </Toggle>
          <Toggle
            className={cn("p-2 transition-colors", "hover:bg-amber-400")}
            pressed={editor.isActive("orderedList")}
            onPressedChange={() =>
              editor.chain().focus().toggleOrderedList().run()
            }
          >
            <ListOrdered size={20} />
          </Toggle>
          <Toggle
            className={cn("p-2 transition-colors", "hover:bg-amber-400")}
            pressed={editor.isActive("bulletList")}
            onPressedChange={() =>
              editor.chain().focus().toggleBulletList().run()
            }
          >
            <List size={20} />
          </Toggle>
        </div>
      )}
      <EditorContent
        editor={editor}
        className={cn(
          classes.tiptap,
          className,
          "focus:outline-none  overflow-y-auto border border-gray-300 rounded-md p-2 scroll-auto"
        )}
      />
    </div>
  );
};

export default Tiptap;
