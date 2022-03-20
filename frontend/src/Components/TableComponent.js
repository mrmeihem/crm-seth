import {Box, Link} from '@mui/material'
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination} from '@mui/material';
import Paper from '@mui/material/Paper';

const columns = [
    {field: 'firstName', headerName: 'First name'},
    {field: 'lastName', headerName: 'Last name'},
    {field: 'title', headerName: 'Title'},
    {field: 'linkedInURL', headerName: 'LinkedIn Url'},
    {field: 'location', headerName: 'Location'},
    {field: 'email', headerName: 'Email'},
    {field: 'company', headerName: 'Company'},
    {field: 'companyLinkedInURL', headerName: 'Company LinkedIn'},
    {field: 'industry', headerName: 'Industry'},
    {field: 'creationDate', headerName: 'Date'},
];

const rows = [
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
        creationDate: '03/09/2022'
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
        creationDate: '04/09/2022'
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
        creationDate: '05/09/2022'
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
        creationDate: '06/09/2022'
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
        creationDate: '07/09/2022'
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
        creationDate: '08/09/2022'
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
        creationDate: '09/09/2022'
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
        creationDate: '10/09/2022'
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
        creationDate: '11/09/2022'
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
        creationDate: '12/09/2022'
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
        creationDate: '13/09/2022'
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
        creationDate: '14/09/2022'
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
        creationDate: '15/09/2022'
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
        creationDate: '16/09/2022'
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
        creationDate: '17/09/2022'
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
        creationDate: '18/09/2022'
    },
];

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

export const TableComponent = () => {
    return (
        <>
            <Box sx={{width: '100%', height: 500}}>
                <TableContainer component={Paper} elevation={4}>
                    <Table sx={{minWidth: 650}} stickyHeader aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column, index) => (
                                    <TableCell sx={{fontWeight: 'bold'}}>{column.headerName}</TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row, index) => (
                                <TableRow hover={true} key={index}>
                                    <TableCell>
                                        {row.firstName}
                                    </TableCell>
                                    <TableCell>
                                        {row.lastName}
                                    </TableCell>
                                    <TableCell>
                                        {row.title}
                                    </TableCell>
                                    <TableCell>
                                        <Link href={row.linkedInURL} rel="noreferrer" target="_blank" sx={{display: 'flex', alignItems: 'center'}}>
                                            {row.linkedInName}
                                        </Link>
                                    </TableCell>
                                    <TableCell sx={{textOverflow: 'ellipsis'}}>
                                        {row.location}
                                    </TableCell>
                                    <TableCell>
                                        <Link href={`mailto:${row.email}`} rel="noreferrer" target="_blank" sx={{display: 'flex', alignItems: 'center'}}>
                                        {row.email}
                                        </Link>
                                    </TableCell>
                                    <TableCell>
                                        {row.company}
                                    </TableCell>
                                    <TableCell>
                                        <Link href={row.companyLinkedInURL} rel="noreferrer" target="_blank" sx={{display: 'flex', alignItems: 'center'}}>
                                            {row.companyLinkedInName}
                                        </Link>
                                    </TableCell>
                                    <TableCell>
                                        {row.industry}
                                    </TableCell>
                                    <TableCell>
                                        {row.creationDate}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[25, 50, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={25}
                    page={1}
                    onPageChange={console.log('pagechange!')}
                    onRowsPerPageChange={console.log('rowsperpage!')}
                />
            </Box>
        </>
    );
}