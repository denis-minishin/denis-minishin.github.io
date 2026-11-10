import { ResumePage } from "@/components/resume-page";
import { resumeMetadata } from "@/lib/site";

export const metadata = resumeMetadata("en");

export default function Page() {
  return <ResumePage locale="en" />;
}
