import React from 'react';
import { Icon } from '../../theme/styles';

interface Props {
    icon: string,
    label: string
}

const CardItem: React.FC<Props> = ({icon, label}) => {
    return (
        <div style={{display: 'block', marginTop: '20px'}}>
            <div style={{ display: 'inline'}}>
                <Icon style={{ verticalAlign: 'middle', marginRight: '15px' }} src={icon}/>
            </div>
            <span>
                {label}
            </span>
        </div>
    )
}

export default CardItem;