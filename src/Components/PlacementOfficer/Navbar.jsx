import { useState, useEffect } from 'react';
import { Center, Tooltip, UnstyledButton, Stack, rem, Image } from '@mantine/core';
import {
  IconHome2,
  IconUsers,
  IconBriefcase,
  IconFingerprint,
  IconAlarmAverage,
  IconChecklist,
  IconSettings,
  IconLogout,
  IconSwitchHorizontal,
} from '@tabler/icons-react';
import { Link, useNavigate } from 'react-router-dom'; 
import classes from './Navbar.module.css';

function NavbarLink({ icon: Icon, label, active, to, onClick }) {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <Link onClick={onClick} to={to} className={classes.link} data-active={active || undefined}>
        <UnstyledButton >
          <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
        </UnstyledButton>
      </Link>
    </Tooltip>
  );
}

const mockdata = [
  { icon: IconHome2, label: 'Home', to: '/dashboard/home' },
  { icon: IconUsers, label: 'Candidates', to: '/dashboard/candidates' },
  { icon: IconBriefcase, label: 'Placements', to: '/dashboard/placements' },
  { icon: IconAlarmAverage, label: 'Announcements', to: '/dashboard/announcements' },
  { icon: IconChecklist, label: 'Trainings', to: '/dashboard/trainings' },
  { icon: IconSettings, label: 'Settings', to: '/dashboard/settings' },
];

export const Navbar = () => {
  const [active, setActive] = useState((0) )
  const navigate = useNavigate();

  const links = mockdata.map((link, index) => (
    <NavbarLink
      icon={link.icon}
      label={link.label}
      to={link.to}
      active={index === active}
      onClick={() => {
        setActive(index);
      }}
      key={link.label}
    />
  ));

  useEffect(() => {
    navigate(mockdata[active].to);
  }, [active, navigate]);

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Stack justify="center" align='center' gap={0}>
          {links}
        </Stack>
      </div>
    </nav>
  );
}
