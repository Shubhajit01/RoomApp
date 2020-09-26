const { ModuleResolutionKind } = require('typescript');

const USERS = [
  {
    email: 'murielnolan@hotcakes.com',
    name: 'Mcdaniel Woodward'
  },
  {
    email: 'mathisstark@biohab.com',
    name: 'Hendrix Koch'
  },
  {
    email: 'mattiegates@ultrimax.com',
    name: 'Judy Hendricks'
  },
  {
    email: 'robynalford@qot.com',
    name: 'Mcbride Gallegos'
  },
  {
    email: 'deirdresims@infotrips.com',
    name: 'Terry Hoffman'
  },
  {
    email: 'sellerssuarez@firewax.com',
    name: 'Bradley Collins'
  },
  {
    email: 'beverleybutler@recrisys.com',
    name: 'Houston Dickson'
  },
  {
    email: 'ernestineramos@eventix.com',
    name: 'Earline Boyd'
  },
  {
    email: 'zimmermanpalmer@metroz.com',
    name: 'Gamble Frank'
  },
  {
    email: 'wattsdean@atomica.com',
    name: 'Bray Sampson'
  },
  {
    email: 'andreamullins@gallaxia.com',
    name: 'Robbins Bernard'
  },
  {
    email: 'brookemoreno@plasto.com',
    name: 'Chavez Holloway'
  },
  {
    email: 'vinsongardner@calcu.com',
    name: 'Patsy Tyler'
  },
  {
    email: 'gallagherewing@netplax.com',
    name: 'Lelia Blackburn'
  },
  {
    email: 'helencannon@supremia.com',
    name: 'Goff Head'
  },
  {
    email: 'tishafigueroa@confrenzy.com',
    name: 'Hudson Trevino'
  },
  {
    email: 'shieldscobb@calcula.com',
    name: 'Osborne Bowman'
  },
  {
    email: 'latonyaconley@olympix.com',
    name: 'Burnett Conway'
  },
  {
    email: 'earlenegolden@xiix.com',
    name: 'Hendricks Chen'
  },
  {
    email: 'allenwhitehead@songbird.com',
    name: 'Adrienne Page'
  },
  {
    email: 'lottmayer@snips.com',
    name: 'Isabelle Perry'
  },
  {
    email: 'caitlinskinner@neocent.com',
    name: 'Noemi Tate'
  },
  {
    email: 'estellahopper@xelegyl.com',
    name: 'Nicholson Mitchell'
  },
  {
    email: 'christinasellers@anocha.com',
    name: 'Greer Walton'
  },
  {
    email: 'shellyaguirre@dognosis.com',
    name: 'Mcdowell Harmon'
  },
  {
    email: 'nellholder@amtap.com',
    name: 'Isabella Pugh'
  },
  {
    email: 'irisknight@eyeris.com',
    name: 'Jana Simon'
  },
  {
    email: 'cohenmathews@zboo.com',
    name: 'Warren Terrell'
  },
  {
    email: 'carissamcgowan@emergent.com',
    name: 'Shawn Oconnor'
  },
  {
    email: 'elenamorris@equitax.com',
    name: 'Salazar Sanford'
  },
  {
    email: 'reeddecker@oceanica.com',
    name: 'Goodwin Schmidt'
  },
  {
    email: 'sallyflores@zenthall.com',
    name: 'Mcclure Webster'
  },
  {
    email: 'fredaprince@aeora.com',
    name: 'Ellen Lang'
  },
  {
    email: 'rebeccawalker@eclipto.com',
    name: 'Floyd Meyer'
  },
  {
    email: 'thelmahaley@signidyne.com',
    name: 'Strickland Dillon'
  },
  {
    email: 'beulaharnold@plutorque.com',
    name: 'Tracie Wright'
  },
  {
    email: 'lucillemclean@macronaut.com',
    name: 'Victoria Mckee'
  },
  {
    email: 'mcfarlandhamilton@terascape.com',
    name: 'Stout May'
  },
  {
    email: 'hortonwells@comtest.com',
    name: 'Wolfe Gutierrez'
  },
  {
    email: 'mirandagonzales@isologix.com',
    name: 'Billie Barr'
  },
  {
    email: 'stuartparrish@orbalix.com',
    name: 'Ashley Battle'
  },
  {
    email: 'rivassutton@panzent.com',
    name: 'Velez Montoya'
  },
  {
    email: 'janinevang@petigems.com',
    name: 'Penny Sykes'
  },
  {
    email: 'ortizwilkinson@zizzle.com',
    name: 'Lottie Mcpherson'
  },
  {
    email: 'mullinsyoung@acium.com',
    name: 'Pittman Diaz'
  },
  {
    email: 'tillmanbyrd@quizmo.com',
    name: 'Reyna Hardin'
  },
  {
    email: 'pearliegilmore@jetsilk.com',
    name: 'Riddle Gamble'
  },
  {
    email: 'cathrynhickman@artiq.com',
    name: 'Pauline Reynolds'
  },
  {
    email: 'ellisonpope@zorromop.com',
    name: 'Chambers Mayo'
  },
  {
    email: 'wellsmckenzie@fanfare.com',
    name: 'Carolyn French'
  }
];

const RECENT_CHATS = [
  {
    user: 'Zelma Dickerson',
    lastMessage: 'Lorem tempor sit incididunt amet reprehenderit commodo.',
    lastModified: 870431,
    numberOfMessages: 819,
    image: 'https://randomuser.me/api/portraits/med/women/49.jpg'
  },
  {
    user: 'Dennis Dejesus',
    lastMessage: 'Duis excepteur deserunt reprehenderit id sunt sint.',
    lastModified: 902446,
    numberOfMessages: 623,
    image: 'https://randomuser.me/api/portraits/med/women/22.jpg'
  },
  {
    user: 'Langley Russo',
    lastMessage:
      'Minim non ea laborum cillum pariatur laboris amet quis ea ex fugiat quis laboris ullamco.',
    lastModified: 642863,
    numberOfMessages: 854,
    image: 'https://randomuser.me/api/portraits/med/women/91.jpg'
  },
  {
    user: 'Beard Mcknight',
    lastMessage:
      'Enim cupidatat cillum ipsum irure Lorem ut laborum eiusmod aliquip dolore ea laborum deserunt ut.',
    lastModified: 833713,
    numberOfMessages: 149,
    image: 'https://randomuser.me/api/portraits/med/men/71.jpg'
  },
  {
    user: 'Paulette Kidd',
    lastMessage:
      'Duis fugiat sunt ut non amet dolor amet minim consectetur nulla.',
    lastModified: 146385,
    numberOfMessages: 313,
    image: 'https://randomuser.me/api/portraits/med/women/59.jpg'
  },
  {
    user: 'Kate Baldwin',
    lastMessage: 'Officia minim id deserunt aliquip.',
    lastModified: 573687,
    numberOfMessages: 527,
    image: 'https://randomuser.me/api/portraits/med/men/99.jpg'
  },
  {
    user: 'Hammond Wagner',
    lastMessage:
      'Aute do minim dolore qui eu labore ad mollit Lorem laboris non.',
    lastModified: 257699,
    numberOfMessages: 921,
    image: 'https://randomuser.me/api/portraits/med/men/90.jpg'
  },
  {
    user: 'Patton Benjamin',
    lastMessage: 'Irure laborum aliquip ut consequat aliqua dolor est eu.',
    lastModified: 601301,
    numberOfMessages: 191,
    image: 'https://randomuser.me/api/portraits/med/men/12.jpg'
  },
  {
    user: 'Baxter Donovan',
    lastMessage:
      'Laboris adipisicing aute ipsum minim in adipisicing veniam proident consequat.',
    lastModified: 732670,
    numberOfMessages: 820,
    image: 'https://randomuser.me/api/portraits/med/men/9.jpg'
  },
  {
    user: 'Dunlap Phillips',
    lastMessage:
      'Culpa pariatur velit dolore sit nostrud ea sunt sit culpa mollit.',
    lastModified: 807566,
    numberOfMessages: 730,
    image: 'https://randomuser.me/api/portraits/med/women/62.jpg'
  },
  {
    user: 'Roberson Terrell',
    lastMessage:
      'Cupidatat ullamco sunt nisi esse sunt anim exercitation duis dolor.',
    lastModified: 920412,
    numberOfMessages: 748,
    image: 'https://randomuser.me/api/portraits/med/women/36.jpg'
  },
  {
    user: 'Tanya Roberson',
    lastMessage:
      'Consectetur sunt sunt pariatur ipsum aliqua cupidatat amet et ea.',
    lastModified: 374384,
    numberOfMessages: 224,
    image: 'https://randomuser.me/api/portraits/med/men/27.jpg'
  },
  {
    user: 'Jewell Hutchinson',
    lastMessage:
      'Incididunt voluptate ut tempor elit ea officia aliqua et fugiat consectetur dolore adipisicing commodo excepteur.',
    lastModified: 495655,
    numberOfMessages: 699,
    image: 'https://randomuser.me/api/portraits/med/women/49.jpg'
  },
  {
    user: 'Sharron Carpenter',
    lastMessage:
      'Velit adipisicing fugiat consequat ullamco laboris non excepteur.',
    lastModified: 561939,
    numberOfMessages: 468,
    image: 'https://randomuser.me/api/portraits/med/men/91.jpg'
  },
  {
    user: 'Wright Mcdowell',
    lastMessage:
      'Enim reprehenderit dolore esse anim aliqua ex tempor eu ipsum voluptate.',
    lastModified: 443895,
    numberOfMessages: 381,
    image: 'https://randomuser.me/api/portraits/med/men/51.jpg'
  },
  {
    user: 'Angela Harding',
    lastMessage:
      'Occaecat laborum anim et nisi cillum labore eu ipsum ex culpa commodo in aliquip.',
    lastModified: 475561,
    numberOfMessages: 743,
    image: 'https://randomuser.me/api/portraits/med/men/66.jpg'
  },
  {
    user: 'Hunter Mays',
    lastMessage: 'Ex aliqua deserunt aliqua laborum eiusmod.',
    lastModified: 978325,
    numberOfMessages: 323,
    image: 'https://randomuser.me/api/portraits/med/women/54.jpg'
  },
  {
    user: 'Nellie Cruz',
    lastMessage:
      'Velit Lorem proident nostrud occaecat ullamco ipsum deserunt elit qui anim dolor.',
    lastModified: 222932,
    numberOfMessages: 207,
    image: 'https://randomuser.me/api/portraits/med/women/66.jpg'
  },
  {
    user: 'Sears Ingram',
    lastMessage: 'Ipsum do non quis nisi fugiat irure aute.',
    lastModified: 270597,
    numberOfMessages: 164,
    image: 'https://randomuser.me/api/portraits/med/men/75.jpg'
  },
  {
    user: 'Francisca Sweet',
    lastMessage:
      'Qui laborum et excepteur sit tempor adipisicing Lorem non officia mollit eiusmod ipsum dolore.',
    lastModified: 619105,
    numberOfMessages: 94,
    image: 'https://randomuser.me/api/portraits/med/men/68.jpg'
  }
];

const USER_CHAT = [
  {
    message:
      'Exercitation non fugiat incididunt qui est aliqua ullamco irure et ea fugiat ut.',
    isCurrentUser: false,
    time: '00:00',
    id: '5f4a7135936537c09ce6775a'
  },
  {
    message: 'Dolore deserunt tempor quis minim excepteur nostrud.',
    isCurrentUser: true,
    time: '00:00',
    id: '5f4a7135711718950bc7c670'
  },
  {
    message:
      'Pariatur commodo ullamco non ullamco minim sit qui in cillum incididunt.',
    isCurrentUser: true,
    time: '00:00',
    id: '5f4a71358a9e1a9c0e2fee47'
  },
  {
    message: 'Nulla do nostrud do incididunt ex enim.',
    isCurrentUser: false,
    time: '00:00',
    id: '5f4a71351ad838d1bd92d1f1'
  },
  {
    message:
      'Laboris adipisicing qui elit voluptate veniam dolor proident nostrud mollit enim eu.',
    isCurrentUser: true,
    time: '00:00',
    id: '5f4a713551b8429b66afa13a'
  },
  {
    message: 'Qui ad nisi cillum ea sunt aute.',
    isCurrentUser: false,
    time: '00:00',
    id: '5f4a71355960bd0ed4faf65f'
  },
  {
    message: 'Ea velit velit amet ut ipsum anim excepteur eiusmod do tempor.',
    isCurrentUser: false,
    time: '00:00',
    id: '5f4a7135f7c2c342d4a12f08'
  },
  {
    message: 'Et aliquip laborum ea sint excepteur esse sunt qui aliquip qui.',
    isCurrentUser: true,
    time: '00:00',
    id: '5f4a7135fac196c8e5aaac4c'
  },
  {
    message: 'Lorem sit excepteur irure ullamco laboris.',
    isCurrentUser: false,
    time: '00:00',
    id: '5f4a7135439c95d3a3e654f0'
  },
  {
    message: 'Fugiat culpa labore ad commodo.',
    isCurrentUser: false,
    time: '00:00',
    id: '5f4a713537e9d552ee625ec4'
  },
  {
    message:
      'Nulla Lorem id ea proident exercitation nulla elit pariatur qui ea ea aute officia aliquip.',
    isCurrentUser: true,
    time: '00:00',
    id: '5f4a7135fe2d221a6fb4dd56'
  },
  {
    message: 'Quis occaecat anim magna excepteur.',
    isCurrentUser: false,
    time: '00:00',
    id: '5f4a71357fa42ec539d8cb0e'
  },
  {
    message:
      'Fugiat tempor Lorem aliquip esse duis duis consequat sit sint consequat ex sint elit incididunt.',
    isCurrentUser: false,
    time: '00:00',
    id: '5f4a71350dd000660986e491'
  },
  {
    message: 'Lorem fugiat est laboris sint incididunt dolor occaecat elit.',
    isCurrentUser: true,
    time: '00:00',
    id: '5f4a7135b5bde97315ebcd22'
  },
  {
    message: 'Exercitation consequat adipisicing amet qui.',
    isCurrentUser: true,
    time: '00:00',
    id: '5f4a71350c26af7725fa45d4'
  },
  {
    message: 'Lorem dolor cillum eiusmod ut pariatur.',
    isCurrentUser: false,
    time: '00:00',
    id: '5f4a7135c5bca0bee1d2b977'
  },
  {
    message:
      'Cillum laborum sit est sunt nostrud reprehenderit elit duis cupidatat nostrud aliqua ex.',
    isCurrentUser: true,
    time: '00:00',
    id: '5f4a7135114f155b490ddc54'
  },
  {
    message: 'Magna minim id minim cillum qui dolore cupidatat.',
    isCurrentUser: false,
    time: '00:00',
    id: '5f4a713573ce2295916d7fd7'
  },
  {
    message:
      'Ad nulla veniam anim nostrud pariatur veniam voluptate exercitation laboris.',
    isCurrentUser: false,
    time: '00:00',
    id: '5f4a7135008511ec088cdf2a'
  },
  {
    message: 'Consectetur do aliquip aute eiusmod qui non.',
    isCurrentUser: false,
    time: '00:00',
    id: '5f4a7135bb9953536b020fcc'
  },
  {
    message: 'Laboris quis labore consequat aliquip.',
    isCurrentUser: true,
    time: '00:00',
    id: '5f4a7135bcbb9ad88ac6a9a6'
  },
  {
    message:
      'Esse culpa quis aliquip ullamco cupidatat quis sint nisi pariatur aliquip incididunt ipsum exercitation.',
    isCurrentUser: true,
    time: '00:00',
    id: '5f4a71354624987774a436b7'
  },
  {
    message: 'Pariatur in pariatur eu dolor nulla non sit officia deserunt.',
    isCurrentUser: false,
    time: '00:00',
    id: '5f4a7135e08377f58758a956'
  },
  {
    message: 'Fugiat veniam nulla dolore nostrud veniam occaecat.',
    isCurrentUser: false,
    time: '00:00',
    id: '5f4a7135f10aa2b3034ecb04'
  },
  {
    message: 'Qui consequat minim elit eu exercitation.',
    isCurrentUser: true,
    time: '00:00',
    id: '5f4a713597cd39602dad3ae1'
  },
  {
    message:
      'Cillum velit ut deserunt ullamco magna elit cupidatat mollit ut consequat cillum veniam ex amet.',
    isCurrentUser: false,
    time: '00:00',
    id: '5f4a713552ac72926cdd79e3'
  },
  {
    message: 'Aute eiusmod anim aute ut.',
    isCurrentUser: true,
    time: '00:00',
    id: '5f4a7135373530b604bfeb37'
  },
  {
    message:
      'Nisi amet ipsum in fugiat proident est qui aute duis consequat laborum ipsum.',
    isCurrentUser: false,
    time: '00:00',
    id: '5f4a7135b3d574dbb4e5ba35'
  },
  {
    message:
      'Mollit non mollit nisi et ea cillum nisi consectetur aliqua magna do.',
    isCurrentUser: false,
    time: '00:00',
    id: '5f4a7135e3c6e24cd9a7bec2'
  },
  {
    message: 'Lorem anim laboris ea enim pariatur nisi.',
    isCurrentUser: false,
    time: '00:00',
    id: '5f4a71351f2f00aa3e18b205'
  },
  {
    message:
      'Minim incididunt quis deserunt minim anim ullamco velit pariatur adipisicing occaecat ut culpa velit.',
    isCurrentUser: false,
    time: '00:00',
    id: '5f4a71357ad51b717dbdc9d8'
  },
  {
    message:
      'Sit aute ea ut laboris magna ad nostrud non non eiusmod velit id adipisicing.',
    isCurrentUser: true,
    time: '00:00',
    id: '5f4a7135a80e2b571bc2df6c'
  },
  {
    message:
      'Labore Lorem do ad nisi enim non cillum cupidatat excepteur magna duis proident.',
    isCurrentUser: true,
    time: '00:00',
    id: '5f4a7135f48f5fa6e0ac468f'
  },
  {
    message: 'Commodo ipsum in est occaecat.',
    isCurrentUser: false,
    time: '00:00',
    id: '5f4a7135aa0e27ee2f757eca'
  },
  {
    message:
      'Dolore velit excepteur laboris ex pariatur culpa consectetur tempor ut sint.',
    isCurrentUser: true,
    time: '00:00',
    id: '5f4a7135953f96a309add264'
  },
  {
    message:
      'Velit cupidatat pariatur commodo mollit eu Lorem duis proident pariatur qui velit sit.',
    isCurrentUser: true,
    time: '00:00',
    id: '5f4a713513f642d061511a4f'
  },
  {
    message: 'Consectetur sunt tempor non in tempor.',
    isCurrentUser: true,
    time: '00:00',
    id: '5f4a7135ca9f87aabe57beb2'
  },
  {
    message:
      'Labore amet minim deserunt commodo proident cupidatat officia occaecat aliqua.',
    isCurrentUser: true,
    time: '00:00',
    id: '5f4a713574213d7fe41f4887'
  },
  {
    message:
      'Ut ullamco veniam dolore elit nostrud consectetur adipisicing et commodo Lorem magna.',
    isCurrentUser: true,
    time: '00:00',
    id: '5f4a7135628f17743dc1d5a8'
  },
  {
    message: 'Ipsum eu eiusmod Lorem culpa aliquip quis.',
    isCurrentUser: true,
    time: '00:00',
    id: '5f4a71351f54343914d0a9a0'
  },
  {
    message:
      'Quis quis officia quis commodo sit deserunt irure voluptate et id.',
    isCurrentUser: true,
    time: '00:00',
    id: '5f4a7135314655e549cb8e3f'
  },
  {
    message:
      'Ut sunt qui nisi nulla ad id irure est excepteur eiusmod sunt mollit qui nisi.',
    isCurrentUser: true,
    time: '00:00',
    id: '5f4a7135086c9c3d8d7aaa4d'
  },
  {
    message:
      'Qui tempor consequat amet excepteur voluptate nisi ut cupidatat deserunt labore Lorem.',
    isCurrentUser: true,
    time: '00:00',
    id: '5f4a7135d87c1f600ba56ca5'
  },
  {
    message:
      'Sunt reprehenderit id occaecat occaecat nulla cillum nulla esse quis amet nostrud dolore anim.',
    isCurrentUser: true,
    time: '00:00',
    id: '5f4a7135b34ae061dbc3f378'
  },
  {
    message:
      'Consectetur irure amet amet ipsum anim cupidatat elit qui exercitation ipsum et enim.',
    isCurrentUser: true,
    time: '00:00',
    id: '5f4a7135a27ed12d756cbc2c'
  },
  {
    message: 'Ut dolor anim mollit occaecat officia veniam.',
    isCurrentUser: false,
    time: '00:00',
    id: '5f4a7135678da735fd96b486'
  },
  {
    message: 'Occaecat consequat ullamco ad proident nostrud.',
    isCurrentUser: true,
    time: '00:00',
    id: '5f4a7135600da818955a92f0'
  },
  {
    message: 'Eiusmod ut do enim id velit labore laborum.',
    isCurrentUser: false,
    time: '00:00',
    id: '5f4a71353f514dac938b2c17'
  },
  {
    message:
      'Nostrud dolor duis ullamco officia dolor ea elit deserunt aliqua mollit.',
    isCurrentUser: true,
    time: '00:00',
    id: '5f4a7135caa7ab5f54cee712'
  },
  {
    message:
      'Aliquip ut consequat elit sit esse irure velit sit dolor commodo aliquip quis exercitation enim.',
    isCurrentUser: false,
    time: '00:00',
    id: '5f4a71351b74907622858b94'
  }
];


module.exports = {
  USER_CHAT,
  RECENT_CHATS
}
