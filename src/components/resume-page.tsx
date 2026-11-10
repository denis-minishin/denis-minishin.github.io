import type { ReactNode } from "react";
import {
  BriefcaseBusiness, Calendar, Globe, GraduationCap, Info, Languages,
  LayoutGrid, MailIcon, PencilRuler, PhoneIcon, UserRound,
} from "lucide-react";
import { CommandMenu } from "@/components/command-menu";
import { ProjectCard } from "@/components/project-card";
import { ResumeActions } from "@/components/resume-actions";
import { BirthInfo, ExperienceDates, TodayProvider, TotalExperience } from "@/components/resume-dates";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { RESUME_DATA_EN } from "@/data/resume-data-en";
import { RESUME_DATA_RU } from "@/data/resume-data-ru";
import { profile } from "@/data/profile";
import type { ResumeData } from "@/data/types";
import { currentDate, type Locale } from "@/lib/dates";
import { uiText } from "@/lib/messages";

function SectionHeading({ id, icon, children, extra }: {
  id: string; icon: ReactNode; children: ReactNode; extra?: ReactNode;
}) {
  return (
    <h2 id={id} className="flex flex-wrap items-baseline gap-x-2 text-xl font-bold">
      <span aria-hidden="true" className="inline-flex">{icon}</span>
      <a href={`#${id}`} className="hover:underline">{children}</a>
      {extra && <span className="text-base font-normal text-muted-foreground opacity-75">— {extra}</span>}
    </h2>
  );
}

function TextLines({ value, className }: { value: string | readonly string[]; className?: string }) {
  const lines = typeof value === "string" ? [value] : value;
  return lines.map((line, index) => <p key={`${index}-${line}`} className={className}>{line}</p>);
}

function ResumeHeader({ data, locale }: { data: ResumeData; locale: Locale }) {
  const labels = uiText[locale];
  const contacts = [
    { value: data.contact.email, href: `mailto:${data.contact.email}`, icon: MailIcon },
    { value: data.contact.tel1_1, href: `tel:${data.contact.tel1_2}`, icon: PhoneIcon },
    { value: data.contact.tel2_1, href: `tel:${data.contact.tel2_2}`, icon: PhoneIcon },
  ];

  return (
    <header className="flex items-center justify-between gap-3">
      <div className="min-w-0 flex-1 space-y-1.5">
        <h1 id="name" className="text-2xl font-bold"><a href="#name" className="hover:underline">{data.name}</a></h1>
        <p className="max-w-md text-pretty font-mono text-sm print:text-[12px]">{data.about}</p>
        <p className="font-mono text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-x-1.5"><UserRound className="size-3" aria-hidden="true" />{data.gender}</span>
        </p>
        <p className="inline-flex max-w-md items-center gap-x-1.5 font-mono text-xs text-muted-foreground">
          <Calendar className="size-3 shrink-0" aria-hidden="true" /><BirthInfo birthDate={profile.birthDate} locale={locale} />
        </p>
        <p className="max-w-md font-mono text-xs text-muted-foreground">
          <a className="inline-flex gap-x-1.5 leading-none hover:underline" href={data.locationLink} target="_blank" rel="noopener noreferrer">
            <Globe className="size-3 shrink-0" aria-hidden="true" />{data.location}
          </a>
        </p>
        {contacts.map(({ value, href, icon: Icon }) => (
          <p key={href} className="max-w-md font-mono text-xs text-muted-foreground print:text-[12px]">
            <a className="inline-flex gap-x-1.5 leading-none hover:underline print:underline" href={href}>
              <Icon className="size-3 shrink-0" aria-hidden="true" />{value}
            </a>
          </p>
        ))}
        <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
          <Button className="size-8" variant="outline" size="icon" asChild>
            <a href={`mailto:${data.contact.email}`} aria-label={labels.email}><MailIcon className="size-4" aria-hidden="true" /></a>
          </Button>
          {data.contact.social.map((social) => (
            <Button key={social.name} className="size-8" variant="outline" size="icon" asChild>
              <a href={social.url} aria-label={social.name} target="_blank" rel="noopener noreferrer">
                <social.icon className="size-4" aria-hidden="true" />
              </a>
            </Button>
          ))}
          <ResumeActions locale={locale} title={`${data.name} | ${data.about}`} />
        </div>
      </div>
      <Avatar className="size-28 shrink-0">
        <AvatarImage alt={data.name} src={data.avatarUrl} />
        <AvatarFallback>{data.initials}</AvatarFallback>
      </Avatar>
    </header>
  );
}

function WorkSection({ data, locale }: { data: ResumeData; locale: Locale }) {
  const periods = data.work.map(({ start, end }) => ({ start, end }));
  return (
    <Section aria-labelledby="work">
      <SectionHeading id="work" icon={<BriefcaseBusiness className="size-3.5" />} extra={<TotalExperience periods={periods} locale={locale} />}>
        {uiText[locale].work}
      </SectionHeading>
      {data.work.map((work) => (
        <Card key={`${work.company}-${work.start}`}>
          <CardHeader>
            <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
              <h3 className="inline-flex flex-wrap items-center gap-1 font-semibold leading-none">
                <a className="hover:underline" href={work.link} target="_blank" rel="noopener noreferrer">{work.company}</a>
                {work.badges.map((badge) => <Badge key={badge} variant="secondary" className="text-xs print:px-1 print:py-0.5 print:text-[8px]">{badge}</Badge>)}
              </h3>
              <div className="text-right text-sm tabular-nums text-gray-500"><ExperienceDates period={{ start: work.start, end: work.end }} locale={locale} /></div>
            </div>
            <h4 className="font-mono text-base leading-none print:text-[12px]">{work.title}</h4>
          </CardHeader>
          <CardContent className="mt-2 text-xs print:text-[10px]"><TextLines value={work.description} /></CardContent>
        </Card>
      ))}
    </Section>
  );
}

function EducationSection({ data, locale }: { data: ResumeData; locale: Locale }) {
  return (
    <Section aria-labelledby="education">
      <SectionHeading id="education" icon={<GraduationCap className="size-3.5" />}>{uiText[locale].education}</SectionHeading>
      {data.education.map((education) => (
        <Card key={`${education.school}-${education.start}`}>
          <CardHeader>
            <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
              <h3 className="font-semibold leading-none">
                <span aria-hidden="true">• </span>
                <a className="hover:underline" href={education.link_sfu} target="_blank" rel="noopener noreferrer">{education.school}</a>
              </h3>
              <div className="text-right text-sm tabular-nums text-gray-500">
                {education.start} – {education.end}<br />
                <span className="inline-flex gap-x-1">
                  {education.grade.map((grade) => <Badge key={grade} variant="secondary" className="text-xs text-gray-500 print:px-1 print:text-[12px]">
                    <GraduationCap className="size-4" aria-hidden="true" />&nbsp;{grade}
                  </Badge>)}
                </span>
              </div>
            </div>
            <h4 className="text-base font-normal leading-normal">
              <a className="hover:underline" href={education.link_ikit} target="_blank" rel="noopener noreferrer">{education.institute}</a>
            </h4>
          </CardHeader>
          <CardContent className="mt-2 print:text-[12px]"><TextLines value={education.degree} className="mt-1" /></CardContent>
        </Card>
      ))}
    </Section>
  );
}

function TagsSection({ id, title, icon, values }: { id: string; title: string; icon: ReactNode; values: readonly string[] }) {
  return (
    <Section aria-labelledby={id}>
      <SectionHeading id={id} icon={icon}>{title}</SectionHeading>
      <div className="flex flex-wrap gap-1">
        {values.map((value, index) => (
          <Badge key={value} className={index === values.length - 1 ? "languages-list" : ""}>
            {value}{index < values.length - 1 && <span className="comma" />}
          </Badge>
        ))}
      </div>
    </Section>
  );
}

export function ResumePage({ locale }: { locale: Locale }) {
  const data: ResumeData = locale === "ru" ? RESUME_DATA_RU : RESUME_DATA_EN;
  const labels = uiText[locale];
  const commandLinks = [
    { url: data.personalWebsiteUrl, title: labels.personalWebsite },
    ...data.contact.social.map(({ url, name }) => ({ url, title: name })),
  ];

  return (
    <TodayProvider initialDate={currentDate()}>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:p-2">{labels.skipToContent}</a>
      <main id="main-content" className="container relative mx-auto scroll-my-12 p-4 print:p-12 md:p-16">
        <div className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-4">
          <ResumeHeader data={data} locale={locale} />
          <Section aria-labelledby="about">
            <SectionHeading id="about" icon={<Info className="size-3.5" />}>{labels.about}</SectionHeading>
            <div className="text-left text-pretty font-mono text-sm text-muted-foreground sm:text-justify print:text-[12px]"><TextLines value={data.summary} /></div>
          </Section>
          <WorkSection data={data} locale={locale} />
          <EducationSection data={data} locale={locale} />
          <TagsSection id="languages" title={labels.languages} icon={<Languages className="size-3.5" />} values={data.languages} />
          <TagsSection id="skills" title={labels.skills} icon={<PencilRuler className="size-3.5" />} values={data.skills} />
          <Section aria-labelledby="portfolio" className="print-force-new-page scroll-mb-16">
            <SectionHeading id="portfolio" icon={<LayoutGrid className="size-3.5" />}>{labels.portfolio}</SectionHeading>
            <div className="-mx-3 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 print:gap-2">
              {data.projects.map((project) => <ProjectCard key={project.title} title={project.title} description={project.description} tags={project.techStack} link={project.link?.href} />)}
            </div>
          </Section>
        </div>
        <CommandMenu locale={locale} links={commandLinks} />
      </main>
    </TodayProvider>
  );
}
