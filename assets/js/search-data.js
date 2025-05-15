// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "* denotes equal contribution last update: May-13-2025",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Please see attached pdf for comprehensive CV",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Courses I taught",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-people",
          title: "People",
          description: "Members of the group",
          section: "Navigation",
          handler: () => {
            window.location.href = "/People/";
          },
        },{id: "news-zhiyuan-joined-ttic-s-faculty-as-an-assistant-professor-in-the-fall-of-2023-sparkles-smile",
          title: 'Zhiyuan joined TTIC’s faculty as an Assistant Professor in the fall of 2023....',
          description: "",
          section: "News",},{id: "news-zhiyuan-served-as-area-chair-for-the-conference-on-neural-information-processing-systems-neurips",
          title: 'Zhiyuan served as Area Chair for the Conference on Neural Information Processing Systems...',
          description: "",
          section: "News",},{id: "news-zhiyuan-and-professor-sanjeev-arora-princeton-university-were-jointly-named-recipients-of-a-superalignment-fast-grant-from-open-ai-to-further-investigate-the-weak-to-strong-generalization-problem",
          title: 'Zhiyuan and Professor Sanjeev Arora (Princeton University) were jointly named recipients of a...',
          description: "",
          section: "News",},{id: "news-zhiyuan-nominated-xxxxx",
          title: 'Zhiyuan nominated xxxxx',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%7A%68%69%79%75%61%6E%6C%69@%74%74%69%63.%65%64%75", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=5vVjpBsAAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/zhiyuanli", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
