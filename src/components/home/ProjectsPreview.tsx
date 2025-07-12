import {
  BlockContainer,
  Card,
  GridContainer,
  Title,
  BodyText,
  UILink,
  Subtitle,
  FlexContainer,
} from 'mellc-ui-kit';
import { featuredProjects } from '@/data/featuredProjects';

export default function ProjectsPreview() {
  return (
    <BlockContainer>
      <Title align="center" color="text-gray-300" className="mb-6">
        Featured Projects
      </Title>

      <GridContainer gridCols={1} gridGap={10} className={'md:grid-cols-2'}>
        {featuredProjects.map((project) => (
          <Card
            key={project.title}
            bg="bglight"
            shadowColor={'shadow-warm'}
            padding="lg"
            className={'hover:bg-black hover:textprimary'}
          >
            <FlexContainer flexDirection={'col'} gap={4}>
              <Subtitle color="textwarm" align={'center'}>
                {project.title}
              </Subtitle>
              <BodyText color="textlight">{project.description}</BodyText>
              {/*<UILink href={project.link} color="textaccent" className={'hover:text-amber-300'}>*/}
              {/*  → View Case Study*/}
              {/*</UILink>*/}
            </FlexContainer>
          </Card>
        ))}
      </GridContainer>
    </BlockContainer>
  );
}
