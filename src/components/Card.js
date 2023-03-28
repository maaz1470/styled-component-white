import nerdImage from './assets/images/illustration.png';
import Button from './Button';
import { ButtonContainer, CardComponent, ContentContainer, H1, Image, P, Tag } from './style/Component.style';
export default function Card() {
    return (
        <CardComponent>
            <ContentContainer>
                <Tag>EXCLUSIVE</Tag>
                <H1>React Styled Components</H1>
                <P>
                    Exclusive React JS Tutorial on Styled Components where you will learn why we
                    need this & how to use it.
                </P>
                <ButtonContainer>
                    <Button link="https://lwsbd.link/rsc" text="Watch now" />
                    <Button link="https://lwsbd.link/react" text="Github repo" />
                </ButtonContainer>
            </ContentContainer>
            <Image src={nerdImage} alt="Nerd" width="300px" />
        </CardComponent>
    );
}