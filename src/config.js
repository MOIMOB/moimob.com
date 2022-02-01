// config.js
import billIcon from './images/bill_icon.png';
import shutTheBoxIcon from './images/shutthebox-icon.png';
const config = {
    github: {
        username: 'MOIMOB', // Your GitHub org/user name. (Required)
        sortBy: 'stars', // stars | updated
        limit: 8, // How many projects to display.
        exclude: {
            forks: false, // Forked projects will not be displayed if set to true.
            projects: [] // These projects will not be displayed. example: ['my-project1', 'my-project2']
        }
    },
    social: {
        linkedin: '',
        twitter: '',
        facebook: '',
        dribbble: '',
        behance: '',
        medium: '',
        devto: '',
        website: 'https://moimob.com',
        email: 'contact@moimob.com'
    },
    skills: [
        'Typescript',
        'Javascript',
        'Aurelia',
        'Node.js',
        'Bulma',
        'Git',
        'SCSS',
        'React',
        'Cordova',
        'Capacitor',
        'Android'
    ],
    apps: [
        {
            name: 'Monthly Bill Planner',
            description: 'Monthly Bill Planner is an app that will let you organize your bills and income. It will also help you calculate how much money is left over each month.',
            icon: billIcon,
            html_url: 'https://play.google.com/store/apps/details?id=com.moimob.billplanner'
        },
        {
            name: 'Shut the Box',
            description: 'Shut the box, also called canoga, batten down the hatches or trick-track is a fun and simple game of dice. The goal is to close the tiles with the numbers 1-9, if you succeed you have shut the box and won the game.',
            icon: shutTheBoxIcon,
            html_url: 'https://play.google.com/store/apps/details?id=com.moimob.shutthebox'
        },
    ],
    // blog: {
    //     // Display blog posts from your medium or dev.to account. (Optional)
    //     source: 'dev.to', // medium | dev.to
    //     username: 'arifszn',
    //     limit: 3 // How many posts to display. Max is 10.
    // },
    googleAnalytics: {
        // GA3 tracking id/GA4 tag id
        id: '' // UA-XXXXXXXXX-X | G-XXXXXXXXXX
    },
    hotjar: {
        id: 2614710,
        snippetVersion : 6
    },
    themeConfig: {
        default: 'dark',

        // Hides the switch in the navbar
        // Useful if you want to support a single color mode
        disableSwitch: false,

        // Should we use the prefers-color-scheme media-query,
        // using user system preferences, instead of the hardcoded default
        respectPrefersColorScheme: true,

        // Available themes. To remove any theme, exclude from here.
        themes: [
            'light',
            'dark',
            'cupcake',
            'bumblebee',
            'emerald',
            'corporate',
            'synthwave',
            'retro',
            'cyberpunk',
            'valentine',
            'halloween',
            'garden',
            'forest',
            'aqua',
            'lofi',
            'pastel',
            'fantasy',
            'wireframe',
            'black',
            'luxury',
            'dracula'
        ]
    }
}
export default config
