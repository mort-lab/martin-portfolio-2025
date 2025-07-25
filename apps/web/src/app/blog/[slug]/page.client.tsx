"use client";

// import { redirect } from "next/navigation";
// import { Comments } from "@fuma-comment/react";

export function PostComments({ slug }: { slug: string }) {
  // TODO: Re-enable comments when @fuma-comment/react is properly installed
  return (
    <div className="w-full p-4 border rounded-lg bg-muted/30">
      <p className="text-muted-foreground text-sm">Comments temporarily disabled</p>
    </div>
  );
  // return (
  //   <Comments
  //     page={slug}
  //     className="w-full"
  //     auth={{
  //       type: "api",
  //       signIn: () => {
  //         redirect("/login");
  //       },
  //     }}
  //   />
  // );
}
