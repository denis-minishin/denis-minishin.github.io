import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenuEn } from "@/components/command-menu-en";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { Globe, LayoutGrid, PencilRuler, Languages, GraduationCap, BriefcaseBusiness, Info, Calendar, UserRound, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA_EN } from "@/data/resume-data-en";
import { ProjectCard } from "@/components/project-card";
import { calculateTotalWorkExperienceEn } from "@/components/calculateWorkDurationEn";
import calculateWorkDurationEn from "@/components/calculateWorkDurationEn";
import PrintButtonEn from "@/components/PrintButtonEn";
import ShareButtonEn from "@/components/ShareButtonEn";
import TranslateRuButtonEn from "@/components/TranslateRuButtonEn";
import Link from "next/link";

export const metadata: Metadata = {
  title: `${RESUME_DATA_EN.name} | ${RESUME_DATA_EN.about}`,
  description: `${RESUME_DATA_EN.summary}`,
  keywords: `Freelancing,Freelancer,Project work,Project activities,Resume,Curriculum Vitae,Engineer designer,Part-time employment,${RESUME_DATA_EN.about},${RESUME_DATA_EN.skills},${RESUME_DATA_EN.name}`,
};

export default function Page() {
  const totalWorkExperienceEn = calculateTotalWorkExperienceEn(RESUME_DATA_EN.work);
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <Link href="#name">
              <h1 className="text-2xl font-bold hover:underline" id="name">{RESUME_DATA_EN.name}</h1>
            </Link>
            <p className="max-w-md text-pretty font-mono text-sm print:text-[12px]">
              {RESUME_DATA_EN.about}
            </p>
            <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
              <a className="inline-flex gap-x-1.5 align-baseline leading-none">
                <UserRound className="size-3" />{RESUME_DATA_EN.gender}
              </a>
            </p>
            <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground inline-flex gap-x-1.5">
              <Calendar className="size-3 " />{RESUME_DATA_EN.age}, {RESUME_DATA_EN.birthdate}
            </p>
            <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={RESUME_DATA_EN.locationLink}
                target="_blank"
              >
                <Globe className="size-3" />
                {RESUME_DATA_EN.location}
              </a>
            </p>
            <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground print:hidden">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={`mailto:${RESUME_DATA_EN.contact.email}`}
                target="_blank"
              >
                <MailIcon className="size-3" />
                {RESUME_DATA_EN.contact.email}
              </a>
            </p>
            <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground print:hidden">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={`tel:${RESUME_DATA_EN.contact.tel1_2}`}
                target="_blank"
              >
                <PhoneIcon className="size-3" />
                {RESUME_DATA_EN.contact.tel1_1}
              </a>
            </p>
            <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground print:hidden">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={`tel:${RESUME_DATA_EN.contact.tel2_2}`}
                target="_blank"
              >
                <PhoneIcon className="size-3" />
                {RESUME_DATA_EN.contact.tel2_1}
              </a>
            </p>
            <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
              {RESUME_DATA_EN.contact.email ? (
                <Button
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`mailto:${RESUME_DATA_EN.contact.email}`}>
                    <MailIcon className="size-4" />
                  </a>
                </Button>
              ) : null}
              {RESUME_DATA_EN.contact.social.map((social) => (
                <Button
                  key={social.name}
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={social.url} target="_blank">
                    <social.icon className="size-4" />
                    </a>
                  
                </Button>
              ))}
              <TranslateRuButtonEn />
              <PrintButtonEn />
              <ShareButtonEn />
            </div>
            <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex print:text-[12px]">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none underline"
                href={`mailto:${RESUME_DATA_EN.contact.email}`}
                target="_blank"
              >
                <MailIcon className="size-3" />
                {RESUME_DATA_EN.contact.email}
              </a>
            </div>
            <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex print:text-[12px]">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none underline"
                href={`tel:${RESUME_DATA_EN.contact.tel1_2}`}
                target="_blank"
              >
                <PhoneIcon className="size-3" />
                {RESUME_DATA_EN.contact.tel1_1}
              </a>
            </div>
            <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex print:text-[12px]">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none underline"
                href={`tel:${RESUME_DATA_EN.contact.tel2_2}`}
                target="_blank"
              >
                <PhoneIcon className="size-3" />
                {RESUME_DATA_EN.contact.tel2_1}
              </a>
            </div>
          </div>
          <Avatar className="size-28">
            <AvatarImage alt={RESUME_DATA_EN.name} src={RESUME_DATA_EN.avatarUrl} />
            <AvatarFallback>{RESUME_DATA_EN.initials}</AvatarFallback>
          </Avatar>
        </div>
        <Section>
          <span><Info className="inline-flex align-baseline size-3.5" />  
            <Link href="#about">
              <h2 className="inline-flex text-xl font-bold hover:underline" id="about">About</h2>
            </Link>
          </span>
          <div className="text-justify text-pretty font-mono text-sm text-muted-foreground print:text-[12px]">
            {RESUME_DATA_EN.summary.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        </Section>
        <Section>
          <span><BriefcaseBusiness className="inline-flex align-baseline size-3.5" />  
            <Link href="#work">
              <h2 className="inline-flex text-xl font-bold hover:underline" id="work">Work Experience</h2>
            </Link>
            <span className="text-base font-normal text-muted-foreground opacity-75" style={{ marginTop: '3px' }}>
                —  {totalWorkExperienceEn}
            </span>
          </span>
          {RESUME_DATA_EN.work.map((work) => {
            const workDuration = calculateWorkDurationEn({
              start: work.start,
              end: work.end,
            });
            return (
              <Card key={work.company}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none" style={{ marginTop: '-10px' }}>
                      <a className="hover:underline" href={work.link} target="_blank">
                        {work.company}
                      </a>
                      <span className="inline-flex gap-x-1">
                        {work.badges.map((badge) => (
                          <Badge
                            variant="secondary"
                            className="align-middle text-xs print:text-[8px] print:leading-tight print:px-1 print:py-0.5"
                            key={badge}
                          >
                            {badge}
                          </Badge>
                        ))}
                      </span>
                    </h3>
                    <div className="text-right text-sm tabular-nums text-gray-500">
                      {work.start} – {work.end ?? "Present"}<span className="text-muted-foreground opacity-75"><br />{workDuration}</span>
                    </div>
                  </div>
                  <h4 className="font-mono text-base leading-none print:text-[12px]" style={{ marginTop: '-6px' }}>
                    {work.title}
                  </h4>
                </CardHeader>
                <CardContent className="mt-2 text-xs print:text-[10px]">
                  {Array.isArray(work.description)
                    ? work.description.map((desc, index) => (
                      <p key={index}>{desc}</p>
                    ))
                    : <p>{work.description}</p>}
                </CardContent>
              </Card>
            );
          })}
        </Section>
        <Section>
          <span><GraduationCap className="inline-flex align-baseline size-3.5" />  
            <Link href="#education">
              <h2 className="inline-flex text-xl font-bold hover:underline" id="education">Education</h2>
            </Link>
          </span>
          {RESUME_DATA_EN.education.map((education) => {
            return (
              <Card key={education.school}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="font-semibold leading-none" style={{ marginTop: '-16px' }}>
                      <span>• </span>
                      <a
                        className="hover:underline"
                        href={education.link_sfu}
                        target="_blank" >
                        {education.school}
                      </a>
                    </h3>
                    <div className="text-right text-sm tabular-nums text-gray-500">
                      {education.start} – {education.end}<br />
                      <span className="inline-flex gap-x-1">
                        {education.grade.map((grade) => (
                          <Badge
                            variant="secondary"
                            className="text-right text-xs text-gray-500 print:text-[12px] print:leading-tight print:px-1 print:py-0.25 "
                            key={grade}
                          >
                            <GraduationCap className="size-4" /> 
                            {grade}
                          </Badge>
                        ))}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <div className="gap-x-2 text-base" style={{ marginTop: '-16px' }}>
                  <h3 className="font-normal leading-normal hover:underline" style={{ marginTop: '-10px' }}>
                    <a
                      href={education.link_ikit}
                      target="_blank" >
                      {education.institute}
                    </a>
                  </h3>
                </div>
                <CardContent className="mt-1 print:text-[12px]">
                  {Array.isArray(education.degree)
                    ? education.degree.map((desc, index) => (
                      <p className="mt-1" key={index}>{desc}</p>
                    ))
                    : <p className="mt-1" >{education.degree}</p>}
                </CardContent>
              </Card>
            );
          })}
        </Section>
        <Section>
          <span>
            <Languages className="inline-flex align-baseline size-3.5" />  
            <Link href="#languages">
              <h2 className="inline-flex text-xl font-bold hover:underline" id="languages">Languages</h2>
            </Link>
          </span>
          <div className="flex flex-wrap gap-1">
            {RESUME_DATA_EN.languages.map((language, index) => {
              return (
                <Badge key={language} className={index === RESUME_DATA_EN.languages.length - 1 ? "languages-list" : ""}>
                  {language}
                  {index !== RESUME_DATA_EN.languages.length - 1 && (
                    <span className="comma"></span>
                  )}
                  {index === RESUME_DATA_EN.languages.length - 1 && (
                    <span className="dot"></span>
                  )}
                </Badge>
              );
            })}
          </div>
        </Section>
        <Section>
          <span><PencilRuler className="inline-flex align-baseline size-3.5" />  
            <Link href="#skills">
              <h2 className="inline-flex text-xl font-bold hover:underline" id="skills">Skills</h2>
            </Link>
          </span>
          <div className="flex flex-wrap gap-1">
            {RESUME_DATA_EN.skills.map((skill, index) => {
              return (
                <Badge key={skill} className={index === RESUME_DATA_EN.skills.length - 1 ? "languages-list" : ""}>
                  {skill}
                  {index !== RESUME_DATA_EN.skills.length - 1 && (
                    <span className="comma"></span>
                  )}
                  {index === RESUME_DATA_EN.skills.length - 1 && (
                    <span className="dot"></span>
                  )}
                </Badge>
              );
            })}
          </div>
        </Section>
        <Section className="print-force-new-page scroll-mb-16">
          <span><LayoutGrid className="inline-flex align-baseline size-3.5" />  
            <Link href="#portfolio">
              <h2 className="inline-flex text-xl font-bold hover:underline" id="portfolio">Portfolio</h2>
            </Link>
          </span>
          <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
            {RESUME_DATA_EN.projects.map((project) => {
              return (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  tags={project.techStack}
                  link={"link" in project ? project.link.href : undefined}
                />
              );
            })}
          </div>
        </Section>
      </section>
      <CommandMenuEn
        links={[
          {
            url: RESUME_DATA_EN.personalWebsiteUrl,
            title: "Personal Website",
          },
          ...RESUME_DATA_EN.contact.social.map((socialMediaLink) => ({
            url: socialMediaLink.url,
            title: socialMediaLink.name,
          })),
        ]}
      />
    </main>
  );
}