import { ResumePage } from "@/components/resume-page";
import { resumeMetadata } from "@/lib/site";

export const metadata = resumeMetadata("ru");

export default function Page() {
  return <ResumePage locale="ru" />;
}
