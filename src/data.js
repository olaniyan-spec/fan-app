
export const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1
    }
  };
  
export const fan = [
    {
        id:1,
        ad: "SALE",
        image: require('./images/new1.jpg'),
        title: "SilentPro Enso Metal Finish",
        price: '$45'
    },
    {
        id:2,
        image: require('./images/new4.jpg'),
        title: "DELUXE LIGHT CEILING FAN",
        price: '$70'
    },
    {
        id:3,
        image: require('./images/new4.jpg'),
        title: "SPedestal Fan",
        price: '$45'
    },
]

export const standingFan = [
    {
        id:1,
        image: require('./images/new2.jpg'),
        title: "'16' Rose Gold Standing Fan",
        price: '$45'
    },
    {
        id:2,
        image: require('./images/new3.jpg'),
        title: "Oscillating Standing with Remote",
        price: '$45'
    },
    {
        id:3,
        image: require('./images/fan5.jpg'),
        title: "SPedestal Fan",
        price: '$45'
    },
]
