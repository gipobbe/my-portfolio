module.exports = {
  plugins: [
    {
      resolve: `@christiandavid/gatsby-theme-byfolio`,
      options: {
        basePath: ``,
        path: `src/`,
        imagesPath: `src/images/`,
        iconFile: `src/images/icon.png`,
        siteTitle: `Portfolio`,
        siteUrl: `http://localhost:8000/`,
        siteName: `Giovanni Nicoletti`,
        siteShortName: `GN`,
        siteDescription: `Quest'app contiene alcuni dei progetti che ho sviluppato.`,
        siteKeywords: `Sviluppatore software`,
        useMozJpeg: true,
        menuLinks: [
          // title = Link text
          // color = Animation background color on click
          { name: `home`, title: `Home`, color: `#696969`, link: `` },
          {
            name: `experience`,
            title: `Esperienze`,
            color: `#3a3d98`,
            link: ``,
          },
          { name: `skills`, title: `Skills`, color: `#a18cd1`, link: `` },
          { name: `aboutMe`, title: `Su di me`, color: `#fff`, link: `` },
        ],
        email: `giovanni.nicoletti@outlook.com`,
        social: {
          // Usernames
          twitter: `gipobbe`,
          gitHub: `gipobbe`,
          stackOverflow: `gn`,
          linkedIn: `in/giovanni-nicoletti/`,
          resumeInPdf: `/Giovanni Nicoletti_CV_IT_1.pdf`, // url or local link
        },
        homePage: {
          availableToHire: true,
          dotColors: ["#0e3e1e", "#6CC551"],
          h1Text: `Ciao! Sono Giovanni Nicoletti `,
          h2Text: `Sono un Bioingegnere a cui piace sviluppare software.`,
          typewriter: [
            `Sviluppare software è una mia passione 😎`,
            `Imparo in fretta!`,
            `Sono sempre pronto a utilizzare nuove tecnologie 🤓`,
            `Uno dei miei valori: <strong>attitudine al problem solving<strong>`,
            `Mi piace condividere quello che so 👨‍🏫`,
            "Uno dei miei hobby è  🎮",
          ],
        },
        // Color for menu background
        shapeColor: {
          link: { color: "#0e0f11", hover: "#fff" },
          shape1: {
            color: `#d1bad2`,
            opacity: `0.7`,
          },
          shape2: {
            color: `#2884B8`,
            opacity: `0.7`,
          },
          shape3: {
            color: `#fff`,
            opacity: `0.7`,
          },
        },
        footer: `heart`,
      },
    },
  ],
}
