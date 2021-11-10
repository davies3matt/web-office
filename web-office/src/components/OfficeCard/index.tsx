import React, { useState } from 'react';
/** Theme */
import { ContainerBanner, Header, OfficeContainer, Icon, Divider } from '../../theme/styles';
import icons from '../../theme/Icons';
/** Utils */
import { Office } from '../../utils/custom-types';
import CardItem from '../CardItem';

interface Props {
    office: Office
}

const OfficeCard: React.FC<Props> = ({ office }) => {

    const [showMore, setShowMore] = useState(false);

    return (
        <OfficeContainer>
            <ContainerBanner/>
            <Header>{office.name}</Header>
            <div style={{ display: 'block', marginTop: '15px'}}>
                <Icon 
                    style={{
                        position: 'absolute',
                        top: '20px',
                        right: '20px'
                    }} 
                    src={icons.pencil}
                />
                <Icon style={{marginRight: '10px', verticalAlign: 'middle'}} src={icons.people}/>
                <span style={{ verticalAlign: 'middle', fontWeight: 'bold' }}>{office.members}</span>
                <span style={{ verticalAlign: 'middle' }}>{` Staff Members in Office`}</span>
            </div>
            <Divider/>
            <div style={{ textAlign: 'center' }} onClick={() => setShowMore(!showMore)}>
                <span>
                    More info
                </span>
                <Icon style={{ verticalAlign: 'middle', marginLeft: '10px' }} src={icons.arrow_down}/>
            </div>
            {showMore && (
                <React.Fragment>
                    {/** Phone Number */}
                    <CardItem icon={icons.phone} label={office.phoneNumber}/>
                    {/** Email */}
                    <CardItem icon={icons.envelope} label={office.email} />
                    {/** Capacity */}
                    <CardItem icon={icons.people} label={office.capacity.toString()}/>
                    {/** Location */}
                    <CardItem icon={icons.location} label={office.address.toString()}/>
                </React.Fragment>
            )}
        </OfficeContainer>
    )
}

export default OfficeCard;