export const QUICK_THOUGHTS = {
  BE_QUICK_DONT_RUSH: {
    HEADING: "Be quick, but don't rush",
    ITEMS: [
      'I am a huge advocate for iterative development and releasing in small chunks, however we should be mindful of the potential technical implications of moving quickly.',
      'I have found that when developers rush and put something together without a clean and scalable approach, the developer and/or business can believe that this is a good thing because "something has been delivered quickly". Sometimes this is a good thing and it may seem that you\'ve saved some time, but in my experience, you\'re most likely losing time in the long term.',
      'Such approaches are fantastic for proof of concepts and there are times where technical improvements can or should be made afterwards, but if a pattern of "clean it up later" evolves, in the long term it will cost a business more time and money, with probable instabilities and technical frustrations.',
      'For example, a developer could quickly put together some logic in say 30 minutes, without making it particularly clean and reusable, but it works. In the future, if a developer comes back to update this piece of code to support a new feature, it could be hard to read or problematic to change. It might even have some unknown bugs.',
      'This could then lead to a developer spending for example an additional 2 hours understanding what is happening and refactoring the code so that it can be maintained.',
      'In this example, 2 hours has been lost simply from cleaning up a single piece of rushed logic. If this kind of scenario is repeated and multiplied throughout a project, it can equate to days, weeks, months or even years of effort and funding.',
      "When moving quickly, I highly recommend making sure that what's moving quickly, will not make you move slower in the future."
    ]
  },
  ACCESSIBLE_FROM_THE_START: {
    HEADING: 'The web was built to be accessible',
    ITEMS: [
      'Imagine a scenario where your application has 500 thousand users and after some marketing, user acquisition scales to 1 million.',
      'If 20% of the new users have for example sight or reading disabilities and an application is not accessible, 10 thousand of those new users could be unintentionally rejected and/or have a frustrating experience - probably to never return. This also introduces reputational risks.',
      'The web was built to be accessible from the very beginning. Only since some certain technologies and patterns were introduced and become commonplace, have websites and applications run a risk of being inaccessible.',
      'Depending on the project, I believe it can be quicker and easier to deliver something that is built to be accessible from the start, as opposed to building something that is not accessible.',
      'Keeping things simple generally helps with accessibility. Therefore, if a design starts with a simple "MVP" approach, it can be delivered faster whilst simultaneously addressing accessibility concerns.',
      'Moving forward, the design can be iterated to enhance or streamline the user experience, without affecting the core accessible journey that has already been built. This also removes the risk of having to spend additional time retrofitting an application to become accessible.'
    ]
  }
};

export default QUICK_THOUGHTS;
