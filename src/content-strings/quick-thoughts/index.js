export const QUICK_THOUGHTS = {
  BE_QUICK_DONT_RUSH: {
    HEADING: "Be quick, but don't rush",
    ITEMS: [
      'I am a huge advocate for iterative development and releasing in small chunks, however we should be mindful of the potential technical implications of moving quickly.',
      "I have found that when developers rush and put something together without a clean and scalable approach, it can seem that the team has saved time when shipping a new feature. However in the long term, it's most likely that you\'ll be losing time.",
      'Such approaches are great for proof of concepts and there are times where technical improvements can or should be made afterwards, but if a pattern of "clean it up later" evolves, it will cascade and create a large backlog of technical debt.',
      'Unscalable code can seriously hinder future development. Things become difficult to maintain and reuse - causing additional time and effort to deliver new requirements.',
      'Ultimately, this scenario can cost a business a lot of time and money, with probable instabilities and technical frustrations.',
      'For example, a developer could quickly put together some logic in say 30 minutes, but in the future, another developer may need to spend 2 hours debugging and cleaning it up in order to start working on a new feature.',
      'In this example, 2 hours has been spent on cleaning up a single piece of rushed logic. If this type of scenario is repeated and multiplied throughout a project, it can equate to weeks, months or even years of additional effort and funding.',
      "Make sure that what's moving quickly will not make you move slower in the future."
    ]
  },
  ACCESSIBLE_FROM_THE_START: {
    HEADING: 'The web was built to be accessible',
    ITEMS: [
      'Imagine a scenario where your application has 500 thousand users and after some marketing, user acquisition scales to 1 million.',
      'If 20% of the new users have for example sight or reading disabilities and your application is not accessible, 10 thousand of those new users could be unintentionally rejected and/or have a frustrating experience, probably to never return. This also introduces reputational risks.',
      'Only since some certain technologies and patterns were introduced and become commonplace, have websites and applications run a risk of being inaccessible. There are lots of fancy designs or features that look great, but for some users, it can hinder the experience.',
      'Keeping things simple generally helps with accessibility and also getting a product to market. Therefore, if a design starts with a simple MVP approach, it can be delivered quicker and simultaneously address accessibility concerns.',
      'Moving forward, the design can be iterated to enhance or streamline the user experience, without affecting the core accessible journey that has already been built. This also removes the risk of having to spend additional time retrofitting an application to become accessible.',
      'Keep it simple - for accessibility and delivery.'
    ]
  }
};

export default QUICK_THOUGHTS;
