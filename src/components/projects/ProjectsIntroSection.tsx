import { BodyText, FlexContainer, Subtitle, Title } from '@/mellc-ui-kit';

export default function ProjectsIntroSection() {
  return (
    <FlexContainer
      flexDirection={'col'}
      gap={6}
      padding={'xl'}
      className={'md:p-24 shadow-white-lg'}
    >
      <FlexContainer flexDirection={'col'} gap={2}>
        <Title color={'text-white'}>Showcasing the Journey</Title>
        <Subtitle align={'center'} color={'text-white'} italic>
          Not just the Code
        </Subtitle>
      </FlexContainer>
      <BodyText align={'center'} color={'text-gray-100'}>
        Each project reflects a moment of growth, clarity, and creative execution.
      </BodyText>
      <BodyText align={'center'} color={'text-gray-300'}>
        From client builds to portfolio experiments, this collection represents the evolution of my
        developing skills and my belief that design, logic, and emotion all belong in the same repo.
      </BodyText>
    </FlexContainer>
  );
}
