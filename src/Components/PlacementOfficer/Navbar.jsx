import { useState } from 'react';
import { Center, Tooltip, UnstyledButton, Stack, rem, Image } from '@mantine/core';
import {
  IconHome2,
  IconUsers,
  IconBriefcase,
  IconFingerprint,
  IconCalendarStats,
  IconChecklist,
  IconSettings,
  IconLogout,
  IconSwitchHorizontal,
} from '@tabler/icons-react';
import classes from './Navbar.module.css';

function NavbarLink({ icon: Icon, label, active, onClick }) {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton onClick={onClick} className={classes.link} data-active={active || undefined}>
        <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

const mockdata = [
  { icon: IconHome2, label: 'Home' },
  { icon: IconUsers, label: 'Candidates' },
  { icon: IconBriefcase, label: 'Placements' },
  { icon: IconCalendarStats, label: 'Announcements' },
  { icon: IconChecklist, label: 'Trainings' },
  { icon: IconSettings, label: 'Settings' },
];

export const Navbar = () => {
  const [active, setActive] = useState(2);

  const links = mockdata.map((link, index) => (
    <NavbarLink
      icon={link.icon}
      label={link.label}
      active={index === active}
      onClick={() => setActive(index)}
      key={link.label}
    />
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Stack justify="center" gap={0}>
          {links}
        </Stack>
      </div>
    </nav>
  );
}
