import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import Modal from '@mui/material/Modal';

import Link from '@mui/material/Link';

import {visuallyHidden} from '@mui/utils';

import {Button, Typography} from "@mui/material";

export const headCells = [
    {
        id: 'firstName',
        numeric: false,
        disablePadding: false,
        label: 'First_name',
    },
    {
        id: 'lastName',
        numeric: false,
        disablePadding: false,
        label: 'Last_name',
    },
    {
        id: 'title',
        numeric: false,
        disablePadding: false,
        label: 'Title',
    },
    {
        id: 'linkedInURL',
        numeric: false,
        disablePadding: false,
        label: 'LinkedIn',
    },
    {
        id: 'location',
        numeric: false,
        disablePadding: false,
        label: 'Location',
    },
    {
        id: 'email',
        numeric: false,
        disablePadding: false,
        label: 'Email',
    },
    {
        id: 'company',
        numeric: false,
        disablePadding: false,
        label: 'Company',
    },
    {
        id: 'companyLinkedInURL',
        numeric: false,
        disablePadding: false,
        label: 'Company_LinkedIn',
    },
    {
        id: 'industry',
        numeric: false,
        disablePadding: false,
        label: 'Industry',
    },
    {
        id: 'creationDate',
        numeric: false,
        disablePadding: false,
        label: 'Date',
    },
];

export const rows = [
    {
        id: 1,
        firstName: 'Alex',
        lastName: 'Dupre',
        title: 'Head of Recruiting',
        linkedInName: 'alex-dupre-3403346',
        linkedInURL: 'https://www.linkedin.com/in/alex-dupre-3403346/',
        location: 'Atlanta, Georgia, United States',
        email: 'adupre11@yahoo.com',
        company: 'Workstream',
        companyLinkedInName: 'company/10180844/',
        companyLinkedInURL: 'https://www.linkedin.com/company/10180844/',
        industry: 'Staffing and Recruiting',
        creationDate: '03/09/2022',
    },
    {
        id: 2,
        firstName: 'Ashley',
        lastName: 'Chou',
        title: 'Recruiting Manager',
        linkedInName: 'ashleymchou',
        linkedInURL: 'https://www.linkedin.com/in/ashleymchou/',
        location: 'Detroit Metropolitan Area',
        email: 'ashleymchou@gmail.com',
        company: 'Tendo',
        companyLinkedInName: 'company/70539424/',
        companyLinkedInURL: 'https://www.linkedin.com/company/70539424/',
        industry: 'Staffing and Recruiting',
        creationDate: '04/09/2022',
    },
    {
        id: 3,
        firstName: 'Miles',
        lastName: 'Parroco',
        title: 'Head of Recruiting',
        linkedInName: 'milesparroco',
        linkedInURL: 'https://www.linkedin.com/in/milesparroco/',
        location: 'Dallas, Texas, United States',
        email: 'bharding@optonline.net',
        company: 'Glooko',
        companyLinkedInName: 'company/2531044/',
        companyLinkedInURL: 'https://www.linkedin.com/company/2531044/',
        industry: 'Staffing and Recruiting',
        creationDate: '05/09/2022',
    },
    {
        id: 4,
        firstName: 'Gary',
        lastName: 'Levin',
        title: 'Lead Recruiter',
        linkedInName: 'garylevin',
        linkedInURL: 'https://www.linkedin.com/in/garylevin/',
        location: 'Nashville, Tennessee, United States',
        email: 'garylevin@live.com',
        company: 'Proof of Play',
        companyLinkedInName: 'company/78365129/',
        companyLinkedInURL: 'https://www.linkedin.com/company/78365129/',
        industry: 'Staffing and Recruiting',
        creationDate: '06/09/2022',
    },
    {
        id: 5,
        firstName: 'Stephen',
        lastName: 'Hamilton',
        title: 'Head of Talent Acquisition',
        linkedInName: 'stephenkhamilton',
        linkedInURL: 'https://www.linkedin.com/in/stephenkhamilton/',
        location: 'San Francisco, California, United States',
        email: 'hamirock@yahoo.com',
        company: 'Flex Logix Technologies, Inc.',
        companyLinkedInName: 'company/3533641/',
        companyLinkedInURL: 'https://www.linkedin.com/company/3533641/',
        industry: 'Staffing and Recruiting',
        creationDate: '07/09/2022',
    },
    {
        id: 6,
        firstName: 'Hennadii',
        lastName: 'Pysanka',
        title: 'Recruiting Manager Ukraine, EMEA, APAC regions',
        linkedInName: 'henry-pysanka',
        linkedInURL: 'https://www.linkedin.com/in/henry-pysanka/',
        location: 'Royal Oak, Michigan, United States',
        email: 'hpysanka@ukr.net',
        company: 'DataRobot',
        companyLinkedInName: 'company/2672915/',
        companyLinkedInURL: 'https://www.linkedin.com/company/2672915/',
        industry: 'Staffing and Recruiting',
        creationDate: '08/09/2022',
    },
    {
        id: 7,
        firstName: 'Kathleen',
        lastName: 'K.',
        title: 'Head of Business Recruiting',
        linkedInName: 'kathleenkiang',
        linkedInURL: 'https://www.linkedin.com/in/kathleenkiang/',
        location: 'Louisville, Kentucky, United States',
        email: 'kathleenk12@gmail.com',
        company: 'Notion',
        companyLinkedInName: 'company/30898036/',
        companyLinkedInURL: 'https://www.linkedin.com/company/30898036/',
        industry: 'Staffing and Recruiting',
        creationDate: '09/09/2022',
    },
    {
        id: 8,
        firstName: 'Katharine',
        lastName: 'Sykes',
        title: 'SSenior Director, Global Talent Acquisition',
        linkedInName: 'katharinesykes',
        linkedInURL: 'https://www.linkedin.com/in/katharinesykes/',
        location: 'New Alexandria, Virginia, United States',
        email: 'kgsykes@comcast.net',
        company: 'Zadara',
        companyLinkedInName: 'company/2160110/',
        companyLinkedInURL: 'https://www.linkedin.com/company/2160110/',
        industry: 'Staffing and Recruiting',
        creationDate: '10/09/2022',
    },
    {
        id: 9,
        firstName: 'Leah',
        lastName: 'Thomas',
        title: 'Director Of Recruiting',
        linkedInName: 'thomasleah',
        linkedInURL: 'https://www.linkedin.com/in/thomasleah/',
        location: 'Edison, New Jersey, United States',
        email: 'leahthomas386@gmail.com',
        company: 'Extend',
        companyLinkedInName: 'company/35509542/',
        companyLinkedInURL: 'https://www.linkedin.com/company/35509542/',
        industry: 'Staffing and Recruiting',
        creationDate: '11/09/2022',
    },
    {
        id: 10,
        firstName: 'Mike',
        lastName: 'Teodosio',
        title: 'Director Of Recruiting',
        linkedInName: 'miketeodosio',
        linkedInURL: 'https://www.linkedin.com/in/miketeodosio/',
        location: 'Edison, New Jersey, United States',
        email: 'mike.teodosio@gmail.com',
        company: 'Elation Health',
        companyLinkedInName: 'company/1311678/',
        companyLinkedInURL: 'https://www.linkedin.com/company/1311678/',
        industry: 'Staffing and Recruiting',
        creationDate: '12/09/2022',
    },
    {
        id: 11,
        firstName: 'Neha',
        lastName: 'Anand',
        title: 'Director Talent Acquisition/Recruiting',
        linkedInName: 'berryneha',
        linkedInURL: 'https://www.linkedin.com/in/berryneha/',
        location: 'Pennsylvania, United States',
        email: 'nh.berry@gmail.com',
        company: 'Wind Talker Innovations Inc.',
        companyLinkedInName: 'company/10691093/',
        companyLinkedInURL: 'https://www.linkedin.com/company/10691093/',
        industry: 'Staffing and Recruiting',
        creationDate: '13/09/2022',
    },
    {
        id: 12,
        firstName: 'Nick',
        lastName: 'Lewis',
        title: 'Head of GTM and Foundation Recruiting',
        linkedInName: 'nicklewis5189',
        linkedInURL: 'https://www.linkedin.com/in/nicklewis5189/',
        location: 'Atlanta, Georgia, United States',
        email: 'nslewis_57@yahoo.com',
        company: 'Notion',
        companyLinkedInName: 'company/30898036/',
        companyLinkedInURL: 'https://www.linkedin.com/company/30898036/',
        industry: 'Staffing and Recruiting',
        creationDate: '14/09/2022',
    },
    {
        id: 13,
        firstName: 'Preei',
        lastNae: 'Kumar',
        title: 'Head of Global Talent Acquisition',
        linkedInName: 'preetikm',
        linkedInURL: 'https://www.linkedin.com/in/preetikm/',
        location: 'San Francisco Bay Area',
        email: 'preetikumar18@gmail.com',
        company: 'Bugsnag',
        companyLinkedInName: 'company/3097847/',
        companyLinkedInURL: 'https://www.linkedin.com/company/3097847/',
        industry: 'Staffing and Recruiting',
        creationDate: '15/09/2022',
    },
    {
        id: 14,
        firstName: 'Seth',
        lastName: 'Dawson',
        title: 'Senior Director of Recruiting',
        linkedInName: 'sethjdawson',
        linkedInURL: 'https://www.linkedin.com/in/sethjdawson/',
        location: 'Los Angeles, California, United States',
        email: 'sethjdawson@gmail.com',
        company: 'Venture Backed Stealth Startup',
        companyLinkedInName: 'company/18860154/',
        companyLinkedInURL: 'https://www.linkedin.com/company/18860154/',
        industry: 'Staffing and Recruiting',
        creationDate: '16/09/2022',
    },
    {
        id: 15,
        firstName: 'Laís',
        lastName: 'Ferrarezi',
        title: 'Director of Talent Acquisition, Head of Talent Acquisition',
        linkedInName: 'laisferrarezi',
        linkedInURL: 'https://www.linkedin.com/in/laisferrarezi/',
        location: 'Chicago, Illinois, United States',
        email: 'lferrarezi@avenuecode.com',
        company: 'Avenue Code',
        companyLinkedInName: 'company/583166/',
        companyLinkedInURL: 'https://www.linkedin.com/company/583166/',
        industry: 'Staffing and Recruiting',
        creationDate: '17/09/2022',
    },
    {
        id: 16,
        firstName: 'Mackenzie',
        lastName: 'Moore',
        title: 'Recruiting Manager',
        linkedInName: 'recruitermac',
        linkedInURL: 'https://www.linkedin.com/in/recruitermac/',
        location: 'Greater Chicago Area',
        email: 'mackenzie.moore@density.io',
        company: 'Density',
        companyLinkedInName: 'company/7589398/',
        companyLinkedInURL: 'https://www.linkedin.com/company/7589398/',
        industry: 'Staffing and Recruiting',
        creationDate: '18/09/2022',
    },
    {
        id: 17,
        firstName: 'Alex',
        lastName: 'Dupre',
        title: 'Head of Recruiting',
        linkedInName: 'alex-dupre-3403346',
        linkedInURL: 'https://www.linkedin.com/in/alex-dupre-3403346/',
        location: 'Atlanta, Georgia, United States',
        email: 'adupre11@yahoo.com',
        company: 'Workstream',
        companyLinkedInName: 'company/10180844/',
        companyLinkedInURL: 'https://www.linkedin.com/company/10180844/',
        industry: 'Staffing and Recruiting',
        creationDate: '03/09/2022',
    },
    {
        id: 18,
        firstName: 'Ashley',
        lastName: 'Chou',
        title: 'Recruiting Manager',
        linkedInName: 'ashleymchou',
        linkedInURL: 'https://www.linkedin.com/in/ashleymchou/',
        location: 'Detroit Metropolitan Area',
        email: 'ashleymchou@gmail.com',
        company: 'Tendo',
        companyLinkedInName: 'company/70539424/',
        companyLinkedInURL: 'https://www.linkedin.com/company/70539424/',
        industry: 'Staffing and Recruiting',
        creationDate: '04/09/2022',
    },
    {
        id: 19,
        firstName: 'Miles',
        lastName: 'Parroco',
        title: 'Head of Recruiting',
        linkedInName: 'milesparroco',
        linkedInURL: 'https://www.linkedin.com/in/milesparroco/',
        location: 'Dallas, Texas, United States',
        email: 'bharding@optonline.net',
        company: 'Glooko',
        companyLinkedInName: 'company/2531044/',
        companyLinkedInURL: 'https://www.linkedin.com/company/2531044/',
        industry: 'Staffing and Recruiting',
        creationDate: '05/09/2022',
    },
    {
        id: 20,
        firstName: 'Gary',
        lastName: 'Levin',
        title: 'Lead Recruiter',
        linkedInName: 'garylevin',
        linkedInURL: 'https://www.linkedin.com/in/garylevin/',
        location: 'Nashville, Tennessee, United States',
        email: 'garylevin@live.com',
        company: 'Proof of Play',
        companyLinkedInName: 'company/78365129/',
        companyLinkedInURL: 'https://www.linkedin.com/company/78365129/',
        industry: 'Staffing and Recruiting',
        creationDate: '06/09/2022',
    },
    {
        id: 21,
        firstName: 'Stephen',
        lastName: 'Hamilton',
        title: 'Head of Talent Acquisition',
        linkedInName: 'stephenkhamilton',
        linkedInURL: 'https://www.linkedin.com/in/stephenkhamilton/',
        location: 'San Francisco, California, United States',
        email: 'hamirock@yahoo.com',
        company: 'Flex Logix Technologies, Inc.',
        companyLinkedInName: 'company/3533641/',
        companyLinkedInURL: 'https://www.linkedin.com/company/3533641/',
        industry: 'Staffing and Recruiting',
        creationDate: '07/09/2022',
    },
    {
        id: 22,
        firstName: 'Hennadii',
        lastName: 'Pysanka',
        title: 'Recruiting Manager Ukraine, EMEA, APAC regions',
        linkedInName: 'henry-pysanka',
        linkedInURL: 'https://www.linkedin.com/in/henry-pysanka/',
        location: 'Royal Oak, Michigan, United States',
        email: 'hpysanka@ukr.net',
        company: 'DataRobot',
        companyLinkedInName: 'company/2672915/',
        companyLinkedInURL: 'https://www.linkedin.com/company/2672915/',
        industry: 'Staffing and Recruiting',
        creationDate: '08/09/2022',
    },
    {
        id: 23,
        firstName: 'Kathleen',
        lastName: 'K.',
        title: 'Head of Business Recruiting',
        linkedInName: 'kathleenkiang',
        linkedInURL: 'https://www.linkedin.com/in/kathleenkiang/',
        location: 'Louisville, Kentucky, United States',
        email: 'kathleenk12@gmail.com',
        company: 'Notion',
        companyLinkedInName: 'company/30898036/',
        companyLinkedInURL: 'https://www.linkedin.com/company/30898036/',
        industry: 'Staffing and Recruiting',
        creationDate: '09/09/2022',
    },
    {
        id: 24,
        firstName: 'Katharine',
        lastName: 'Sykes',
        title: 'SSenior Director, Global Talent Acquisition',
        linkedInName: 'katharinesykes',
        linkedInURL: 'https://www.linkedin.com/in/katharinesykes/',
        location: 'New Alexandria, Virginia, United States',
        email: 'kgsykes@comcast.net',
        company: 'Zadara',
        companyLinkedInName: 'company/2160110/',
        companyLinkedInURL: 'https://www.linkedin.com/company/2160110/',
        industry: 'Staffing and Recruiting',
        creationDate: '10/09/2022',
    },
    {
        id: 25,
        firstName: 'Leah',
        lastName: 'Thomas',
        title: 'Director Of Recruiting',
        linkedInName: 'thomasleah',
        linkedInURL: 'https://www.linkedin.com/in/thomasleah/',
        location: 'Edison, New Jersey, United States',
        email: 'leahthomas386@gmail.com',
        company: 'Extend',
        companyLinkedInName: 'company/35509542/',
        companyLinkedInURL: 'https://www.linkedin.com/company/35509542/',
        industry: 'Staffing and Recruiting',
        creationDate: '11/09/2022',
    },
    {
        id: 26,
        firstName: 'Mike',
        lastName: 'Teodosio',
        title: 'Director Of Recruiting',
        linkedInName: 'miketeodosio',
        linkedInURL: 'https://www.linkedin.com/in/miketeodosio/',
        location: 'Edison, New Jersey, United States',
        email: 'mike.teodosio@gmail.com',
        company: 'Elation Health',
        companyLinkedInName: 'company/1311678/',
        companyLinkedInURL: 'https://www.linkedin.com/company/1311678/',
        industry: 'Staffing and Recruiting',
        creationDate: '12/09/2022',
    },
    {
        id: 27,
        firstName: 'Neha',
        lastName: 'Anand',
        title: 'Director Talent Acquisition/Recruiting',
        linkedInName: 'berryneha',
        linkedInURL: 'https://www.linkedin.com/in/berryneha/',
        location: 'Pennsylvania, United States',
        email: 'nh.berry@gmail.com',
        company: 'Wind Talker Innovations Inc.',
        companyLinkedInName: 'company/10691093/',
        companyLinkedInURL: 'https://www.linkedin.com/company/10691093/',
        industry: 'Staffing and Recruiting',
        creationDate: '13/09/2022',
    },
    {
        id: 28,
        firstName: 'Nick',
        lastName: 'Lewis',
        title: 'Head of GTM and Foundation Recruiting',
        linkedInName: 'nicklewis5189',
        linkedInURL: 'https://www.linkedin.com/in/nicklewis5189/',
        location: 'Atlanta, Georgia, United States',
        email: 'nslewis_57@yahoo.com',
        company: 'Notion',
        companyLinkedInName: 'company/30898036/',
        companyLinkedInURL: 'https://www.linkedin.com/company/30898036/',
        industry: 'Staffing and Recruiting',
        creationDate: '14/09/2022',
    },
    {
        id: 29,
        firstName: 'Preei',
        lastNae: 'Kumar',
        title: 'Head of Global Talent Acquisition',
        linkedInName: 'preetikm',
        linkedInURL: 'https://www.linkedin.com/in/preetikm/',
        location: 'San Francisco Bay Area',
        email: 'preetikumar18@gmail.com',
        company: 'Bugsnag',
        companyLinkedInName: 'company/3097847/',
        companyLinkedInURL: 'https://www.linkedin.com/company/3097847/',
        industry: 'Staffing and Recruiting',
        creationDate: '15/09/2022',
    },
    {
        id: 30,
        firstName: 'Seth',
        lastName: 'Dawson',
        title: 'Senior Director of Recruiting',
        linkedInName: 'sethjdawson',
        linkedInURL: 'https://www.linkedin.com/in/sethjdawson/',
        location: 'Los Angeles, California, United States',
        email: 'sethjdawson@gmail.com',
        company: 'Venture Backed Stealth Startup',
        companyLinkedInName: 'company/18860154/',
        companyLinkedInURL: 'https://www.linkedin.com/company/18860154/',
        industry: 'Staffing and Recruiting',
        creationDate: '16/09/2022',
    },
    {
        id: 31,
        firstName: 'Laís',
        lastName: 'Ferrarezi',
        title: 'Director of Talent Acquisition, Head of Talent Acquisition',
        linkedInName: 'laisferrarezi',
        linkedInURL: 'https://www.linkedin.com/in/laisferrarezi/',
        location: 'Chicago, Illinois, United States',
        email: 'lferrarezi@avenuecode.com',
        company: 'Avenue Code',
        companyLinkedInName: 'company/583166/',
        companyLinkedInURL: 'https://www.linkedin.com/company/583166/',
        industry: 'Staffing and Recruiting',
        creationDate: '17/09/2022',
    },
    {
        id: 32,
        firstName: 'Mackenzie',
        lastName: 'Moore',
        title: 'Recruiting Manager',
        linkedInName: 'recruitermac',
        linkedInURL: 'https://www.linkedin.com/in/recruitermac/',
        location: 'Greater Chicago Area',
        email: 'mackenzie.moore@density.io',
        company: 'Density',
        companyLinkedInName: 'company/7589398/',
        companyLinkedInURL: 'https://www.linkedin.com/company/7589398/',
        industry: 'Staffing and Recruiting',
        creationDate: '18/09/2022',
    },
    {
        id: 33,
        firstName: 'Alex',
        lastName: 'Dupre',
        title: 'Head of Recruiting',
        linkedInName: 'alex-dupre-3403346',
        linkedInURL: 'https://www.linkedin.com/in/alex-dupre-3403346/',
        location: 'Atlanta, Georgia, United States',
        email: 'adupre11@yahoo.com',
        company: 'Workstream',
        companyLinkedInName: 'company/10180844/',
        companyLinkedInURL: 'https://www.linkedin.com/company/10180844/',
        industry: 'Staffing and Recruiting',
        creationDate: '03/09/2022',
    },
    {
        id: 34,
        firstName: 'Ashley',
        lastName: 'Chou',
        title: 'Recruiting Manager',
        linkedInName: 'ashleymchou',
        linkedInURL: 'https://www.linkedin.com/in/ashleymchou/',
        location: 'Detroit Metropolitan Area',
        email: 'ashleymchou@gmail.com',
        company: 'Tendo',
        companyLinkedInName: 'company/70539424/',
        companyLinkedInURL: 'https://www.linkedin.com/company/70539424/',
        industry: 'Staffing and Recruiting',
        creationDate: '04/09/2022',
    },
    {
        id: 35,
        firstName: 'Miles',
        lastName: 'Parroco',
        title: 'Head of Recruiting',
        linkedInName: 'milesparroco',
        linkedInURL: 'https://www.linkedin.com/in/milesparroco/',
        location: 'Dallas, Texas, United States',
        email: 'bharding@optonline.net',
        company: 'Glooko',
        companyLinkedInName: 'company/2531044/',
        companyLinkedInURL: 'https://www.linkedin.com/company/2531044/',
        industry: 'Staffing and Recruiting',
        creationDate: '05/09/2022',
    },
    {
        id: 36,
        firstName: 'Gary',
        lastName: 'Levin',
        title: 'Lead Recruiter',
        linkedInName: 'garylevin',
        linkedInURL: 'https://www.linkedin.com/in/garylevin/',
        location: 'Nashville, Tennessee, United States',
        email: 'garylevin@live.com',
        company: 'Proof of Play',
        companyLinkedInName: 'company/78365129/',
        companyLinkedInURL: 'https://www.linkedin.com/company/78365129/',
        industry: 'Staffing and Recruiting',
        creationDate: '06/09/2022',
    },
    {
        id: 37,
        firstName: 'Stephen',
        lastName: 'Hamilton',
        title: 'Head of Talent Acquisition',
        linkedInName: 'stephenkhamilton',
        linkedInURL: 'https://www.linkedin.com/in/stephenkhamilton/',
        location: 'San Francisco, California, United States',
        email: 'hamirock@yahoo.com',
        company: 'Flex Logix Technologies, Inc.',
        companyLinkedInName: 'company/3533641/',
        companyLinkedInURL: 'https://www.linkedin.com/company/3533641/',
        industry: 'Staffing and Recruiting',
        creationDate: '07/09/2022',
    },
    {
        id: 38,
        firstName: 'Hennadii',
        lastName: 'Pysanka',
        title: 'Recruiting Manager Ukraine, EMEA, APAC regions',
        linkedInName: 'henry-pysanka',
        linkedInURL: 'https://www.linkedin.com/in/henry-pysanka/',
        location: 'Royal Oak, Michigan, United States',
        email: 'hpysanka@ukr.net',
        company: 'DataRobot',
        companyLinkedInName: 'company/2672915/',
        companyLinkedInURL: 'https://www.linkedin.com/company/2672915/',
        industry: 'Staffing and Recruiting',
        creationDate: '08/09/2022',
    },
    {
        id: 39,
        firstName: 'Kathleen',
        lastName: 'K.',
        title: 'Head of Business Recruiting',
        linkedInName: 'kathleenkiang',
        linkedInURL: 'https://www.linkedin.com/in/kathleenkiang/',
        location: 'Louisville, Kentucky, United States',
        email: 'kathleenk12@gmail.com',
        company: 'Notion',
        companyLinkedInName: 'company/30898036/',
        companyLinkedInURL: 'https://www.linkedin.com/company/30898036/',
        industry: 'Staffing and Recruiting',
        creationDate: '09/09/2022',
    },
    {
        id: 40,
        firstName: 'Katharine',
        lastName: 'Sykes',
        title: 'SSenior Director, Global Talent Acquisition',
        linkedInName: 'katharinesykes',
        linkedInURL: 'https://www.linkedin.com/in/katharinesykes/',
        location: 'New Alexandria, Virginia, United States',
        email: 'kgsykes@comcast.net',
        company: 'Zadara',
        companyLinkedInName: 'company/2160110/',
        companyLinkedInURL: 'https://www.linkedin.com/company/2160110/',
        industry: 'Staffing and Recruiting',
        creationDate: '10/09/2022',
    },
    {
        id: 41,
        firstName: 'Leah',
        lastName: 'Thomas',
        title: 'Director Of Recruiting',
        linkedInName: 'thomasleah',
        linkedInURL: 'https://www.linkedin.com/in/thomasleah/',
        location: 'Edison, New Jersey, United States',
        email: 'leahthomas386@gmail.com',
        company: 'Extend',
        companyLinkedInName: 'company/35509542/',
        companyLinkedInURL: 'https://www.linkedin.com/company/35509542/',
        industry: 'Staffing and Recruiting',
        creationDate: '11/09/2022',
    },
    {
        id: 42,
        firstName: 'Mike',
        lastName: 'Teodosio',
        title: 'Director Of Recruiting',
        linkedInName: 'miketeodosio',
        linkedInURL: 'https://www.linkedin.com/in/miketeodosio/',
        location: 'Edison, New Jersey, United States',
        email: 'mike.teodosio@gmail.com',
        company: 'Elation Health',
        companyLinkedInName: 'company/1311678/',
        companyLinkedInURL: 'https://www.linkedin.com/company/1311678/',
        industry: 'Staffing and Recruiting',
        creationDate: '12/09/2022',
    },
    {
        id: 43,
        firstName: 'Neha',
        lastName: 'Anand',
        title: 'Director Talent Acquisition/Recruiting',
        linkedInName: 'berryneha',
        linkedInURL: 'https://www.linkedin.com/in/berryneha/',
        location: 'Pennsylvania, United States',
        email: 'nh.berry@gmail.com',
        company: 'Wind Talker Innovations Inc.',
        companyLinkedInName: 'company/10691093/',
        companyLinkedInURL: 'https://www.linkedin.com/company/10691093/',
        industry: 'Staffing and Recruiting',
        creationDate: '13/09/2022',
    },
    {
        id: 44,
        firstName: 'Nick',
        lastName: 'Lewis',
        title: 'Head of GTM and Foundation Recruiting',
        linkedInName: 'nicklewis5189',
        linkedInURL: 'https://www.linkedin.com/in/nicklewis5189/',
        location: 'Atlanta, Georgia, United States',
        email: 'nslewis_57@yahoo.com',
        company: 'Notion',
        companyLinkedInName: 'company/30898036/',
        companyLinkedInURL: 'https://www.linkedin.com/company/30898036/',
        industry: 'Staffing and Recruiting',
        creationDate: '14/09/2022',
    },
    {
        id: 45,
        firstName: 'Preei',
        lastNae: 'Kumar',
        title: 'Head of Global Talent Acquisition',
        linkedInName: 'preetikm',
        linkedInURL: 'https://www.linkedin.com/in/preetikm/',
        location: 'San Francisco Bay Area',
        email: 'preetikumar18@gmail.com',
        company: 'Bugsnag',
        companyLinkedInName: 'company/3097847/',
        companyLinkedInURL: 'https://www.linkedin.com/company/3097847/',
        industry: 'Staffing and Recruiting',
        creationDate: '15/09/2022',
    },
    {
        id: 46,
        firstName: 'Seth',
        lastName: 'Dawson',
        title: 'Senior Director of Recruiting',
        linkedInName: 'sethjdawson',
        linkedInURL: 'https://www.linkedin.com/in/sethjdawson/',
        location: 'Los Angeles, California, United States',
        email: 'sethjdawson@gmail.com',
        company: 'Venture Backed Stealth Startup',
        companyLinkedInName: 'company/18860154/',
        companyLinkedInURL: 'https://www.linkedin.com/company/18860154/',
        industry: 'Staffing and Recruiting',
        creationDate: '16/09/2022',
    },
    {
        id: 47,
        firstName: 'Laís',
        lastName: 'Ferrarezi',
        title: 'Director of Talent Acquisition, Head of Talent Acquisition',
        linkedInName: 'laisferrarezi',
        linkedInURL: 'https://www.linkedin.com/in/laisferrarezi/',
        location: 'Chicago, Illinois, United States',
        email: 'lferrarezi@avenuecode.com',
        company: 'Avenue Code',
        companyLinkedInName: 'company/583166/',
        companyLinkedInURL: 'https://www.linkedin.com/company/583166/',
        industry: 'Staffing and Recruiting',
        creationDate: '17/09/2022',
    },
    {
        id: 48,
        firstName: 'Mackenzie',
        lastName: 'Moore',
        title: 'Recruiting Manager',
        linkedInName: 'recruitermac',
        linkedInURL: 'https://www.linkedin.com/in/recruitermac/',
        location: 'Greater Chicago Area',
        email: 'mackenzie.moore@density.io',
        company: 'Density',
        companyLinkedInName: 'company/7589398/',
        companyLinkedInURL: 'https://www.linkedin.com/company/7589398/',
        industry: 'Staffing and Recruiting',
        creationDate: '18/09/2022',
    },
    {
        id: 49,
        firstName: 'Alex',
        lastName: 'Dupre',
        title: 'Head of Recruiting',
        linkedInName: 'alex-dupre-3403346',
        linkedInURL: 'https://www.linkedin.com/in/alex-dupre-3403346/',
        location: 'Atlanta, Georgia, United States',
        email: 'adupre11@yahoo.com',
        company: 'Workstream',
        companyLinkedInName: 'company/10180844/',
        companyLinkedInURL: 'https://www.linkedin.com/company/10180844/',
        industry: 'Staffing and Recruiting',
        creationDate: '03/09/2022',
    },
    {
        id: 50,
        firstName: 'Ashley',
        lastName: 'Chou',
        title: 'Recruiting Manager',
        linkedInName: 'ashleymchou',
        linkedInURL: 'https://www.linkedin.com/in/ashleymchou/',
        location: 'Detroit Metropolitan Area',
        email: 'ashleymchou@gmail.com',
        company: 'Tendo',
        companyLinkedInName: 'company/70539424/',
        companyLinkedInURL: 'https://www.linkedin.com/company/70539424/',
        industry: 'Staffing and Recruiting',
        creationDate: '04/09/2022',
    },
    {
        id: 51,
        firstName: 'Miles',
        lastName: 'Parroco',
        title: 'Head of Recruiting',
        linkedInName: 'milesparroco',
        linkedInURL: 'https://www.linkedin.com/in/milesparroco/',
        location: 'Dallas, Texas, United States',
        email: 'bharding@optonline.net',
        company: 'Glooko',
        companyLinkedInName: 'company/2531044/',
        companyLinkedInURL: 'https://www.linkedin.com/company/2531044/',
        industry: 'Staffing and Recruiting',
        creationDate: '05/09/2022',
    },
    {
        id: 52,
        firstName: 'Gary',
        lastName: 'Levin',
        title: 'Lead Recruiter',
        linkedInName: 'garylevin',
        linkedInURL: 'https://www.linkedin.com/in/garylevin/',
        location: 'Nashville, Tennessee, United States',
        email: 'garylevin@live.com',
        company: 'Proof of Play',
        companyLinkedInName: 'company/78365129/',
        companyLinkedInURL: 'https://www.linkedin.com/company/78365129/',
        industry: 'Staffing and Recruiting',
        creationDate: '06/09/2022',
    },
    {
        id: 53,
        firstName: 'Stephen',
        lastName: 'Hamilton',
        title: 'Head of Talent Acquisition',
        linkedInName: 'stephenkhamilton',
        linkedInURL: 'https://www.linkedin.com/in/stephenkhamilton/',
        location: 'San Francisco, California, United States',
        email: 'hamirock@yahoo.com',
        company: 'Flex Logix Technologies, Inc.',
        companyLinkedInName: 'company/3533641/',
        companyLinkedInURL: 'https://www.linkedin.com/company/3533641/',
        industry: 'Staffing and Recruiting',
        creationDate: '07/09/2022',
    },
    {
        id: 54,
        firstName: 'Hennadii',
        lastName: 'Pysanka',
        title: 'Recruiting Manager Ukraine, EMEA, APAC regions',
        linkedInName: 'henry-pysanka',
        linkedInURL: 'https://www.linkedin.com/in/henry-pysanka/',
        location: 'Royal Oak, Michigan, United States',
        email: 'hpysanka@ukr.net',
        company: 'DataRobot',
        companyLinkedInName: 'company/2672915/',
        companyLinkedInURL: 'https://www.linkedin.com/company/2672915/',
        industry: 'Staffing and Recruiting',
        creationDate: '08/09/2022',
    },
    {
        id: 55,
        firstName: 'Kathleen',
        lastName: 'K.',
        title: 'Head of Business Recruiting',
        linkedInName: 'kathleenkiang',
        linkedInURL: 'https://www.linkedin.com/in/kathleenkiang/',
        location: 'Louisville, Kentucky, United States',
        email: 'kathleenk12@gmail.com',
        company: 'Notion',
        companyLinkedInName: 'company/30898036/',
        companyLinkedInURL: 'https://www.linkedin.com/company/30898036/',
        industry: 'Staffing and Recruiting',
        creationDate: '09/09/2022',
    },
    {
        id: 56,
        firstName: 'Katharine',
        lastName: 'Sykes',
        title: 'SSenior Director, Global Talent Acquisition',
        linkedInName: 'katharinesykes',
        linkedInURL: 'https://www.linkedin.com/in/katharinesykes/',
        location: 'New Alexandria, Virginia, United States',
        email: 'kgsykes@comcast.net',
        company: 'Zadara',
        companyLinkedInName: 'company/2160110/',
        companyLinkedInURL: 'https://www.linkedin.com/company/2160110/',
        industry: 'Staffing and Recruiting',
        creationDate: '10/09/2022',
    },
    {
        id: 57,
        firstName: 'Leah',
        lastName: 'Thomas',
        title: 'Director Of Recruiting',
        linkedInName: 'thomasleah',
        linkedInURL: 'https://www.linkedin.com/in/thomasleah/',
        location: 'Edison, New Jersey, United States',
        email: 'leahthomas386@gmail.com',
        company: 'Extend',
        companyLinkedInName: 'company/35509542/',
        companyLinkedInURL: 'https://www.linkedin.com/company/35509542/',
        industry: 'Staffing and Recruiting',
        creationDate: '11/09/2022',
    },
    {
        id: 58,
        firstName: 'Mike',
        lastName: 'Teodosio',
        title: 'Director Of Recruiting',
        linkedInName: 'miketeodosio',
        linkedInURL: 'https://www.linkedin.com/in/miketeodosio/',
        location: 'Edison, New Jersey, United States',
        email: 'mike.teodosio@gmail.com',
        company: 'Elation Health',
        companyLinkedInName: 'company/1311678/',
        companyLinkedInURL: 'https://www.linkedin.com/company/1311678/',
        industry: 'Staffing and Recruiting',
        creationDate: '12/09/2022',
    },
    {
        id: 59,
        firstName: 'Neha',
        lastName: 'Anand',
        title: 'Director Talent Acquisition/Recruiting',
        linkedInName: 'berryneha',
        linkedInURL: 'https://www.linkedin.com/in/berryneha/',
        location: 'Pennsylvania, United States',
        email: 'nh.berry@gmail.com',
        company: 'Wind Talker Innovations Inc.',
        companyLinkedInName: 'company/10691093/',
        companyLinkedInURL: 'https://www.linkedin.com/company/10691093/',
        industry: 'Staffing and Recruiting',
        creationDate: '13/09/2022',
    },
    {
        id: 60,
        firstName: 'Nick',
        lastName: 'Lewis',
        title: 'Head of GTM and Foundation Recruiting',
        linkedInName: 'nicklewis5189',
        linkedInURL: 'https://www.linkedin.com/in/nicklewis5189/',
        location: 'Atlanta, Georgia, United States',
        email: 'nslewis_57@yahoo.com',
        company: 'Notion',
        companyLinkedInName: 'company/30898036/',
        companyLinkedInURL: 'https://www.linkedin.com/company/30898036/',
        industry: 'Staffing and Recruiting',
        creationDate: '14/09/2022',
    },
    {
        id: 61,
        firstName: 'Preei',
        lastNae: 'Kumar',
        title: 'Head of Global Talent Acquisition',
        linkedInName: 'preetikm',
        linkedInURL: 'https://www.linkedin.com/in/preetikm/',
        location: 'San Francisco Bay Area',
        email: 'preetikumar18@gmail.com',
        company: 'Bugsnag',
        companyLinkedInName: 'company/3097847/',
        companyLinkedInURL: 'https://www.linkedin.com/company/3097847/',
        industry: 'Staffing and Recruiting',
        creationDate: '15/09/2022',
    },
    {
        id: 62,
        firstName: 'Seth',
        lastName: 'Dawson',
        title: 'Senior Director of Recruiting',
        linkedInName: 'sethjdawson',
        linkedInURL: 'https://www.linkedin.com/in/sethjdawson/',
        location: 'Los Angeles, California, United States',
        email: 'sethjdawson@gmail.com',
        company: 'Venture Backed Stealth Startup',
        companyLinkedInName: 'company/18860154/',
        companyLinkedInURL: 'https://www.linkedin.com/company/18860154/',
        industry: 'Staffing and Recruiting',
        creationDate: '16/09/2022',
    },
    {
        id: 63,
        firstName: 'Laís',
        lastName: 'Ferrarezi',
        title: 'Director of Talent Acquisition, Head of Talent Acquisition',
        linkedInName: 'laisferrarezi',
        linkedInURL: 'https://www.linkedin.com/in/laisferrarezi/',
        location: 'Chicago, Illinois, United States',
        email: 'lferrarezi@avenuecode.com',
        company: 'Avenue Code',
        companyLinkedInName: 'company/583166/',
        companyLinkedInURL: 'https://www.linkedin.com/company/583166/',
        industry: 'Staffing and Recruiting',
        creationDate: '17/09/2022',
    },
    {
        id: 64,
        firstName: 'Mackenzie',
        lastName: 'Moore',
        title: 'Recruiting Manager',
        linkedInName: 'recruitermac',
        linkedInURL: 'https://www.linkedin.com/in/recruitermac/',
        location: 'Greater Chicago Area',
        email: 'mackenzie.moore@density.io',
        company: 'Density',
        companyLinkedInName: 'company/7589398/',
        companyLinkedInURL: 'https://www.linkedin.com/company/7589398/',
        industry: 'Staffing and Recruiting',
        creationDate: '18/09/2022',
    },
    {
        id: 65,
        firstName: 'Alex',
        lastName: 'Dupre',
        title: 'Head of Recruiting',
        linkedInName: 'alex-dupre-3403346',
        linkedInURL: 'https://www.linkedin.com/in/alex-dupre-3403346/',
        location: 'Atlanta, Georgia, United States',
        email: 'adupre11@yahoo.com',
        company: 'Workstream',
        companyLinkedInName: 'company/10180844/',
        companyLinkedInURL: 'https://www.linkedin.com/company/10180844/',
        industry: 'Staffing and Recruiting',
        creationDate: '03/09/2022',
    },
    {
        id: 66,
        firstName: 'Ashley',
        lastName: 'Chou',
        title: 'Recruiting Manager',
        linkedInName: 'ashleymchou',
        linkedInURL: 'https://www.linkedin.com/in/ashleymchou/',
        location: 'Detroit Metropolitan Area',
        email: 'ashleymchou@gmail.com',
        company: 'Tendo',
        companyLinkedInName: 'company/70539424/',
        companyLinkedInURL: 'https://www.linkedin.com/company/70539424/',
        industry: 'Staffing and Recruiting',
        creationDate: '04/09/2022',
    },
    {
        id: 67,
        firstName: 'Miles',
        lastName: 'Parroco',
        title: 'Head of Recruiting',
        linkedInName: 'milesparroco',
        linkedInURL: 'https://www.linkedin.com/in/milesparroco/',
        location: 'Dallas, Texas, United States',
        email: 'bharding@optonline.net',
        company: 'Glooko',
        companyLinkedInName: 'company/2531044/',
        companyLinkedInURL: 'https://www.linkedin.com/company/2531044/',
        industry: 'Staffing and Recruiting',
        creationDate: '05/09/2022',
    },
    {
        id: 68,
        firstName: 'Gary',
        lastName: 'Levin',
        title: 'Lead Recruiter',
        linkedInName: 'garylevin',
        linkedInURL: 'https://www.linkedin.com/in/garylevin/',
        location: 'Nashville, Tennessee, United States',
        email: 'garylevin@live.com',
        company: 'Proof of Play',
        companyLinkedInName: 'company/78365129/',
        companyLinkedInURL: 'https://www.linkedin.com/company/78365129/',
        industry: 'Staffing and Recruiting',
        creationDate: '06/09/2022',
    },
    {
        id: 69,
        firstName: 'Stephen',
        lastName: 'Hamilton',
        title: 'Head of Talent Acquisition',
        linkedInName: 'stephenkhamilton',
        linkedInURL: 'https://www.linkedin.com/in/stephenkhamilton/',
        location: 'San Francisco, California, United States',
        email: 'hamirock@yahoo.com',
        company: 'Flex Logix Technologies, Inc.',
        companyLinkedInName: 'company/3533641/',
        companyLinkedInURL: 'https://www.linkedin.com/company/3533641/',
        industry: 'Staffing and Recruiting',
        creationDate: '07/09/2022',
    },
    {
        id: 70,
        firstName: 'Hennadii',
        lastName: 'Pysanka',
        title: 'Recruiting Manager Ukraine, EMEA, APAC regions',
        linkedInName: 'henry-pysanka',
        linkedInURL: 'https://www.linkedin.com/in/henry-pysanka/',
        location: 'Royal Oak, Michigan, United States',
        email: 'hpysanka@ukr.net',
        company: 'DataRobot',
        companyLinkedInName: 'company/2672915/',
        companyLinkedInURL: 'https://www.linkedin.com/company/2672915/',
        industry: 'Staffing and Recruiting',
        creationDate: '08/09/2022',
    },
    {
        id: 71,
        firstName: 'Kathleen',
        lastName: 'K.',
        title: 'Head of Business Recruiting',
        linkedInName: 'kathleenkiang',
        linkedInURL: 'https://www.linkedin.com/in/kathleenkiang/',
        location: 'Louisville, Kentucky, United States',
        email: 'kathleenk12@gmail.com',
        company: 'Notion',
        companyLinkedInName: 'company/30898036/',
        companyLinkedInURL: 'https://www.linkedin.com/company/30898036/',
        industry: 'Staffing and Recruiting',
        creationDate: '09/09/2022',
    },
    {
        id: 72,
        firstName: 'Katharine',
        lastName: 'Sykes',
        title: 'SSenior Director, Global Talent Acquisition',
        linkedInName: 'katharinesykes',
        linkedInURL: 'https://www.linkedin.com/in/katharinesykes/',
        location: 'New Alexandria, Virginia, United States',
        email: 'kgsykes@comcast.net',
        company: 'Zadara',
        companyLinkedInName: 'company/2160110/',
        companyLinkedInURL: 'https://www.linkedin.com/company/2160110/',
        industry: 'Staffing and Recruiting',
        creationDate: '10/09/2022',
    },
    {
        id: 73,
        firstName: 'Leah',
        lastName: 'Thomas',
        title: 'Director Of Recruiting',
        linkedInName: 'thomasleah',
        linkedInURL: 'https://www.linkedin.com/in/thomasleah/',
        location: 'Edison, New Jersey, United States',
        email: 'leahthomas386@gmail.com',
        company: 'Extend',
        companyLinkedInName: 'company/35509542/',
        companyLinkedInURL: 'https://www.linkedin.com/company/35509542/',
        industry: 'Staffing and Recruiting',
        creationDate: '11/09/2022',
    },
    {
        id: 74,
        firstName: 'Mike',
        lastName: 'Teodosio',
        title: 'Director Of Recruiting',
        linkedInName: 'miketeodosio',
        linkedInURL: 'https://www.linkedin.com/in/miketeodosio/',
        location: 'Edison, New Jersey, United States',
        email: 'mike.teodosio@gmail.com',
        company: 'Elation Health',
        companyLinkedInName: 'company/1311678/',
        companyLinkedInURL: 'https://www.linkedin.com/company/1311678/',
        industry: 'Staffing and Recruiting',
        creationDate: '12/09/2022',
    },
    {
        id: 75,
        firstName: 'Neha',
        lastName: 'Anand',
        title: 'Director Talent Acquisition/Recruiting',
        linkedInName: 'berryneha',
        linkedInURL: 'https://www.linkedin.com/in/berryneha/',
        location: 'Pennsylvania, United States',
        email: 'nh.berry@gmail.com',
        company: 'Wind Talker Innovations Inc.',
        companyLinkedInName: 'company/10691093/',
        companyLinkedInURL: 'https://www.linkedin.com/company/10691093/',
        industry: 'Staffing and Recruiting',
        creationDate: '13/09/2022',
    },
    {
        id: 76,
        firstName: 'Nick',
        lastName: 'Lewis',
        title: 'Head of GTM and Foundation Recruiting',
        linkedInName: 'nicklewis5189',
        linkedInURL: 'https://www.linkedin.com/in/nicklewis5189/',
        location: 'Atlanta, Georgia, United States',
        email: 'nslewis_57@yahoo.com',
        company: 'Notion',
        companyLinkedInName: 'company/30898036/',
        companyLinkedInURL: 'https://www.linkedin.com/company/30898036/',
        industry: 'Staffing and Recruiting',
        creationDate: '14/09/2022',
    },
    {
        id: 77,
        firstName: 'Preei',
        lastNae: 'Kumar',
        title: 'Head of Global Talent Acquisition',
        linkedInName: 'preetikm',
        linkedInURL: 'https://www.linkedin.com/in/preetikm/',
        location: 'San Francisco Bay Area',
        email: 'preetikumar18@gmail.com',
        company: 'Bugsnag',
        companyLinkedInName: 'company/3097847/',
        companyLinkedInURL: 'https://www.linkedin.com/company/3097847/',
        industry: 'Staffing and Recruiting',
        creationDate: '15/09/2022',
    },
    {
        id: 78,
        firstName: 'Seth',
        lastName: 'Dawson',
        title: 'Senior Director of Recruiting',
        linkedInName: 'sethjdawson',
        linkedInURL: 'https://www.linkedin.com/in/sethjdawson/',
        location: 'Los Angeles, California, United States',
        email: 'sethjdawson@gmail.com',
        company: 'Venture Backed Stealth Startup',
        companyLinkedInName: 'company/18860154/',
        companyLinkedInURL: 'https://www.linkedin.com/company/18860154/',
        industry: 'Staffing and Recruiting',
        creationDate: '16/09/2022',
    },
    {
        id: 79,
        firstName: 'Laís',
        lastName: 'Ferrarezi',
        title: 'Director of Talent Acquisition, Head of Talent Acquisition',
        linkedInName: 'laisferrarezi',
        linkedInURL: 'https://www.linkedin.com/in/laisferrarezi/',
        location: 'Chicago, Illinois, United States',
        email: 'lferrarezi@avenuecode.com',
        company: 'Avenue Code',
        companyLinkedInName: 'company/583166/',
        companyLinkedInURL: 'https://www.linkedin.com/company/583166/',
        industry: 'Staffing and Recruiting',
        creationDate: '17/09/2022',
    },
    {
        id: 80,
        firstName: 'Mackenzie',
        lastName: 'Moore',
        title: 'Recruiting Manager',
        linkedInName: 'recruitermac',
        linkedInURL: 'https://www.linkedin.com/in/recruitermac/',
        location: 'Greater Chicago Area',
        email: 'mackenzie.moore@density.io',
        company: 'Density',
        companyLinkedInName: 'company/7589398/',
        companyLinkedInURL: 'https://www.linkedin.com/company/7589398/',
        industry: 'Staffing and Recruiting',
        creationDate: '18/09/2022',
    },
    {
        id: 81,
        firstName: 'Alex',
        lastName: 'Dupre',
        title: 'Head of Recruiting',
        linkedInName: 'alex-dupre-3403346',
        linkedInURL: 'https://www.linkedin.com/in/alex-dupre-3403346/',
        location: 'Atlanta, Georgia, United States',
        email: 'adupre11@yahoo.com',
        company: 'Workstream',
        companyLinkedInName: 'company/10180844/',
        companyLinkedInURL: 'https://www.linkedin.com/company/10180844/',
        industry: 'Staffing and Recruiting',
        creationDate: '03/09/2022',
    },
    {
        id: 82,
        firstName: 'Ashley',
        lastName: 'Chou',
        title: 'Recruiting Manager',
        linkedInName: 'ashleymchou',
        linkedInURL: 'https://www.linkedin.com/in/ashleymchou/',
        location: 'Detroit Metropolitan Area',
        email: 'ashleymchou@gmail.com',
        company: 'Tendo',
        companyLinkedInName: 'company/70539424/',
        companyLinkedInURL: 'https://www.linkedin.com/company/70539424/',
        industry: 'Staffing and Recruiting',
        creationDate: '04/09/2022',
    },
    {
        id: 83,
        firstName: 'Miles',
        lastName: 'Parroco',
        title: 'Head of Recruiting',
        linkedInName: 'milesparroco',
        linkedInURL: 'https://www.linkedin.com/in/milesparroco/',
        location: 'Dallas, Texas, United States',
        email: 'bharding@optonline.net',
        company: 'Glooko',
        companyLinkedInName: 'company/2531044/',
        companyLinkedInURL: 'https://www.linkedin.com/company/2531044/',
        industry: 'Staffing and Recruiting',
        creationDate: '05/09/2022',
    },
    {
        id: 84,
        firstName: 'Gary',
        lastName: 'Levin',
        title: 'Lead Recruiter',
        linkedInName: 'garylevin',
        linkedInURL: 'https://www.linkedin.com/in/garylevin/',
        location: 'Nashville, Tennessee, United States',
        email: 'garylevin@live.com',
        company: 'Proof of Play',
        companyLinkedInName: 'company/78365129/',
        companyLinkedInURL: 'https://www.linkedin.com/company/78365129/',
        industry: 'Staffing and Recruiting',
        creationDate: '06/09/2022',
    },
    {
        id: 85,
        firstName: 'Stephen',
        lastName: 'Hamilton',
        title: 'Head of Talent Acquisition',
        linkedInName: 'stephenkhamilton',
        linkedInURL: 'https://www.linkedin.com/in/stephenkhamilton/',
        location: 'San Francisco, California, United States',
        email: 'hamirock@yahoo.com',
        company: 'Flex Logix Technologies, Inc.',
        companyLinkedInName: 'company/3533641/',
        companyLinkedInURL: 'https://www.linkedin.com/company/3533641/',
        industry: 'Staffing and Recruiting',
        creationDate: '07/09/2022',
    },
    {
        id: 86,
        firstName: 'Hennadii',
        lastName: 'Pysanka',
        title: 'Recruiting Manager Ukraine, EMEA, APAC regions',
        linkedInName: 'henry-pysanka',
        linkedInURL: 'https://www.linkedin.com/in/henry-pysanka/',
        location: 'Royal Oak, Michigan, United States',
        email: 'hpysanka@ukr.net',
        company: 'DataRobot',
        companyLinkedInName: 'company/2672915/',
        companyLinkedInURL: 'https://www.linkedin.com/company/2672915/',
        industry: 'Staffing and Recruiting',
        creationDate: '08/09/2022',
    },
    {
        id: 87,
        firstName: 'Kathleen',
        lastName: 'K.',
        title: 'Head of Business Recruiting',
        linkedInName: 'kathleenkiang',
        linkedInURL: 'https://www.linkedin.com/in/kathleenkiang/',
        location: 'Louisville, Kentucky, United States',
        email: 'kathleenk12@gmail.com',
        company: 'Notion',
        companyLinkedInName: 'company/30898036/',
        companyLinkedInURL: 'https://www.linkedin.com/company/30898036/',
        industry: 'Staffing and Recruiting',
        creationDate: '09/09/2022',
    },
    {
        id: 88,
        firstName: 'Katharine',
        lastName: 'Sykes',
        title: 'SSenior Director, Global Talent Acquisition',
        linkedInName: 'katharinesykes',
        linkedInURL: 'https://www.linkedin.com/in/katharinesykes/',
        location: 'New Alexandria, Virginia, United States',
        email: 'kgsykes@comcast.net',
        company: 'Zadara',
        companyLinkedInName: 'company/2160110/',
        companyLinkedInURL: 'https://www.linkedin.com/company/2160110/',
        industry: 'Staffing and Recruiting',
        creationDate: '10/09/2022',
    },
    {
        id: 89,
        firstName: 'Leah',
        lastName: 'Thomas',
        title: 'Director Of Recruiting',
        linkedInName: 'thomasleah',
        linkedInURL: 'https://www.linkedin.com/in/thomasleah/',
        location: 'Edison, New Jersey, United States',
        email: 'leahthomas386@gmail.com',
        company: 'Extend',
        companyLinkedInName: 'company/35509542/',
        companyLinkedInURL: 'https://www.linkedin.com/company/35509542/',
        industry: 'Staffing and Recruiting',
        creationDate: '11/09/2022',
    },
    {
        id: 90,
        firstName: 'Mike',
        lastName: 'Teodosio',
        title: 'Director Of Recruiting',
        linkedInName: 'miketeodosio',
        linkedInURL: 'https://www.linkedin.com/in/miketeodosio/',
        location: 'Edison, New Jersey, United States',
        email: 'mike.teodosio@gmail.com',
        company: 'Elation Health',
        companyLinkedInName: 'company/1311678/',
        companyLinkedInURL: 'https://www.linkedin.com/company/1311678/',
        industry: 'Staffing and Recruiting',
        creationDate: '12/09/2022',
    },
    {
        id: 91,
        firstName: 'Neha',
        lastName: 'Anand',
        title: 'Director Talent Acquisition/Recruiting',
        linkedInName: 'berryneha',
        linkedInURL: 'https://www.linkedin.com/in/berryneha/',
        location: 'Pennsylvania, United States',
        email: 'nh.berry@gmail.com',
        company: 'Wind Talker Innovations Inc.',
        companyLinkedInName: 'company/10691093/',
        companyLinkedInURL: 'https://www.linkedin.com/company/10691093/',
        industry: 'Staffing and Recruiting',
        creationDate: '13/09/2022',
    },
    {
        id: 92,
        firstName: 'Nick',
        lastName: 'Lewis',
        title: 'Head of GTM and Foundation Recruiting',
        linkedInName: 'nicklewis5189',
        linkedInURL: 'https://www.linkedin.com/in/nicklewis5189/',
        location: 'Atlanta, Georgia, United States',
        email: 'nslewis_57@yahoo.com',
        company: 'Notion',
        companyLinkedInName: 'company/30898036/',
        companyLinkedInURL: 'https://www.linkedin.com/company/30898036/',
        industry: 'Staffing and Recruiting',
        creationDate: '14/09/2022',
    },
    {
        id: 93,
        firstName: 'Preei',
        lastNae: 'Kumar',
        title: 'Head of Global Talent Acquisition',
        linkedInName: 'preetikm',
        linkedInURL: 'https://www.linkedin.com/in/preetikm/',
        location: 'San Francisco Bay Area',
        email: 'preetikumar18@gmail.com',
        company: 'Bugsnag',
        companyLinkedInName: 'company/3097847/',
        companyLinkedInURL: 'https://www.linkedin.com/company/3097847/',
        industry: 'Staffing and Recruiting',
        creationDate: '15/09/2022',
    },
    {
        id: 94,
        firstName: 'Seth',
        lastName: 'Dawson',
        title: 'Senior Director of Recruiting',
        linkedInName: 'sethjdawson',
        linkedInURL: 'https://www.linkedin.com/in/sethjdawson/',
        location: 'Los Angeles, California, United States',
        email: 'sethjdawson@gmail.com',
        company: 'Venture Backed Stealth Startup',
        companyLinkedInName: 'company/18860154/',
        companyLinkedInURL: 'https://www.linkedin.com/company/18860154/',
        industry: 'Staffing and Recruiting',
        creationDate: '16/09/2022',
    },
    {
        id: 95,
        firstName: 'Laís',
        lastName: 'Ferrarezi',
        title: 'Director of Talent Acquisition, Head of Talent Acquisition',
        linkedInName: 'laisferrarezi',
        linkedInURL: 'https://www.linkedin.com/in/laisferrarezi/',
        location: 'Chicago, Illinois, United States',
        email: 'lferrarezi@avenuecode.com',
        company: 'Avenue Code',
        companyLinkedInName: 'company/583166/',
        companyLinkedInURL: 'https://www.linkedin.com/company/583166/',
        industry: 'Staffing and Recruiting',
        creationDate: '17/09/2022',
    },
    {
        id: 96,
        firstName: 'Mackenzie',
        lastName: 'Moore',
        title: 'Recruiting Manager',
        linkedInName: 'recruitermac',
        linkedInURL: 'https://www.linkedin.com/in/recruitermac/',
        location: 'Greater Chicago Area',
        email: 'mackenzie.moore@density.io',
        company: 'Density',
        companyLinkedInName: 'company/7589398/',
        companyLinkedInURL: 'https://www.linkedin.com/company/7589398/',
        industry: 'Staffing and Recruiting',
        creationDate: '18/09/2022',
    },
    {
        id: 97,
        firstName: 'Alex',
        lastName: 'Dupre',
        title: 'Head of Recruiting',
        linkedInName: 'alex-dupre-3403346',
        linkedInURL: 'https://www.linkedin.com/in/alex-dupre-3403346/',
        location: 'Atlanta, Georgia, United States',
        email: 'adupre11@yahoo.com',
        company: 'Workstream',
        companyLinkedInName: 'company/10180844/',
        companyLinkedInURL: 'https://www.linkedin.com/company/10180844/',
        industry: 'Staffing and Recruiting',
        creationDate: '03/09/2022',
    },
    {
        id: 98,
        firstName: 'Ashley',
        lastName: 'Chou',
        title: 'Recruiting Manager',
        linkedInName: 'ashleymchou',
        linkedInURL: 'https://www.linkedin.com/in/ashleymchou/',
        location: 'Detroit Metropolitan Area',
        email: 'ashleymchou@gmail.com',
        company: 'Tendo',
        companyLinkedInName: 'company/70539424/',
        companyLinkedInURL: 'https://www.linkedin.com/company/70539424/',
        industry: 'Staffing and Recruiting',
        creationDate: '04/09/2022',
    },
    {
        id: 99,
        firstName: 'Miles',
        lastName: 'Parroco',
        title: 'Head of Recruiting',
        linkedInName: 'milesparroco',
        linkedInURL: 'https://www.linkedin.com/in/milesparroco/',
        location: 'Dallas, Texas, United States',
        email: 'bharding@optonline.net',
        company: 'Glooko',
        companyLinkedInName: 'company/2531044/',
        companyLinkedInURL: 'https://www.linkedin.com/company/2531044/',
        industry: 'Staffing and Recruiting',
        creationDate: '05/09/2022',
    },
    {
        id: 104,
        firstName: 'Gary',
        lastName: 'Levin',
        title: 'Lead Recruiter',
        linkedInName: 'garylevin',
        linkedInURL: 'https://www.linkedin.com/in/garylevin/',
        location: 'Nashville, Tennessee, United States',
        email: 'garylevin@live.com',
        company: 'Proof of Play',
        companyLinkedInName: 'company/78365129/',
        companyLinkedInURL: 'https://www.linkedin.com/company/78365129/',
        industry: 'Staffing and Recruiting',
        creationDate: '06/09/2022',
    },
    {
        id: 105,
        firstName: 'Stephen',
        lastName: 'Hamilton',
        title: 'Head of Talent Acquisition',
        linkedInName: 'stephenkhamilton',
        linkedInURL: 'https://www.linkedin.com/in/stephenkhamilton/',
        location: 'San Francisco, California, United States',
        email: 'hamirock@yahoo.com',
        company: 'Flex Logix Technologies, Inc.',
        companyLinkedInName: 'company/3533641/',
        companyLinkedInURL: 'https://www.linkedin.com/company/3533641/',
        industry: 'Staffing and Recruiting',
        creationDate: '07/09/2022',
    },
    {
        id: 106,
        firstName: 'Hennadii',
        lastName: 'Pysanka',
        title: 'Recruiting Manager Ukraine, EMEA, APAC regions',
        linkedInName: 'henry-pysanka',
        linkedInURL: 'https://www.linkedin.com/in/henry-pysanka/',
        location: 'Royal Oak, Michigan, United States',
        email: 'hpysanka@ukr.net',
        company: 'DataRobot',
        companyLinkedInName: 'company/2672915/',
        companyLinkedInURL: 'https://www.linkedin.com/company/2672915/',
        industry: 'Staffing and Recruiting',
        creationDate: '08/09/2022',
    },
    {
        id: 107,
        firstName: 'Kathleen',
        lastName: 'K.',
        title: 'Head of Business Recruiting',
        linkedInName: 'kathleenkiang',
        linkedInURL: 'https://www.linkedin.com/in/kathleenkiang/',
        location: 'Louisville, Kentucky, United States',
        email: 'kathleenk12@gmail.com',
        company: 'Notion',
        companyLinkedInName: 'company/30898036/',
        companyLinkedInURL: 'https://www.linkedin.com/company/30898036/',
        industry: 'Staffing and Recruiting',
        creationDate: '09/09/2022',
    },
    {
        id: 108,
        firstName: 'Katharine',
        lastName: 'Sykes',
        title: 'SSenior Director, Global Talent Acquisition',
        linkedInName: 'katharinesykes',
        linkedInURL: 'https://www.linkedin.com/in/katharinesykes/',
        location: 'New Alexandria, Virginia, United States',
        email: 'kgsykes@comcast.net',
        company: 'Zadara',
        companyLinkedInName: 'company/2160110/',
        companyLinkedInURL: 'https://www.linkedin.com/company/2160110/',
        industry: 'Staffing and Recruiting',
        creationDate: '10/09/2022',
    },
    {
        id: 109,
        firstName: 'Leah',
        lastName: 'Thomas',
        title: 'Director Of Recruiting',
        linkedInName: 'thomasleah',
        linkedInURL: 'https://www.linkedin.com/in/thomasleah/',
        location: 'Edison, New Jersey, United States',
        email: 'leahthomas386@gmail.com',
        company: 'Extend',
        companyLinkedInName: 'company/35509542/',
        companyLinkedInURL: 'https://www.linkedin.com/company/35509542/',
        industry: 'Staffing and Recruiting',
        creationDate: '11/09/2022',
    },
    {
        id: 110,
        firstName: 'Mike',
        lastName: 'Teodosio',
        title: 'Director Of Recruiting',
        linkedInName: 'miketeodosio',
        linkedInURL: 'https://www.linkedin.com/in/miketeodosio/',
        location: 'Edison, New Jersey, United States',
        email: 'mike.teodosio@gmail.com',
        company: 'Elation Health',
        companyLinkedInName: 'company/1311678/',
        companyLinkedInURL: 'https://www.linkedin.com/company/1311678/',
        industry: 'Staffing and Recruiting',
        creationDate: '12/09/2022',
    },
    {
        id: 111,
        firstName: 'Neha',
        lastName: 'Anand',
        title: 'Director Talent Acquisition/Recruiting',
        linkedInName: 'berryneha',
        linkedInURL: 'https://www.linkedin.com/in/berryneha/',
        location: 'Pennsylvania, United States',
        email: 'nh.berry@gmail.com',
        company: 'Wind Talker Innovations Inc.',
        companyLinkedInName: 'company/10691093/',
        companyLinkedInURL: 'https://www.linkedin.com/company/10691093/',
        industry: 'Staffing and Recruiting',
        creationDate: '13/09/2022',
    },
    {
        id: 112,
        firstName: 'Nick',
        lastName: 'Lewis',
        title: 'Head of GTM and Foundation Recruiting',
        linkedInName: 'nicklewis5189',
        linkedInURL: 'https://www.linkedin.com/in/nicklewis5189/',
        location: 'Atlanta, Georgia, United States',
        email: 'nslewis_57@yahoo.com',
        company: 'Notion',
        companyLinkedInName: 'company/30898036/',
        companyLinkedInURL: 'https://www.linkedin.com/company/30898036/',
        industry: 'Staffing and Recruiting',
        creationDate: '14/09/2022',
    },
    {
        id: 113,
        firstName: 'Preei',
        lastNae: 'Kumar',
        title: 'Head of Global Talent Acquisition',
        linkedInName: 'preetikm',
        linkedInURL: 'https://www.linkedin.com/in/preetikm/',
        location: 'San Francisco Bay Area',
        email: 'preetikumar18@gmail.com',
        company: 'Bugsnag',
        companyLinkedInName: 'company/3097847/',
        companyLinkedInURL: 'https://www.linkedin.com/company/3097847/',
        industry: 'Staffing and Recruiting',
        creationDate: '15/09/2022',
    },
    {
        id: 114,
        firstName: 'Seth',
        lastName: 'Dawson',
        title: 'Senior Director of Recruiting',
        linkedInName: 'sethjdawson',
        linkedInURL: 'https://www.linkedin.com/in/sethjdawson/',
        location: 'Los Angeles, California, United States',
        email: 'sethjdawson@gmail.com',
        company: 'Venture Backed Stealth Startup',
        companyLinkedInName: 'company/18860154/',
        companyLinkedInURL: 'https://www.linkedin.com/company/18860154/',
        industry: 'Staffing and Recruiting',
        creationDate: '16/09/2022',
    },
    {
        id: 115,
        firstName: 'Laís',
        lastName: 'Ferrarezi',
        title: 'Director of Talent Acquisition, Head of Talent Acquisition',
        linkedInName: 'laisferrarezi',
        linkedInURL: 'https://www.linkedin.com/in/laisferrarezi/',
        location: 'Chicago, Illinois, United States',
        email: 'lferrarezi@avenuecode.com',
        company: 'Avenue Code',
        companyLinkedInName: 'company/583166/',
        companyLinkedInURL: 'https://www.linkedin.com/company/583166/',
        industry: 'Staffing and Recruiting',
        creationDate: '17/09/2022',
    },
    {
        id: 116,
        firstName: 'Mackenzie',
        lastName: 'Moore',
        title: 'Recruiting Manager',
        linkedInName: 'recruitermac',
        linkedInURL: 'https://www.linkedin.com/in/recruitermac/',
        location: 'Greater Chicago Area',
        email: 'mackenzie.moore@density.io',
        company: 'Density',
        companyLinkedInName: 'company/7589398/',
        companyLinkedInURL: 'https://www.linkedin.com/company/7589398/',
        industry: 'Staffing and Recruiting',
        creationDate: '18/09/2022',
    },
    {
        id: 201,
        firstName: 'Alex',
        lastName: 'Dupre',
        title: 'Head of Recruiting',
        linkedInName: 'alex-dupre-3403346',
        linkedInURL: 'https://www.linkedin.com/in/alex-dupre-3403346/',
        location: 'Atlanta, Georgia, United States',
        email: 'adupre11@yahoo.com',
        company: 'Workstream',
        companyLinkedInName: 'company/10180844/',
        companyLinkedInURL: 'https://www.linkedin.com/company/10180844/',
        industry: 'Staffing and Recruiting',
        creationDate: '03/09/2022',
    },
    {
        id: 202,
        firstName: 'Ashley',
        lastName: 'Chou',
        title: 'Recruiting Manager',
        linkedInName: 'ashleymchou',
        linkedInURL: 'https://www.linkedin.com/in/ashleymchou/',
        location: 'Detroit Metropolitan Area',
        email: 'ashleymchou@gmail.com',
        company: 'Tendo',
        companyLinkedInName: 'company/70539424/',
        companyLinkedInURL: 'https://www.linkedin.com/company/70539424/',
        industry: 'Staffing and Recruiting',
        creationDate: '04/09/2022',
    },
    {
        id: 203,
        firstName: 'Miles',
        lastName: 'Parroco',
        title: 'Head of Recruiting',
        linkedInName: 'milesparroco',
        linkedInURL: 'https://www.linkedin.com/in/milesparroco/',
        location: 'Dallas, Texas, United States',
        email: 'bharding@optonline.net',
        company: 'Glooko',
        companyLinkedInName: 'company/2531044/',
        companyLinkedInURL: 'https://www.linkedin.com/company/2531044/',
        industry: 'Staffing and Recruiting',
        creationDate: '05/09/2022',
    },
    {
        id: 204,
        firstName: 'Gary',
        lastName: 'Levin',
        title: 'Lead Recruiter',
        linkedInName: 'garylevin',
        linkedInURL: 'https://www.linkedin.com/in/garylevin/',
        location: 'Nashville, Tennessee, United States',
        email: 'garylevin@live.com',
        company: 'Proof of Play',
        companyLinkedInName: 'company/78365129/',
        companyLinkedInURL: 'https://www.linkedin.com/company/78365129/',
        industry: 'Staffing and Recruiting',
        creationDate: '06/09/2022',
    },
    {
        id: 205,
        firstName: 'Stephen',
        lastName: 'Hamilton',
        title: 'Head of Talent Acquisition',
        linkedInName: 'stephenkhamilton',
        linkedInURL: 'https://www.linkedin.com/in/stephenkhamilton/',
        location: 'San Francisco, California, United States',
        email: 'hamirock@yahoo.com',
        company: 'Flex Logix Technologies, Inc.',
        companyLinkedInName: 'company/3533641/',
        companyLinkedInURL: 'https://www.linkedin.com/company/3533641/',
        industry: 'Staffing and Recruiting',
        creationDate: '07/09/2022',
    },
    {
        id: 206,
        firstName: 'Hennadii',
        lastName: 'Pysanka',
        title: 'Recruiting Manager Ukraine, EMEA, APAC regions',
        linkedInName: 'henry-pysanka',
        linkedInURL: 'https://www.linkedin.com/in/henry-pysanka/',
        location: 'Royal Oak, Michigan, United States',
        email: 'hpysanka@ukr.net',
        company: 'DataRobot',
        companyLinkedInName: 'company/2672915/',
        companyLinkedInURL: 'https://www.linkedin.com/company/2672915/',
        industry: 'Staffing and Recruiting',
        creationDate: '08/09/2022',
    },
    {
        id: 207,
        firstName: 'Kathleen',
        lastName: 'K.',
        title: 'Head of Business Recruiting',
        linkedInName: 'kathleenkiang',
        linkedInURL: 'https://www.linkedin.com/in/kathleenkiang/',
        location: 'Louisville, Kentucky, United States',
        email: 'kathleenk12@gmail.com',
        company: 'Notion',
        companyLinkedInName: 'company/30898036/',
        companyLinkedInURL: 'https://www.linkedin.com/company/30898036/',
        industry: 'Staffing and Recruiting',
        creationDate: '09/09/2022',
    },
    {
        id: 208,
        firstName: 'Katharine',
        lastName: 'Sykes',
        title: 'SSenior Director, Global Talent Acquisition',
        linkedInName: 'katharinesykes',
        linkedInURL: 'https://www.linkedin.com/in/katharinesykes/',
        location: 'New Alexandria, Virginia, United States',
        email: 'kgsykes@comcast.net',
        company: 'Zadara',
        companyLinkedInName: 'company/2160110/',
        companyLinkedInURL: 'https://www.linkedin.com/company/2160110/',
        industry: 'Staffing and Recruiting',
        creationDate: '10/09/2022',
    },
    {
        id: 209,
        firstName: 'Leah',
        lastName: 'Thomas',
        title: 'Director Of Recruiting',
        linkedInName: 'thomasleah',
        linkedInURL: 'https://www.linkedin.com/in/thomasleah/',
        location: 'Edison, New Jersey, United States',
        email: 'leahthomas386@gmail.com',
        company: 'Extend',
        companyLinkedInName: 'company/35509542/',
        companyLinkedInURL: 'https://www.linkedin.com/company/35509542/',
        industry: 'Staffing and Recruiting',
        creationDate: '11/09/2022',
    },
    {
        id: 210,
        firstName: 'Mike',
        lastName: 'Teodosio',
        title: 'Director Of Recruiting',
        linkedInName: 'miketeodosio',
        linkedInURL: 'https://www.linkedin.com/in/miketeodosio/',
        location: 'Edison, New Jersey, United States',
        email: 'mike.teodosio@gmail.com',
        company: 'Elation Health',
        companyLinkedInName: 'company/1311678/',
        companyLinkedInURL: 'https://www.linkedin.com/company/1311678/',
        industry: 'Staffing and Recruiting',
        creationDate: '12/09/2022',
    },
    {
        id: 211,
        firstName: 'Neha',
        lastName: 'Anand',
        title: 'Director Talent Acquisition/Recruiting',
        linkedInName: 'berryneha',
        linkedInURL: 'https://www.linkedin.com/in/berryneha/',
        location: 'Pennsylvania, United States',
        email: 'nh.berry@gmail.com',
        company: 'Wind Talker Innovations Inc.',
        companyLinkedInName: 'company/10691093/',
        companyLinkedInURL: 'https://www.linkedin.com/company/10691093/',
        industry: 'Staffing and Recruiting',
        creationDate: '13/09/2022',
    },
    {
        id: 212,
        firstName: 'Nick',
        lastName: 'Lewis',
        title: 'Head of GTM and Foundation Recruiting',
        linkedInName: 'nicklewis5189',
        linkedInURL: 'https://www.linkedin.com/in/nicklewis5189/',
        location: 'Atlanta, Georgia, United States',
        email: 'nslewis_57@yahoo.com',
        company: 'Notion',
        companyLinkedInName: 'company/30898036/',
        companyLinkedInURL: 'https://www.linkedin.com/company/30898036/',
        industry: 'Staffing and Recruiting',
        creationDate: '14/09/2022',
    },
    {
        id: 213,
        firstName: 'Preei',
        lastNae: 'Kumar',
        title: 'Head of Global Talent Acquisition',
        linkedInName: 'preetikm',
        linkedInURL: 'https://www.linkedin.com/in/preetikm/',
        location: 'San Francisco Bay Area',
        email: 'preetikumar18@gmail.com',
        company: 'Bugsnag',
        companyLinkedInName: 'company/3097847/',
        companyLinkedInURL: 'https://www.linkedin.com/company/3097847/',
        industry: 'Staffing and Recruiting',
        creationDate: '15/09/2022',
    },
    {
        id: 214,
        firstName: 'Seth',
        lastName: 'Dawson',
        title: 'Senior Director of Recruiting',
        linkedInName: 'sethjdawson',
        linkedInURL: 'https://www.linkedin.com/in/sethjdawson/',
        location: 'Los Angeles, California, United States',
        email: 'sethjdawson@gmail.com',
        company: 'Venture Backed Stealth Startup',
        companyLinkedInName: 'company/18860154/',
        companyLinkedInURL: 'https://www.linkedin.com/company/18860154/',
        industry: 'Staffing and Recruiting',
        creationDate: '16/09/2022',
    },
    {
        id: 215,
        firstName: 'Laís',
        lastName: 'Ferrarezi',
        title: 'Director of Talent Acquisition, Head of Talent Acquisition',
        linkedInName: 'laisferrarezi',
        linkedInURL: 'https://www.linkedin.com/in/laisferrarezi/',
        location: 'Chicago, Illinois, United States',
        email: 'lferrarezi@avenuecode.com',
        company: 'Avenue Code',
        companyLinkedInName: 'company/583166/',
        companyLinkedInURL: 'https://www.linkedin.com/company/583166/',
        industry: 'Staffing and Recruiting',
        creationDate: '17/09/2022',
    },
    {
        id: 216,
        firstName: 'Mackenzie',
        lastName: 'Moore',
        title: 'Recruiting Manager',
        linkedInName: 'recruitermac',
        linkedInURL: 'https://www.linkedin.com/in/recruitermac/',
        location: 'Greater Chicago Area',
        email: 'mackenzie.moore@density.io',
        company: 'Density',
        companyLinkedInName: 'company/7589398/',
        companyLinkedInURL: 'https://www.linkedin.com/company/7589398/',
        industry: 'Staffing and Recruiting',
        creationDate: '18/09/2022',
    },
];

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
};

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

function EnhancedTableHead(props) {
    const {
        onSelectAllClick,
        order,
        orderBy,
        numSelected,
        rowCount,
        onRequestSort,
    } = props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        color="primary"
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{
                            'aria-label': 'select all desserts',
                        }}
                    />
                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            <Typography sx={{fontWeight: 'bold'}}>{headCell.label}</Typography>
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(25);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = rows.map((n) => n.id);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, id) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1)
            );
        }

        setSelected(newSelected);
    };

    const [open, setOpen] = React.useState(false);
    const [openId, setOpenId] = React.useState(0);

    const handleModalClick = (event, id) => {
        console.log(id)
        setOpen(true);
        setOpenId((id - 1))
        console.log(openId)
    };

    const handleClose = () => setOpen(false);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const isSelected = (id) => selected.indexOf(id) !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    return (
        <>
            <Box sx={{width: '100%'}}>
                <Paper sx={{width: '100%', mb: 2}}>
                    <TableContainer sx={{overflow: 'scroll', height: 650}}>
                        <Table
                            sx={{minWidth: 750}}
                            aria-labelledby="tableTitle"
                            size={'medium'}
                        >
                            <EnhancedTableHead
                                numSelected={selected.length}
                                order={order}
                                orderBy={orderBy}
                                onSelectAllClick={handleSelectAllClick}
                                onRequestSort={handleRequestSort}
                                rowCount={rows.length}
                            />
                            <TableBody>
                                {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
                                {stableSort(rows, getComparator(order, orderBy))
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row, index) => {
                                        const isItemSelected = isSelected(row.id);
                                        const labelId = `enhanced-table-checkbox-${index}`;

                                        return (
                                            <TableRow
                                                hover
                                                role="checkbox"
                                                aria-checked={isItemSelected}
                                                tabIndex={-1}
                                                key={row.id}
                                                selected={isItemSelected}
                                            >
                                                <TableCell padding="checkbox">
                                                    <Checkbox
                                                        onClick={(event) => handleClick(event, row.id)}
                                                        color="primary"
                                                        checked={isItemSelected}
                                                        inputProps={{
                                                            'aria-labelledby': labelId,
                                                        }}
                                                    />
                                                </TableCell>
                                                <TableCell onClick={(event) => handleModalClick(event, row.id)}
                                                           sx={{textOverflow: 'ellipsis'}}>
                                                    {row.firstName}
                                                </TableCell>
                                                <TableCell
                                                    onClick={(event) => handleModalClick(event, row.id)}>{row.lastName}</TableCell>
                                                <TableCell onClick={(event) => handleModalClick(event, row.id)}
                                                           sx={{textOverflow: 'ellipsis'}}>
                                                    {row.title}
                                                </TableCell>
                                                <TableCell>
                                                    <Link
                                                        href={row.linkedInURL}
                                                        rel="noreferrer"
                                                        target="_blank"
                                                        sx={{display: 'flex', alignItems: 'center'}}
                                                    >
                                                        {row.linkedInName}
                                                    </Link>
                                                </TableCell>
                                                <TableCell
                                                    onClick={(event) => handleModalClick(event, row.id)}>{row.location}</TableCell>
                                                <TableCell>
                                                    <Link
                                                        href={`mailto:${row.email}`}
                                                        rel="noreferrer"
                                                        target="_blank"
                                                        sx={{display: 'flex', alignItems: 'center'}}
                                                    >
                                                        {row.email}
                                                    </Link>
                                                </TableCell>
                                                <TableCell
                                                    onClick={(event) => handleModalClick(event, row.id)}>{row.company}</TableCell>
                                                <TableCell>
                                                    <Link
                                                        href={row.companyLinkedInURL}
                                                        rel="noreferrer"
                                                        target="_blank"
                                                        sx={{display: 'flex', alignItems: 'center'}}
                                                    >
                                                        {row.companyLinkedInName}
                                                    </Link>
                                                </TableCell>
                                                <TableCell
                                                    onClick={(event) => handleModalClick(event, row.id)}>{row.industry}</TableCell>
                                                <TableCell
                                                    onClick={(event) => handleModalClick(event, row.id)}>{row.creationDate}</TableCell>
                                            </TableRow>
                                        );
                                    })}
                                {emptyRows > 0 && (
                                    <TableRow
                                        style={{
                                            height: 33 * emptyRows,
                                        }}
                                    >
                                        <TableCell colSpan={6}/>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[25, 50, 100]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>
            </Box>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Paper sx={{p: 3}}>
                        <Typography variant={'h3'}>
                        {`${rows[openId].firstName} ${rows[openId].lastName}`}
                        </Typography>
                        <Typography variant={'h5'} sx={{mt:2, mb:4}}>
                        {rows[openId].title}
                        </Typography>
                        <Typography  sx={{display: 'flex', mb:1}}>
                        LinkedIn:&nbsp;
                        <Link
                            href={rows[openId].linkedInURL}
                            rel="noreferrer"
                            target="_blank"
                            sx={{display: 'flex', alignItems: 'center'}}
                        >
                            {rows[openId].linkedInName}
                        </Link>
                        </Typography>
                        <Typography  sx={{mb:1}}>
                            adress:&nbsp;{rows[openId].location}
                        </Typography>
                        <Typography  sx={{display: 'flex', mb:1}}>
                            email:&nbsp;
                        <Link
                            href={`mailto:${rows[openId].email}`}
                            rel="noreferrer"
                            target="_blank"
                            sx={{display: 'flex', alignItems: 'center'}}
                        >
                            {rows[openId].email}
                        </Link>
                        </Typography>
                        <Typography  sx={{display: 'flex', mb:1}}>
                            Company:&nbsp;{rows[openId].company}
                        </Typography>
                        <Typography  sx={{display: 'flex', mb:1}}>
                            Company LinkedIn:&nbsp;
                        <Link
                            href={rows[openId].companyLinkedInURL}
                            rel="noreferrer"
                            target="_blank"
                            sx={{display: 'flex', alignItems: 'center'}}
                        >
                            {rows[openId].companyLinkedInName}
                        </Link>
                        </Typography>
                        <Typography  sx={{display: 'flex', mb:1}}>
                            Industry:&nbsp;{rows[openId].industry}
                        </Typography>
                        <Box sx={{display: 'flex', alignItems:'center', mt:6}}>
                            <Button variant="contained" disabled={true}>Save</Button>
                            <Button variant="contained" disabled={true} sx={{ml:2}}>Cancel</Button>
                            <Box sx={{flexGrow: 1}}/>
                            {rows[openId].creationDate}
                        </Box>

                    </Paper>
                </Box>
            </Modal>
        </>
    );
}
