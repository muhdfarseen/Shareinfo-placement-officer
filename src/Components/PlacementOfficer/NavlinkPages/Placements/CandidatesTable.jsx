import cx from 'clsx';
import { useState } from 'react';
import { Table, ScrollArea, Group, Avatar, Text, Anchor, Badge } from '@mantine/core';
import classes from './CandidatesTable.module.css';

const data = [
    {
        Name: 'Trace Tremblay PhD',
        Department: 'CS',
        Current_Stage: '3',
        Cgpa: '9.0',
        ShareInfoRank: '902',
        Link: "asdasd"
    },
    {
        Name: 'John Doe',
        Department: 'Economics',
        Current_Stage: '2',
        Cgpa: '8.5',
        ShareInfoRank: '800',
        Link: "example.com"
    },
    {
        Name: 'Jane Smith',
        Department: 'Biology',
        Current_Stage: '4',
        Cgpa: '9.2',
        ShareInfoRank: '950',
        Link: "example.org"
    },
    {
        Name: 'Alice Johnson',
        Department: 'Psychology',
        Current_Stage: '1',
        Cgpa: '7.8',
        ShareInfoRank: '700',
        Link: "example.net"
    },
    // Add more dummy data here...
    {
        Name: 'Bob Williams',
        Department: 'History',
        Current_Stage: '3',
        Cgpa: '8.9',
        ShareInfoRank: '850',
        Link: "example.edu"
    },
    {
        Name: 'Emily Davis',
        Department: 'Chemistry',
        Current_Stage: '2',
        Cgpa: '8.3',
        ShareInfoRank: '780',
        Link: "example.co"
    },
    {
        Name: 'Michael Wilson',
        Department: 'Physics',
        Current_Stage: '4',
        Cgpa: '9.5',
        ShareInfoRank: '960',
        Link: "example.info"
    },
    {
        Name: 'Sophia Martinez',
        Department: 'Mathematics',
        Current_Stage: '1',
        Cgpa: '7.9',
        ShareInfoRank: '710',
        Link: "example.biz"
    },
    {
        Name: 'William Brown',
        Department: 'Sociology',
        Current_Stage: '3',
        Cgpa: '8.7',
        ShareInfoRank: '880',
        Link: "example.co.uk"
    },
    {
        Name: 'Olivia Jones',
        Department: 'Political Science',
        Current_Stage: '2',
        Cgpa: '8.1',
        ShareInfoRank: '760',
        Link: "example.ca"
    },
    {
        Name: 'Daniel Garcia',
        Department: 'English',
        Current_Stage: '4',
        Cgpa: '9.3',
        ShareInfoRank: '970',
        Link: "example.au"
    },
    {
        Name: 'Mia Rodriguez',
        Department: 'Geography',
        Current_Stage: '1',
        Cgpa: '7.6',
        ShareInfoRank: '680',
        Link: "example.nz"
    },
    {
        Name: 'Alexander Jackson',
        Department: 'Philosophy',
        Current_Stage: '3',
        Cgpa: '8.6',
        ShareInfoRank: '870',
        Link: "example.ie"
    },
    {
        Name: 'Isabella White',
        Department: 'Anthropology',
        Current_Stage: '2',
        Cgpa: '8.2',
        ShareInfoRank: '770',
        Link: "example.uk"
    },
    {
        Name: 'James Taylor',
        Department: 'Fine Arts',
        Current_Stage: '4',
        Cgpa: '9.4',
        ShareInfoRank: '980',
        Link: "example.de"
    },
    {
        Name: 'Ava Lopez',
        Department: 'Music',
        Current_Stage: '1',
        Cgpa: '7.7',
        ShareInfoRank: '690',
        Link: "example.fr"
    },
    {
        Name: 'Ethan Harris',
        Department: 'Dance',
        Current_Stage: '3',
        Cgpa: '8.8',
        ShareInfoRank: '890',
        Link: "example.it"
    },
    {
        Name: 'Charlotte Clark',
        Department: 'Theater',
        Current_Stage: '2',
        Cgpa: '8.4',
        ShareInfoRank: '790',
        Link: "example.es"
    },
    {
        Name: 'Noah Lewis',
        Department: 'Film Studies',
        Current_Stage: '4',
        Cgpa: '9.6',
        ShareInfoRank: '990',
        Link: "example.jp"
    },
    {
        Name: 'Amelia Lee',
        Department: 'Fashion Design',
        Current_Stage: '1',
        Cgpa: '7.5',
        ShareInfoRank: '670',
        Link: "example.ch"
    }
];


export function CandidatesTable() {
    const [scrolled, setScrolled] = useState(false);

    const rows = data.map((row) => {
        const stages = [1, 2, 3, 4, 5].map((stage) => {
            const isCurrentStage = parseInt(row.Current_Stage) === stage;
            const isPreviousStage = parseInt(row.Current_Stage) > stage;
            const color = isCurrentStage || isPreviousStage ? 'green' : 'gray';
            const variant = isCurrentStage ? 'filled' : isPreviousStage ? 'light' : 'default';
                

            return (
                <Badge
                    mr={5}
                    key={stage}
                    radius={0}
                    color={color}
                    variant={variant}
                >
                    {stage}
                </Badge>
            );
        });

        return (
            <Table.Tr key={row.Name}>
                <Table.Td>
                    <Group gap="sm">
                        {/* Assuming there's an avatar URL available */}
                        {/* If not, replace it with an appropriate fallback */}
                        <Avatar size={26} src={row.avatar} radius={26} />
                        <Text size="sm" fw={500}>
                            {row.Name}
                        </Text>
                    </Group>
                </Table.Td>
                <Table.Td>{row.Department}</Table.Td>
                <Table.Td>
                    {stages}
                </Table.Td>
                <Table.Td>{row.Cgpa}</Table.Td>
                <Table.Td>{row.ShareInfoRank}</Table.Td>
                <Table.Td>
                    <Anchor href={row.Link} size='sm' target="_blank" underline="hover">
                        View Full Profile
                    </Anchor>
                </Table.Td>
            </Table.Tr>
        );
    });

    return (
        <ScrollArea h={600} onScrollPositionChange={({ y }) => setScrolled(y !== 0)}>
            <Table verticalSpacing="md" highlightOnHover withRowBorders={false} miw={700}>
                <Table.Thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
                    <Table.Tr>
                        <Table.Th>Name</Table.Th>
                        <Table.Th>Department</Table.Th>
                        <Table.Th>Current Stage</Table.Th>
                        <Table.Th>CGPA</Table.Th>
                        <Table.Th>ShareInfo Rank</Table.Th>
                        <Table.Th>Action</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{rows}</Table.Tbody>
            </Table>
        </ScrollArea>
    );
}
