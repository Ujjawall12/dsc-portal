// todo : useParams to get slug from the url
"use client";
import { useParams } from "next/navigation";

export default function ProjectPage() {
  const { slug } = useParams();
  return (
    <div>
      Projects: {slug};
    </div>
  )
}