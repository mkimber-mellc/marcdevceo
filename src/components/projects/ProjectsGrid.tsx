import {
  BlockContainer,
  Button,
  CaptionText,
  Card,
  Center,
  FlexContainer,
  GridContainer,
  Subtitle,
} from 'mellc-ui-kit';
import { projects } from '@/projects';
import Image from 'next/image';

export default function ProjectsGrid() {
  return (
    <GridContainer gridGap={16} gridCols={1} className={'md:grid-cols-2'} padding={'xl'}>
      {projects.map((project) => (
        <Card
          key={project.title}
          bg={'bglight'}
          padding={'xl'}
          className={'shadow-warm hover:scale-105 hover'}
        >
          <FlexContainer flexDirection={'col'} gap={4} justify={'between'}>
            <Subtitle align={'center'} color={'text-yellow-900'}>
              {project.title}
            </Subtitle>
            <Center>
              <BlockContainer className={'imageWrapper'}>
                <Image
                  src={project.image}
                  alt={project.title}
                  objectFit={'cover'}
                  layout={'fill'}
                />
              </BlockContainer>
            </Center>
            <CaptionText color={'textwarm'}>{project.description}</CaptionText>
            <CaptionText color={'text-amber-900'}>{project.techStack}</CaptionText>
            <FlexContainer gap={4} mt={'lg'} justify={'center'}>
              <Button
                href={project.href}
                target={'_blank'}
                title={'Website'}
                bg={'bg-yellow-900'}
                color={'textaccent'}
                padding={'md'}
                size={'caption'}
              />
              <Button
                href={project.github}
                target={'_blank'}
                title={'Github'}
                bg={'bgwarm'}
                color={'textwarm'}
                padding={'md'}
                size={'caption'}
              />
            </FlexContainer>
          </FlexContainer>
        </Card>
      ))}
    </GridContainer>
  );
}
