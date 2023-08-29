import styled from "styled-components";
import * as C from './styles';
import { ReactEventHandler } from "react";

type Props = {
    label: string;
    icon: any;
    onClick: React.MouseEventHandler<HTMLDivElement>;
}

export const Button = ({ label, icon, onClick}: Props) => {

    return(
        <C.Container onClick={onClick}>
            <C.IconArea>
                <C.Icon src={icon}/>
            </C.IconArea>
            <C.Label>{label}</C.Label>
        </C.Container>
    )
}