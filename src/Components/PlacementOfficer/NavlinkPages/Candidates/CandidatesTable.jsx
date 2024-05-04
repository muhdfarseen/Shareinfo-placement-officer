import React, { useState } from 'react';
import { Table,Box, Flex, Avatar, Anchor, ScrollArea, UnstyledButton, Group, Text, Center, TextInput, rem, keys } from '@mantine/core';
import { IconSelector, IconChevronDown, IconChevronUp, IconSearch } from '@tabler/icons-react';
import classes from './CandidatesTable.module.css';
import cx from 'clsx';
import { useNavigate } from 'react-router-dom';

const data = [
  {
    "name": "Alice Smith",
    "photo": "pic1.jpg",
    "batch": "2023", // Random batch year
    "mobileNumber": "123 456 7890", // Random formatted mobile number
    "CGPA": "8.7", // Random CGPA
    "backlogs": "2", // Random number of backlogs
    "resumeURL": "resume_1.pdf"
  },
  {
    "name": "Bob Johnson",
    "photo": "pic2.png",
    "batch": "2022", // Random batch year
    "mobileNumber": "789 456 1230", // Random formatted mobile number
    "CGPA": "9.2", // Random CGPA
    "backlogs": "0", // Random number of backlogs
    "resumeURL": "resume_2.pdf"
  },
  {
    "name": "Madison Brown",
    "photo": "pic4.bmp", // Adjust photo based on your options
    "batch": "2024", // Random batch year
    "mobileNumber": "012 345 6789", // Random formatted mobile number
    "CGPA": "8.9", // Random CGPA
    "backlogs": "4", // Random number of backlogs
    "resumeURL": "resume_20.pdf"
  },
  {
    "name": "Alice Smith",
    "photo": "pic1.jpg",
    "batch": "2023", // Random batch year
    "mobileNumber": "123 456 7890", // Random formatted mobile number
    "CGPA": "8.7", // Random CGPA
    "backlogs": "2", // Random number of backlogs
    "resumeURL": "resume_1.pdf"
  },
  {
    "name": "Bob Johnson",
    "photo": "pic2.png",
    "batch": "2022", // Random batch year
    "mobileNumber": "789 456 1230", // Random formatted mobile number
    "CGPA": "9.2", // Random CGPA
    "backlogs": "0", // Random number of backlogs
    "resumeURL": "resume_2.pdf"
  },
  {
    "name": "Madison Brown",
    "photo": "pic4.bmp", // Adjust photo based on your options
    "batch": "2024", // Random batch year
    "mobileNumber": "012 345 6789", // Random formatted mobile number
    "CGPA": "8.9", // Random CGPA
    "backlogs": "4", // Random number of backlogs
    "resumeURL": "resume_20.pdf"
  },
  {
    "name": "Alice Smith",
    "photo": "pic1.jpg",
    "batch": "2023", // Random batch year
    "mobileNumber": "123 456 7890", // Random formatted mobile number
    "CGPA": "8.7", // Random CGPA
    "backlogs": "2", // Random number of backlogs
    "resumeURL": "resume_1.pdf"
  },
  {
    "name": "Bob Johnson",
    "photo": "pic2.png",
    "batch": "2022", // Random batch year
    "mobileNumber": "789 456 1230", // Random formatted mobile number
    "CGPA": "9.2", // Random CGPA
    "backlogs": "0", // Random number of backlogs
    "resumeURL": "resume_2.pdf"
  },
  {
    "name": "Madison Brown",
    "photo": "pic4.bmp", // Adjust photo based on your options
    "batch": "2024", // Random batch year
    "mobileNumber": "012 345 6789", // Random formatted mobile number
    "CGPA": "8.9", // Random CGPA
    "backlogs": "4", // Random number of backlogs
    "resumeURL": "resume_20.pdf"
  },
  {
    "name": "Alice Smith",
    "photo": "pic1.jpg",
    "batch": "2023", // Random batch year
    "mobileNumber": "123 456 7890", // Random formatted mobile number
    "CGPA": "8.7", // Random CGPA
    "backlogs": "2", // Random number of backlogs
    "resumeURL": "resume_1.pdf"
  },
  {
    "name": "Bob Johnson",
    "photo": "pic2.png",
    "batch": "2022", // Random batch year
    "mobileNumber": "789 456 1230", // Random formatted mobile number
    "CGPA": "9.2", // Random CGPA
    "backlogs": "0", // Random number of backlogs
    "resumeURL": "resume_2.pdf"
  },
  {
    "name": "Madison Brown",
    "photo": "pic4.bmp", // Adjust photo based on your options
    "batch": "2024", // Random batch year
    "mobileNumber": "012 345 6789", // Random formatted mobile number
    "CGPA": "8.9", // Random CGPA
    "backlogs": "4", // Random number of backlogs
    "resumeURL": "resume_20.pdf"
  },
  {
    "name": "Alice Smith",
    "photo": "pic1.jpg",
    "batch": "2023", // Random batch year
    "mobileNumber": "123 456 7890", // Random formatted mobile number
    "CGPA": "8.7", // Random CGPA
    "backlogs": "2", // Random number of backlogs
    "resumeURL": "resume_1.pdf"
  },
  {
    "name": "Bob Johnson",
    "photo": "pic2.png",
    "batch": "2022", // Random batch year
    "mobileNumber": "789 456 1230", // Random formatted mobile number
    "CGPA": "9.2", // Random CGPA
    "backlogs": "0", // Random number of backlogs
    "resumeURL": "resume_2.pdf"
  },
  {
    "name": "Madison Brown",
    "photo": "pic4.bmp", // Adjust photo based on your options
    "batch": "2024", // Random batch year
    "mobileNumber": "012 345 6789", // Random formatted mobile number
    "CGPA": "8.9", // Random CGPA
    "backlogs": "4", // Random number of backlogs
    "resumeURL": "resume_20.pdf"
  },
  {
    "name": "Alice Smith",
    "photo": "pic1.jpg",
    "batch": "2023", // Random batch year
    "mobileNumber": "123 456 7890", // Random formatted mobile number
    "CGPA": "8.7", // Random CGPA
    "backlogs": "2", // Random number of backlogs
    "resumeURL": "resume_1.pdf"
  },
  {
    "name": "Bob Johnson",
    "photo": "pic2.png",
    "batch": "2022", // Random batch year
    "mobileNumber": "789 456 1230", // Random formatted mobile number
    "CGPA": "9.2", // Random CGPA
    "backlogs": "0", // Random number of backlogs
    "resumeURL": "resume_2.pdf"
  },
  {
    "name": "Madison Brown",
    "photo": "pic4.bmp", // Adjust photo based on your options
    "batch": "2024", // Random batch year
    "mobileNumber": "012 345 6789", // Random formatted mobile number
    "CGPA": "8.9", // Random CGPA
    "backlogs": "4", // Random number of backlogs
    "resumeURL": "resume_20.pdf"
  },
  {
    "name": "Alice Smith",
    "photo": "pic1.jpg",
    "batch": "2023", // Random batch year
    "mobileNumber": "123 456 7890", // Random formatted mobile number
    "CGPA": "8.7", // Random CGPA
    "backlogs": "2", // Random number of backlogs
    "resumeURL": "resume_1.pdf"
  },
  {
    "name": "Bob Johnson",
    "photo": "pic2.png",
    "batch": "2022", // Random batch year
    "mobileNumber": "789 456 1230", // Random formatted mobile number
    "CGPA": "9.2", // Random CGPA
    "backlogs": "0", // Random number of backlogs
    "resumeURL": "resume_2.pdf"
  },
  {
    "name": "Madison Brown",
    "photo": "pic4.bmp", // Adjust photo based on your options
    "batch": "2024", // Random batch year
    "mobileNumber": "012 345 6789", // Random formatted mobile number
    "CGPA": "8.9", // Random CGPA
    "backlogs": "4", // Random number of backlogs
    "resumeURL": "resume_20.pdf"
  }
]


export const CandidatesTable = () => {
  const [scrolled, setScrolled] = useState(false);
  const [search, setSearch] = useState('');
  const [sortedData, setSortedData] = useState(data);
  const [sortBy, setSortBy] = useState(null);
  const [reverseSortDirection, setReverseSortDirection] = useState(false);

  const Navigate = useNavigate()

  const HandleNavigatonToProfile = () => {
    Navigate(`/dashboard/candidates-profile`);
  } 

  const setSorting = (field) => {
    const reversed = field === sortBy ? !reverseSortDirection : false;
    setReverseSortDirection(reversed);
    setSortBy(field);
    setSortedData(sortData(data, { sortBy: field, reversed, search }));
  };

  const handleSearchChange = (event) => {
    const { value } = event.currentTarget;
    setSearch(value);
    setSortedData(sortData(data, { sortBy, reversed: reverseSortDirection, search: value }));
  };

  const rows = sortedData.map((row) => (
    <Table.Tr key={row.name}>
      <Table.Td onClick={HandleNavigatonToProfile} >
        <Flex gap={10} align={"center"} >
          <Avatar src={row.photo} />
          {row.name}
        </Flex>

      </Table.Td>
      <Table.Td>{row.batch}</Table.Td>
      <Table.Td>{row.mobileNumber}</Table.Td>
      <Table.Td>{row.CGPA}</Table.Td>
      <Table.Td>{row.backlogs}</Table.Td>
      <Table.Td>
        <Anchor href={row.resumeURL} target="_blank" underline="hover">
          Resume
        </Anchor>
      </Table.Td>

    </Table.Tr>
  ));

  return (
    <>
      <TextInput
        placeholder="Search by any field"
        mb="md"
        leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
        value={search}
        onChange={handleSearchChange}
      />
      <Table horizontalSpacing="md" verticalSpacing="xs" miw={700} layout="fixed">
      <ScrollArea h={"calc(100vh - 350px)"} onScrollPositionChange={({ y }) => setScrolled(y !== 0)}>

        <Table.Tbody className={cx(classes.header, { [classes.scrolled]: scrolled })}>
          <Table.Tr>

            <Th
              sorted={sortBy === 'name'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('name')}
            >
              Name
            </Th>
            <Th
              sorted={sortBy === 'batch'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('batch')}
            >
              Batch
            </Th>

            <Th
              sorted={sortBy === 'mobileNumber'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('mobileNumber')}
            >
              Mobile
            </Th>

            <Th
              sorted={sortBy === 'CGPA'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('CGPA')}
            >
              CGPA
            </Th>

            <Th
              sorted={sortBy === 'backlogs'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('backlogs')}
            >
              backlogs
            </Th>

            <Th> Resume </Th>
          </Table.Tr>
        </Table.Tbody>


        <Table.Tbody>
          
              {rows.length > 0 ? (rows) : (

                <Table.Tr>
                  <Table.Td colSpan={Object.keys(data[0]).length}>
                    <Text fw={500} ta="center">
                      Nothing found
                    </Text>
                  </Table.Td>
                </Table.Tr>

              )}
           
          
        </Table.Tbody>
        </ScrollArea>

      </Table>
    </>
  );
}

function Th({ children, reversed, sorted, onSort }) {
  const Icon = sorted ? (reversed ? IconChevronUp : IconChevronDown) : IconSelector;
  return (
    <Table.Th className={classes.th}>
      <UnstyledButton onClick={onSort} className={classes.control}>
        <Group justify="space-between">
          <Text fw={500} fz="sm">
            {children}
          </Text>
          <Center className={classes.icon}>
            <Icon style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
          </Center>
        </Group>
      </UnstyledButton>
    </Table.Th>
  );
}

function filterData(data, search) {
  const query = search.toLowerCase().trim();
  return data.filter((item) =>
    keys(data[0]).some((key) => item[key].toLowerCase().includes(query))
  );
}

function sortData(data, payload) {
  const { sortBy } = payload;

  if (!sortBy) {
    return filterData(data, payload.search);
  }

  return filterData(
    [...data].sort((a, b) => {
      if (payload.reversed) {
        return b[sortBy].localeCompare(a[sortBy]);
      }

      return a[sortBy].localeCompare(b[sortBy]);
    }),
    payload.search
  );
}

