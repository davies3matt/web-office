import styled from 'styled-components';
import colors from './Colors';

export const Title = styled.h2`
    font-size: 28px;
    font-weight: 600;
    font-family: Inter;
    font-style: normal;
    letter-spacing: -0.02em;
    text-transform: capitalize;
    color: ${colors.grey_specno_gey};
    padding: 10px;
`

export const Header = styled.span`
    font-size: 28px;
    font-weight: bold;
    font-family: Inter;
    font-style: normal;
    text-transform: capitalize;
    color: ${colors.grey_specno_gey};
`

export const Wrapper = styled.div`
    background-color: ${colors.grey_background};
    min-height: 100vh;
`

export const OfficeContainer = styled.div`
    background-color: white;
    padding: 20px 30px 20px 30px;
    border: 1px solid ${colors.blue_light_specno};
    margin: 15px;
    border-radius: 8px;
    position: relative;
`

export const ContainerBanner = styled.div`
    width: 12px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: radial-gradient(108.86% 100.3% at 100.06% 100.3%, #0AB169 42.03%, #0AB169 87.21%);
    border-radius: 8px 0 0 8px;
`

export const Icon = styled.img`
    display: inline-block;
`

export const Divider = styled.hr`
    border: 0;
    border-top: 0.1em solid ${colors.blue_dust_specno};
`