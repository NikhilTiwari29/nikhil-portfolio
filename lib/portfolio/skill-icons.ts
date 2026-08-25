import type { IconType } from "react-icons";
import { FaAws, FaJava } from "react-icons/fa6";
import { GiCamel } from "react-icons/gi";
import {
  HiOutlineBeaker,
  HiOutlineBolt,
  HiOutlineChartBarSquare,
  HiOutlineCircleStack,
  HiOutlineCloud,
  HiOutlineCpuChip,
  HiOutlineCubeTransparent,
  HiOutlineDocumentMagnifyingGlass,
  HiOutlineGlobeAlt,
  HiOutlineServerStack,
  HiOutlineShieldCheck,
} from "react-icons/hi2";
import {
  SiApachekafka,
  SiApachemaven,
  SiCursor,
  SiDocker,
  SiGithub,
  SiGithubactions,
  SiGit,
  SiHibernate,
  SiJunit5,
  SiLinux,
  SiMysql,
  SiPostman,
  SiRedis,
  SiSpring,
  SiSpringboot,
} from "react-icons/si";
import { TbApi, TbBrandOpenai, TbSql } from "react-icons/tb";

export type SkillIconMeta = {
  icon: IconType;
  color: string;
};

export const SKILL_ICON_MAP: Record<string, SkillIconMeta> = {
  "Java 17/21": { icon: FaJava, color: "#007396" },
  SQL: { icon: HiOutlineCircleStack, color: "#69b9c9" },
  "REST APIs": { icon: TbApi, color: "#54c68a" },
  "Spring Boot": { icon: SiSpringboot, color: "#6DB33F" },
  "Spring Security": { icon: HiOutlineShieldCheck, color: "#6DB33F" },
  "Apache Camel": { icon: GiCamel, color: "#E84D31" },
  "JPA / Hibernate": { icon: SiHibernate, color: "#59666C" },
  OpenFeign: { icon: HiOutlineCloud, color: "#6DB33F" },
  "Apache Kafka": { icon: SiApachekafka, color: "#FFFFFF" },
  Redis: { icon: SiRedis, color: "#FF4438" },
  MSSQL: { icon: TbSql, color: "#CC2927" },
  MySQL: { icon: SiMysql, color: "#4479A1" },
  Microservices: { icon: HiOutlineServerStack, color: "#9b8cff" },
  "Event-driven architecture": { icon: HiOutlineBolt, color: "#f5a044" },
  "Distributed systems": { icon: HiOutlineCubeTransparent, color: "#69b9c9" },
  "JUnit 5": { icon: SiJunit5, color: "#25A162" },
  Mockito: { icon: HiOutlineBeaker, color: "#ef7fa6" },
  AWS: { icon: FaAws, color: "#FF9900" },
  Docker: { icon: SiDocker, color: "#2496ED" },
  "GitHub Actions": { icon: SiGithubactions, color: "#2088FF" },
  Maven: { icon: SiApachemaven, color: "#C71A36" },
  Linux: { icon: SiLinux, color: "#FCC624" },
  Git: { icon: SiGit, color: "#F05032" },
  GitHub: { icon: SiGithub, color: "#FFFFFF" },
  Postman: { icon: SiPostman, color: "#FF6C37" },
  Cursor: { icon: SiCursor, color: "#FFFFFF" },
  "Spring AI": { icon: SiSpring, color: "#6DB33F" },
  "AI Agents": { icon: HiOutlineCpuChip, color: "#10A37F" },
  RAG: { icon: HiOutlineDocumentMagnifyingGlass, color: "#9b8cff" },
  MCP: { icon: HiOutlineGlobeAlt, color: "#54c68a" },
  "OpenAI APIs": { icon: TbBrandOpenai, color: "#FFFFFF" },
  "AI Testing": { icon: HiOutlineBeaker, color: "#d8b65c" },
  "AI Observability": { icon: HiOutlineChartBarSquare, color: "#69b9c9" },
};

export function getSkillIcon(skill: string): SkillIconMeta {
  const aliases: Record<string, string> = {
    "Java 21": "Java 17/21",
    Kafka: "Apache Kafka",
  };

  const key = aliases[skill] ?? skill;

  return (
    SKILL_ICON_MAP[key] ?? {
      icon: HiOutlineCubeTransparent,
      color: "#9b8cff",
    }
  );
}
