import React from 'react';
import OfficeCard from '../../components/OfficeCard';
/** Theme */
import { Title, Wrapper } from '../../theme/styles';
/** Utils */
import { Office } from '../../utils/custom-types'

interface Props {

}

const data: Office[] = [
    {
        name: 'Specno',
        members: 5,
        phoneNumber: '0823649864',
        email: 'info@specno.com',
        capacity: 25,
        address: '10 Willie Van Schoor Dr, Bo Oakdale, Cape Town, 7530'
    },
    {
        name: 'Dope Company',
        members: 3,
        phoneNumber: '0834636516',
        email: 'dope@gmail.com',
        capacity: 10,
        address: '35 Davenport St, Vredehoek, Cape Town, 8005'
    }
]

const Home: React.FC<Props> = () => {
    return (
        <Wrapper>
            <Title>All Offices</Title>
            {data.map(office => 
                <OfficeCard office={office}/>
            )}
        </Wrapper>
    )
}

export default Home;