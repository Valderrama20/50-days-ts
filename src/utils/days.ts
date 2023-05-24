
const enum status {pending,finished}

interface day {
   day: string,
   img?: string,
   name:string,
   link?:string,
   status: number
}

const DAYS: day[] = [
    {
      day: "01",
      img: 'https://res.cloudinary.com/dlwurkglp/image/upload/v1684265339/Captura_de_pantalla_2023-05-16_162728_w2re0r.png',
      name: "Expanding Cards",
      link: "https://dia-1.netlify.app",
      status: status.finished
    },
    {
      day: "02",
      img: "https://res.cloudinary.com/dlwurkglp/image/upload/v1684528590/Captura_de_pantalla_2023-05-19_172041_a8woi6.png",
      name: "Progress Steps",
      link: "https://dia-2.netlify.app",
      status: status.finished
    },
    {
      day: "03",
      name: "Rotating Navigation Animation",
      status: status.pending
    },
    {
      day: "04",
      img: "https://res.cloudinary.com/dlwurkglp/image/upload/v1684528592/Captura_de_pantalla_2023-05-19_172123_xa43vt.png",
      name: "Hidden Search Widget",
      link: "https://dia-4.netlify.app",
      status: status.finished
    },
    {
      day: "05",
      img: "https://res.cloudinary.com/dlwurkglp/image/upload/v1684528592/Captura_de_pantalla_2023-05-19_172142_h32qco.png",
      name: "Blurry Loading",
      link: "https://dia-5.netlify.app",
      status: status.finished
    },
    {
      day: "06",
      name: "Scroll Animation",
      status: status.pending
    },
    {
      day: "07",
      img: "https://res.cloudinary.com/dlwurkglp/image/upload/v1684528591/Captura_de_pantalla_2023-05-19_172225_mytvqj.png",
      name: "Split Landing Page",
      link: "https://dia-7.netlify.app",
      status: status.finished
    },
    {
      day: "08",
      img: "https://res.cloudinary.com/dlwurkglp/image/upload/v1684528591/Captura_de_pantalla_2023-05-19_172258_blutam.png",
      name: "Form Wave",
      link: "https://dia-8.netlify.app",
      status: status.finished
    },
    {
      day: "09",
      img: "https://res.cloudinary.com/dlwurkglp/image/upload/v1684528590/Captura_de_pantalla_2023-05-19_172316_olqldr.png",
      name: "Sound Board",
      link: "https://dia-9.netlify.app",
      status: status.finished
    },
    {
      day: "10",
      img: "https://res.cloudinary.com/dlwurkglp/image/upload/v1684528591/Captura_de_pantalla_2023-05-19_172343_s84gzg.png",
      name: "Dad Jokes",
      link: "https://dia-10.netlify.app",
      status: status.finished
    },
    {
      day: "11",
      img: "https://res.cloudinary.com/dlwurkglp/image/upload/v1684528590/Captura_de_pantalla_2023-05-19_172400_fsgoaj.png",
      name: "Event Keycodes",
      link: "https://dia-11.netlify.app",
      status: status.finished
    },
    {
      day: "12",
      name: "Faq Collapse",
      status: status.pending
    },
    {
      day: "13",
      name: "Random Choice Picker",
      status: status.pending
    },
    {
      day: "14",
      name: "Animated Navigation",
      status: status.pending
    },
    {
      day: "15",
      name: "Incrementing Counter",
      status: status.pending
    },
    {
      day: "16",
      name: "Drink Water",
      status: status.pending
    },
    {
      day: "17",
      name: "Movie App",
      status: status.pending
    },
    {
      day: "18",
      name: "Background Slider",
      status: status.pending
    },
    {
      day: "19",
      name: "Theme Clock",
      status: status.pending
    },
    {
      day: "20",
      name: "Button Ripple Effect",
      status: status.pending
    },
    {
      day: "21",
      name: "Drag N Drop",
      status: status.pending
    },
    {
      day: "22",
      name: "Drawing App",
      status: status.pending
    },
    {
      day: "23",
      name: "Kinetic Loader",
      status: status.pending
    },
    {
      day: "24",
      name: "Content Placeholder",
      status: status.pending
    },
    {
      day: "25",
      name: "Sticky Navbar",
      status: status.pending
    },
    {
      day: "26",
      name: "Double Vertical Slider",
      status: status.pending
    },
    {
      day: "27",
      name: "Toast Notification",
      status: status.pending
    },
    {
      day: "28",
      name: "Github Profiles",
      status: status.pending
    },
    {
      day: "29",
      name: "Double Click Heart",
      status: status.pending
    },
    {
      day: "30",
      name: "Auto Text Effect",
      status: status.pending
    },
    {
      day: "31",
      name: "Password Generator",
      status: status.pending
    },
    {
      day: "32",
      name: "Good Cheap Fast",
      status: status.pending
    },
    {
      day: "33",
      name: "Notes App",
      status: status.pending
    },
    {
      day: "34",
      name: "Animated Countdown",
      status: status.pending
    },
    {
      day: "35",
      name: "Image Carousel",
      status: status.pending
    },
    {
      day: "36",
      name: "Hoverboard",
      status: status.pending
    },
    {
      day: "37",
      name: "Pokedex",
      status: status.pending
    },
    {
      day: "38",
      name: "Mobile Tab Navigation",
      status: status.pending
    },
    {
      day: "39",
      name: "Password Strength Background",
      status: status.pending
    },
    {
      day: "40",
      name: "3d Background Boxes",
      status: status.pending
    },
    {
      day: "41",
      name: "Verify Account Ui",
      status: status.pending
    },
    {
      day: "42",
      name: "Live User Filter",
      status: status.pending
    },
    {
      day: "43",
      name: "Feedback Ui Design",
      status: status.pending
    },
    {
      day: "44",
      name: "Custom Range Slider",
      status: status.pending
    },
    {
      day: "45",
      name: "Netflix Mobile Navigation",
      status: status.pending
    },
    {
      day: "46",
      name: "Quiz App",
      status: status.pending
    },
    {
      day: "47",
      name: "Testimonial Box Switcher",
      status: status.pending
    },
    {
      day: "48",
      name: "Random Image Feed",
      status: status.pending
    },
    {
      day: "49",
      name: "Todo List",
      status: status.pending
    },
    {
      day: "50",
      name: "Insect Catch Game",
      status: status.pending
    }
  ];

  export default DAYS
