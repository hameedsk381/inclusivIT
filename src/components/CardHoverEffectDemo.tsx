import { HoverEffect } from "./ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={schoolProjects} />
    </div>
  );
}
export const schoolProjects = [
  {
    title: "CKS",
    description:
      "A website project aimed at enhancing communication between students, parents, and teachers.",
    link: "https://schoolproject1.com",
  },
  {
    title: "DPS",
    description:
      "An interactive platform for students to access educational resources and assignments.",
    link: "https://schoolproject2.com",
  },
  {
    title: "RBS",
    description:
      "A virtual learning environment designed to facilitate online classes and discussions.",
    link: "https://schoolproject3.com",
  },
  {
    title: "NPS",
    description:
      "A student portal for managing schedules, grades, and extracurricular activities.",
    link: "https://schoolproject4.com",
  },
  {
    title: "ZPS",
    description:
      "A school administration system for managing student records and academic data.",
    link: "https://schoolproject5.com",
  },
  {
    title: "HPS",
    description:
      "An educational platform offering interactive learning modules and quizzes.",
    link: "https://schoolproject6.com",
  },
];
