import "./styles.css";

import {
  Body,
  Content,
  Section,
  SectionBody,
  Controls,
  Gallery,
  Menu,
  HeroBlock,
  HeadingContainer,
  HeroDescription,
  HeroBorder
} from "./components/layouts";
import {
  Heading,
  HeadingSection,
  Paragraph,
  MenuItem,
  PersonName,
  PersonPost
} from "./components/typography";
import {
  Button,
  Image,
  HeroImage,
  ImageContainer,
  PersonDescription
} from "./components/elements";

export default function App() {
  return (
    <Body>
      <Content>
        <Section>
          <Menu>
            <MenuItem href="#about">About</MenuItem>
            <MenuItem href="#our-goal">Our Goal</MenuItem>
            <MenuItem href="#our-vision">Our Vision</MenuItem>
            <MenuItem href="#team">Team</MenuItem>
          </Menu>
        </Section>
        <Section id="about">
          <HeroBlock>
            <HeadingContainer>
              <Heading>Welcome to Pythia</Heading>
            </HeadingContainer>
            <HeroDescription>
              <HeroBorder />
              <HeadingSection>What is Pythia DAO?</HeadingSection>
              <Paragraph>
                Pythia is a community of curious minds, researchers and Web 3.0
                enthusiasts, who love to explore the world. We build a future of
                knowledge.
              </Paragraph>
            </HeroDescription>
            <HeroImage src="/assets/hero-image.png" />
          </HeroBlock>
        </Section>
        <Section id="our-goal">
          <HeadingSection>Our goal</HeadingSection>
          <Paragraph>
            We aim at providing cutting-edge research with an impeccable
            reputation.
          </Paragraph>
        </Section>
        <Section id="our-vision">
          <HeadingSection>Our vision</HeadingSection>
          <SectionBody>
            <Paragraph>
              Pythia is an experimental platform that brings together analysts
              and researchers around the world.
            </Paragraph>
            <Paragraph>
              We are DAO. It allows us to stay anonymous and impartial, to reach
              the research community around the world, to help each other
              research better, and last but not least – to create a safe space
              where knowledge and curiosity are paramount.
            </Paragraph>
            <Paragraph>
              We learn from masters, whose professional hazard is to annoy
              people with the ”Why” question. How do we do it? Learn in our
              white paper!
            </Paragraph>
          </SectionBody>
          <Controls>
            <Button href="https://salty-rib-f08.notion.site/Welcome-to-Pythia-8fc2ab9709c444259de0af1012cf4d5d">
              Learn More
            </Button>
            <Button href="https://salty-rib-f08.notion.site/Every-person-by-nature-desires-to-know-8a0b1c4a14524ca3b35a37a3ab402a77">
              Our Whitepaper
            </Button>
          </Controls>
        </Section>
        <Section id="team">
          <HeadingSection>Team</HeadingSection>
          <Gallery>
            <ImageContainer>
              <Image src="assets/alex-a@1x.jpg" />
              <PersonDescription>
                <PersonName>Mary R</PersonName>
                <PersonPost>Oracle</PersonPost>
              </PersonDescription>
            </ImageContainer>
            <ImageContainer>
              <Image src="assets/alex-a@1x.jpg" />
              <PersonDescription>
                <PersonName>Alex A</PersonName>
                <PersonPost>IT Giant</PersonPost>
              </PersonDescription>
            </ImageContainer>
            <ImageContainer>
              <Image src="assets/alex-a@1x.jpg" />
              <PersonDescription>
                <PersonName>Natella N</PersonName>
                <PersonPost>Modern Product Goddess</PersonPost>
              </PersonDescription>
            </ImageContainer>
            <ImageContainer>
              <Image src="assets/alex-a@1x.jpg" />
              <PersonDescription>
                <PersonName>Alexandra K</PersonName>
                <PersonPost>Demetra of Finance</PersonPost>
              </PersonDescription>
            </ImageContainer>
            <ImageContainer>
              <Image src="assets/alex-a@1x.jpg" />
              <PersonDescription>
                <PersonName>Fedor D</PersonName>
                <PersonPost>Odysseus from Strategy</PersonPost>
              </PersonDescription>
            </ImageContainer>
            <ImageContainer>
              <Image src="assets/alex-a@1x.jpg" />
              <PersonDescription>
                <PersonName>Olga K</PersonName>
                <PersonPost>Satyr</PersonPost>
              </PersonDescription>
            </ImageContainer>
            <ImageContainer>
              <Image src="assets/alex-a@1x.jpg" />
              <PersonDescription>
                <PersonName>Olga R</PersonName>
                <PersonPost>Goddess of Human Communication</PersonPost>
              </PersonDescription>
            </ImageContainer>
            <ImageContainer>
              <Image src="assets/alex-a@1x.jpg" />
              <PersonDescription>
                <PersonName>Julia S</PersonName>
                <PersonPost>Themis Among Layers</PersonPost>
              </PersonDescription>
            </ImageContainer>
            <ImageContainer>
              <Image src="assets/alex-a@1x.jpg" />
              <PersonDescription>
                <PersonName>Veronika D</PersonName>
                <PersonPost>Parsephone from Research</PersonPost>
              </PersonDescription>
            </ImageContainer>
            <ImageContainer>
              <Image src="assets/alex-a@1x.jpg" />
              <PersonDescription>
                <PersonName>Alina Sh</PersonName>
                <PersonPost>Art Numth</PersonPost>
              </PersonDescription>
            </ImageContainer>
            <ImageContainer>
              <Image src="assets/alex-a@1x.jpg" />
              <PersonDescription>
                <PersonName>Alena I</PersonName>
                <PersonPost>Our Mercurius</PersonPost>
              </PersonDescription>
            </ImageContainer>
          </Gallery>
        </Section>
      </Content>
    </Body>
  );
}
