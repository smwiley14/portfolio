import React from 'react';
import { Box, Typography, Avatar, Link } from '@mui/material';
import { LocationOn, Email, LinkedIn, GitHub, Language } from '@mui/icons-material';
import {
  SiPython,
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiPostgresql,
  SiApacheairflow,
  SiLangchain,
  SiDocker,
  SiTerraform,
  // SiGithub,
  // SiGitlab,
  SiKubernetes,
  SiGitlab,
  SiLinux  // SiGcp,
} from 'react-icons/si';
import { FaAws, FaGithub } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { heroStyles } from '../theme/styles';

interface Skill {
  label: string;
  icon: IconType;
  color: string;
}

const skills: Skill[] = [
  { label: 'Python', icon: SiPython, color: '#3776AB' },
  { label: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { label: 'JavaScript', icon: SiJavascript, color: '#E6B800' },
  { label: 'React.js', icon: SiReact, color: '#149ECA' },
  { label: 'Node.js', icon: SiNodedotjs, color: '#5FA04E' },
  { label: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  { label: 'Airflow', icon: SiApacheairflow, color: '#017CEE' },
  { label: 'LangChain', icon: SiLangchain, color: '#1C3C3C' },
  { label: 'Docker', icon: SiDocker, color: '#2496ED' },
  { label: 'Terraform', icon: SiTerraform, color: '#623CE4' },
  { label: 'AWS', icon: FaAws, color: '#FF9900' },
  { label: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
  { label: 'Github (Actions)', icon: FaGithub, color: '#181717' },
  { label: 'Linux', icon: SiLinux, color: '#FCC624' },
];

const Hero = () => {
  return (
    <Box id="hero" sx={heroStyles.container}>
      <Box sx={heroStyles.grid}>
        {/* Title + skills */}
        <Box sx={heroStyles.left}>
          <Typography component="h1" sx={heroStyles.role}>
            Full Stack Engineer
          </Typography>
          <Box component="ul" sx={heroStyles.skillsList}>
            {skills.map(({ label, icon, color }) => {
              const Icon = icon as unknown as React.FC<{
                color?: string;
                size?: string | number;
              }>;
              return (
                <Box component="li" key={label} sx={heroStyles.skillItem}>
                  <Icon color={color} />
                  {label}
                </Box>
              );
            })}
          </Box>
        </Box>

        {/* Contact info */}
        <Box sx={heroStyles.contact}>
          <Box sx={heroStyles.contactItem}>
            <LocationOn />
            New York City, NY
          </Box>
          <Box sx={heroStyles.contactItem}>
            <Email />
            <Link href="mailto:smwiley14@gmail.com" sx={heroStyles.contactLink}>
              smwiley14@gmail.com
            </Link>
          </Box>
          <Box sx={heroStyles.contactItem}>
            <LinkedIn />
            <Link
              href="https://www.linkedin.com/in/sam-wiley2003/"
              target="_blank"
              rel="noopener noreferrer"
              sx={heroStyles.contactLink}
            >
              sam-wiley2003
            </Link>
          </Box>
          <Box sx={heroStyles.contactItem}>
            <GitHub />
            <Link
              href="https://github.com/smwiley14"
              target="_blank"
              rel="noopener noreferrer"
              sx={heroStyles.contactLink}
            >
              smwiley14
            </Link>
          </Box>
        </Box>

        {/* Photo */}
        <Box sx={heroStyles.photoWrap}>
          <Avatar src="/profile.jpg" alt="Sam Wiley" sx={heroStyles.photo}>
            SW
          </Avatar>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
