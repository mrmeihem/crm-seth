import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material'

const columns = [
    { field: 'id', headerName: 'ID', width: 20 },
    { field: 'firstName', headerName: 'First name', editable: true, width: 100 },
    { field: 'lastName', headerName: 'Last name', editable: true, width: 100 },
    { field: 'title', headerName: 'Title', editable: true, width: 200 },
    { field: 'linkedInURL', headerName: 'LinkedIn Url', sortable: false, width: 150 },
    { field: 'location', headerName: 'Location', width: 200 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'company', headerName: 'Company', width: 100 },
    { field: 'companyLinkedInURL', headerName: 'Company LinkedIn', sortable: false, width: 150 },
    { field: 'industry', headerName: 'Industry', width: 80 },
    { field: 'creationDate', headerName: 'Date', type: 'string', width: 100 },
];

const rows = [
    { id: 1, firstName: 'Alex', lastName: 'Dupre', title: 'Head of Recruiting', linkedInURL: 'https://www.linkedin.com/in/alex-dupre-3403346/', location: 'Atlanta, Georgia, United States', email: 'adupre11@yahoo.com', company: 'Workstream', companyLinkedInURL: 'https://www.linkedin.com/company/10180844/', industry: 'Staffing and Recruiting', creationDate: '03/09/2022'},
    { id: 2, firstName: 'Ashley', lastName: 'Chou', title: 'Recruiting Manager', linkedInURL: 'https://www.linkedin.com/in/ashleymchou/', location: 'Detroit Metropolitan Area', email: 'ashleymchou@gmail.com', company: 'Tendo', companyLinkedInURL: 'https://www.linkedin.com/company/70539424/', industry: 'Staffing and Recruiting', creationDate: '04/09/2022'},
    { id: 3, firstName: 'Miles', lastName: 'Parroco', title: 'Head of Recruiting', linkedInURL: 'https://www.linkedin.com/in/milesparroco/', location: 'Dallas, Texas, United States', email: 'bharding@optonline.net', company: 'Glooko', companyLinkedInURL: 'https://www.linkedin.com/company/2531044/', industry: 'Staffing and Recruiting', creationDate: '05/09/2022'},
    { id: 4, firstName: 'Gary', lastName: 'Levin', title: 'Lead Recruiter', linkedInURL: 'https://www.linkedin.com/in/garylevin/', location: 'Nashville, Tennessee, United States', email: 'garylevin@live.com', company: 'Proof of Play', companyLinkedInURL: 'https://www.linkedin.com/company/78365129/', industry: 'Staffing and Recruiting', creationDate: '06/09/2022'},
    { id: 5, firstName: 'Stephen', lastName: 'Hamilton', title: 'Head of Talent Acquisition', linkedInURL: 'https://www.linkedin.com/in/stephenkhamilton/', location: 'San Francisco, California, United States', email: 'hamirock@yahoo.com', company: 'Flex Logix Technologies, Inc.', companyLinkedInURL: 'https://www.linkedin.com/company/3533641/', industry: 'Staffing and Recruiting', creationDate: '07/09/2022'},
    { id: 6, firstName: 'Hennadii', lastName: 'Pysanka', title: 'Recruiting Manager Ukraine, EMEA, APAC regions', linkedInURL: 'https://www.linkedin.com/in/henry-pysanka/', location: 'Royal Oak, Michigan, United States', email: 'hpysanka@ukr.net', company: 'DataRobot', companyLinkedInURL: 'https://www.linkedin.com/company/2672915/', industry: 'Staffing and Recruiting', creationDate: '08/09/2022'},
    { id: 7, firstName: 'Kathleen', lastName: 'K.', title: 'Head of Business Recruiting', linkedInURL: 'https://www.linkedin.com/in/kathleenkiang/', location: 'Louisville, Kentucky, United States', email: 'kathleenk12@gmail.com', company: 'Notion', companyLinkedInURL: 'https://www.linkedin.com/company/30898036/', industry: 'Staffing and Recruiting', creationDate: '09/09/2022'},
    { id: 8, firstName: 'Katharine', lastName: 'Sykes', title: 'SSenior Director, Global Talent Acquisition', linkedInURL: 'https://www.linkedin.com/in/katharinesykes/', location: 'New Alexandria, Virginia, United States', email: 'kgsykes@comcast.net', company: 'Zadara', companyLinkedInURL: 'https://www.linkedin.com/company/2160110/', industry: 'Staffing and Recruiting', creationDate: '10/09/2022'},
    { id: 9, firstName: 'Leah', lastName: 'Thomas', title: 'Director Of Recruiting', linkedInURL: 'https://www.linkedin.com/in/thomasleah/', location: 'Edison, New Jersey, United States', email: 'leahthomas386@gmail.com', company: 'Extend', companyLinkedInURL: 'https://www.linkedin.com/company/35509542/', industry: 'Staffing and Recruiting', creationDate: '11/09/2022'},
    { id: 10, firstName: 'Mike', lastName: 'Teodosio', title: 'Director Of Recruiting', linkedInURL: 'https://www.linkedin.com/in/miketeodosio/', location: 'Edison, New Jersey, United States', email: 'mike.teodosio@gmail.com', company: 'Elation Health', companyLinkedInURL: 'https://www.linkedin.com/company/1311678/', industry: 'Staffing and Recruiting', creationDate: '12/09/2022'},
    { id: 11, firstName: 'Neha', lastName: 'Anand', title: 'Director Talent Acquisition/Recruiting', linkedInURL: 'https://www.linkedin.com/in/berryneha/', location: 'Pennsylvania, United States', email: 'nh.berry@gmail.com', company: 'Wind Talker Innovations Inc.', companyLinkedInURL: 'https://www.linkedin.com/company/10691093/', industry: 'Staffing and Recruiting', creationDate: '13/09/2022'},
    { id: 12, firstName: 'Nick', lastName: 'Lewis', title: 'Head of GTM and Foundation Recruiting', linkedInURL: 'https://www.linkedin.com/in/nicklewis5189/', location: 'Atlanta, Georgia, United States', email: 'nslewis_57@yahoo.com', company: 'Notion', companyLinkedInURL: 'https://www.linkedin.com/company/30898036/', industry: 'Staffing and Recruiting', creationDate: '14/09/2022'},
    { id: 13, firstName: 'Preei', lastNae: 'Kumar', title: 'Head of Global Talent Acquisition', linkedInURL: 'https://www.linkedin.com/in/preetikm/', location: 'San Francisco Bay Area', email: 'preetikumar18@gmail.com', company: 'Bugsnag', companyLinkedInURL: 'https://www.linkedin.com/company/3097847/', industry: 'Staffing and Recruiting', creationDate: '15/09/2022'},
    { id: 14, firstName: 'Seth', lastName: 'Dawson', title: 'Senior Director of Recruiting', linkedInURL: 'https://www.linkedin.com/in/sethjdawson/', location: 'Los Angeles, California, United States', email: 'sethjdawson@gmail.com', company: 'Venture Backed Stealth Startup', companyLinkedInURL: 'https://www.linkedin.com/company/18860154/', industry: 'Staffing and Recruiting', creationDate: '16/09/2022'},
    { id: 15, firstName: 'Laís', lastName: 'Ferrarezi', title: 'Director of Talent Acquisition, Head of Talent Acquisition', linkedInURL: 'https://www.linkedin.com/in/laisferrarezi/', location: 'Chicago, Illinois, United States', email: 'lferrarezi@avenuecode.com', company: 'Avenue Code', companyLinkedInURL: 'https://www.linkedin.com/company/583166/', industry: 'Staffing and Recruiting', creationDate: '17/09/2022'},
    { id: 16, firstName: 'Mackenzie', lastName: 'Moore', title: 'Recruiting Manager', linkedInURL: 'https://www.linkedin.com/in/recruitermac/', location: 'Greater Chicago Area', email: 'mackenzie.moore@density.io', company: 'Density', companyLinkedInURL: 'https://www.linkedin.com/company/7589398/', industry: 'Staffing and Recruiting', creationDate: '18/09/2022'},

];

export const Table = () => {
    return (
        <Box sx={{ width: '100%' }}>
            <DataGrid
                autoHeight={true}
                rows={rows}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[5, 10, 15]}
                checkboxSelection
            />
        </Box>
    );
}