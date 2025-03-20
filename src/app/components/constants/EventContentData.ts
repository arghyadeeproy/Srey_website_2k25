// EventContentData.ts

export interface EventContent {
    title: string;
    description: string;
    rules: string;
    aboutUs: string;
    registrationLink: string;
    galleryImages?: string[];
  }
  
  export interface EventContentData {
    [key: string]: EventContent;
  }
  
  const eventContentData: EventContentData = {
    'table-tennis': {
      title: 'Table Tennis',
      description: 'Competitive table tennis tournament',
      rules: 'https://drive.google.com/file/d/1moeNayje-VhA-61KzVRO9xJFKYapi5k8/view?usp=drive_link',
      aboutUs: 'A premier competitive table tennis tournament featuring Boys Singles, Boys Doubles, Girl\'s Singles, and Mixed Doubles, showcasing skill, speed, and strategy.',
      registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSehuiTgzgT5taEaMm0szSRGoKf2RNKQDcbevlOLYU0vRhR-ow/viewform?usp=sharing',
      galleryImages: [
        'https://de34i7k6qwgwc.cloudfront.net/uploads/img/tt1.jpg',
        'https://de34i7k6qwgwc.cloudfront.net/uploads/img/tt2.jpg',
        'https://de34i7k6qwgwc.cloudfront.net/uploads/img/tt3.jpg',
        'https://de34i7k6qwgwc.cloudfront.net/uploads/img/tt4.jpg',
      ]
    },
    'chess': {
      title: 'Chess',
      description: 'Strategic chess competition',
      rules: 'https://drive.google.com/file/d/11vSZ1mgeOkvwbxcXCJFNmzn7zQvuyMH8/view?usp=sharing',
      aboutUs: 'A prestigious chess tournament where strategic minds compete in intense battles, showcasing skill, tactics, and intellect across thrilling matches. Standard FIDE rules apply.',
      registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdO3EGbncPLHHO9lAmpzFiXzkBbx6DOeldoY-5x61AUm4OyZQ/viewform?usp=sharing',
      galleryImages: [
        'https://de34i7k6qwgwc.cloudfront.net/uploads/img/chess1.jpg',
        'https://de34i7k6qwgwc.cloudfront.net/uploads/img/chess2.jpg',
        'https://de34i7k6qwgwc.cloudfront.net/uploads/img/chess3.jpg',
      ]
    },
    'carrom': {
      title: 'Carrom',
      description: 'Carrom board championship',
      rules: 'https://drive.google.com/file/d/1WRJ_xZM8fSO5wClFBYdUg6XUjkspHA17/view?usp=sharing',
      aboutUs: 'A competitive carrom tournament where precision, strategy, and skill collide, bringing together top players for intense singles and doubles matches.',
      registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfls8Z0QLwTKRdWceoIxat96v_2E26z5TzrP45YeKhqKU7fTw/viewform?usp=sharing',
      galleryImages: [
        'https://de34i7k6qwgwc.cloudfront.net/uploads/img/carrom1.jpg',
        'https://de34i7k6qwgwc.cloudfront.net/uploads/img/carrom2.jpg',
      ]
    },
    'badminton': {
      title: 'Badminton',
      description: 'Singles and doubles badminton matches',
      rules: 'https://drive.google.com/file/d/19RmwOdEqA_Jzur3lB79t1wErsnQzpgN2/view?usp=drive_link',
      aboutUs: "A thrilling badminton tournament featuring Boys Doubles, Mixed Singles, and Mixed Doubles, showcasing speed, agility, and competitive spirit.",
      registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeVh3BkXPwWIsvWVYo9HuQLwreVZ8XNhGUbB6Pp6a4HaPd62g/viewform?usp=sharing',
      galleryImages: [
        'https://de34i7k6qwgwc.cloudfront.net/uploads/img/badminton1.jpg',
        'https://de34i7k6qwgwc.cloudfront.net/uploads/img/badminton2.jpg',
        'https://de34i7k6qwgwc.cloudfront.net/uploads/img/badminton3.jpg',
      ]
    },
    'pixcellence': {
      title: 'Pixcellence',
      description: 'Photography competition',
      rules: 'https://drive.google.com/file/d/1uYLXt5A_RjgZReOXdKYecEqUaY7JxT_k/view?usp=sharing',
      aboutUs: 'Showcase your creativity and storytelling through the lens! Join our college photography competition and capture moments that inspire.',
      registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSduWgdG4_WszMMEZsA3J1sJrFttZCYBL2W6KeQjvrCo0fNFrA/viewform?usp=sharing',
      galleryImages: [
        'https://de34i7k6qwgwc.cloudfront.net/uploads/img/photo1.jpg',
        'https://de34i7k6qwgwc.cloudfront.net/uploads/img/photo2.jpg',
        'https://de34i7k6qwgwc.cloudfront.net/uploads/img/photo3.jpg',
        'https://de34i7k6qwgwc.cloudfront.net/uploads/img/photo4.jpg',
        'https://de34i7k6qwgwc.cloudfront.net/uploads/img/photo5.jpg',
      ]
    },
    'film-making': {
      title: 'Film Making',
      description: 'Short film competition',
      rules: 'https://drive.google.com/file/d/1gEAf9Kfu9tpiDZzI6n2grGq2-kZdqo3w/view?usp=sharing',
      aboutUs: 'A dynamic filmmaking competition where creativity meets storytelling, challenging filmmakers to craft compelling stories through cinematography, direction, and editing.',
      registrationLink: 'https://docs.google.com/forms/d/1LYF90WOO-d3sLA5xEIWpLJyvCG-FSJKdKRANfO_dlW8/edit',
      galleryImages: [
        'https://de34i7k6qwgwc.cloudfront.net/uploads/img/film1.jpg',
        'https://de34i7k6qwgwc.cloudfront.net/uploads/img/film2.jpg',
        'https://de34i7k6qwgwc.cloudfront.net/uploads/img/film3.jpg',
      ]
    },
    'ipl-mock-auction': {
      title: 'IPL Mock Auction',
      description: 'Simulated IPL team auction',
      rules: 'https://drive.google.com/file/d/1H-7hCah1zKso6gvVgEPs6KZOvWyzX0B1/view?usp=sharing',
      aboutUs: 'Bid smart, strategize, and build your dream team! Join our IPL Mock Auction, where every choice counts and only the best team owners rise to the top.',
      registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdBRWoFIQqj1rEz5IncdP6uh2S7WcW9OrhUxDYibUhBEFhthg/viewform?usp=sharing',
      galleryImages: [
        'https://de34i7k6qwgwc.cloudfront.net/uploads/img/ipl1.jpg',
        'https://de34i7k6qwgwc.cloudfront.net/uploads/img/ipl2.jpg',
      ]
    },
    'hackathon': {
      title: 'Hackathon',
      description: '36-hour coding competition',
      rules: 'https://drive.google.com/file/d/1CEUFY8ypfeGmJlwbCDASrtF5SP928vDL/view?usp=drive_link',
      aboutUs: 'Code Flow: A thrilling 36-hour hackathon where innovators and developers collaborate, code, and create groundbreaking solutions under intense time pressure.',
      registrationLink: 'https://unstop.com/o/EwsWvph?utm_medium=Share&utm_source=shortUrl',
      galleryImages: [
        '/hack1.jpg',
        '/tt2.jpg',
        '/tt3.jpg',
        'tt4.jpg',
        '/tt5.jpg',
      ]
    },
    'mini-games': {
      title: 'Mini Games',
      description: 'Play, Compete and have a blast!',
      rules: 'https://drive.google.com/file/d/1yzT2Wva61jLdtRqd27sL2PjQWKv9gm1m/view',
      aboutUs: 'Play, compete, and have a blast! Join our Mini Games Carnival, featuring exciting challenges like Darts, Air Hockey, Cup Stack, Mini Basketball, Flip Tic Tac Toe, Electric Touch, and Jenga. Test your skills, have fun, and claim victory!',
      registrationLink: 'The registration of this event is on the spot. Just come and have fun!',
      galleryImages: [
        'https://de34i7k6qwgwc.cloudfront.net/uploads/img/hack1.jpg',
        'https://de34i7k6qwgwc.cloudfront.net/uploads/img/hack2.jpg',
        'https://de34i7k6qwgwc.cloudfront.net/uploads/img/hack3.jpg',
        'https://de34i7k6qwgwc.cloudfront.net/uploads/img/hack4.jpg',
      ]
    },
    'sketchify': {
      title: 'Sketchify',
      description: 'Sketching and drawing contest',
      rules: 'https://drive.google.com/file/d/1JxHwcaAT9862gl776R269d9cPkwjSXFG/view?usp=sharing',
      aboutUs: 'Sketchify event at St. Thomas College has been a creative outlet for students  showcasing exceptional artistic talent and fostering a passion for sketching.',
      registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSf_5X41AR4TC12p3vJ8IhuXa1c3uu9TkDLxFrf2B3eYgXW7Dg/viewform?usp=sharing',
      galleryImages: [
        '/scene2-d14f31-compressed-da7d54.jpg',
        'https://de34i7k6qwgwc.cloudfront.net/uploads/img/sketch2.jpg',
        'https://de34i7k6qwgwc.cloudfront.net/uploads/img/sketch3.jpg',
      ]
    },
    'playtopia': {
      title: 'Playtopia',
      description: 'Interactive gaming competition',
      rules: 'https://drive.google.com/file/d/1yzT2Wva61jLdtRqd27sL2PjQWKv9gm1m/view',
      aboutUs: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Playtopia is our flagship gaming event where participants compete in a variety of video and board games.',
      registrationLink: 'https://forms.google.com/playtopia',
      galleryImages: [
        'https://de34i7k6qwgwc.cloudfront.net/uploads/img/play1.jpg',
        'https://de34i7k6qwgwc.cloudfront.net/uploads/img/play2.jpg',
        'https://de34i7k6qwgwc.cloudfront.net/uploads/img/play3.jpg',
      ]
    },
    'mystic-map': {
      title: 'Mystic Map',
      description: 'Treasure hunt with cryptic clues (For College Students Only)',
      rules: 'https://drive.google.com/file/d/1GD_iqf2ufVuyMPm2zbhe3Z_btyu0Y6Pa/view?usp=sharing',
      aboutUs: 'Decipher the clues, navigate the unknown, and uncover hidden secrets! Join Mystic Map, our ultimate treasure hunt, where only the sharpest minds and quickest explorers will claim victory.',
      registrationLink: 'https://forms.gle/F4Hzvzi51m9m4mS17',
      galleryImages: [
        '/mm1.jpg'
      ]
    },
    'quiz': {
      title: 'Quiz',
      description: 'General knowledge quiz competition',
      rules: 'https://drive.google.com/file/d/1uexQQh4Ke4_LmK0tJgtUiwT7Dx9ajxOK/view?usp=sharing',
      aboutUs: 'Think fast, answer smart, and claim the crown! Join our college quiz competition, where knowledge meets competition and only the sharpest minds prevail.',
      registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfk1oFYQsLo7JJus91Pk-rB8-O2hSrDbPY9QZJahuwT6puRmA/viewform?usp=sharing',
      galleryImages: [
        'https://de34i7k6qwgwc.cloudfront.net/uploads/img/quiz1.jpg',
        'https://de34i7k6qwgwc.cloudfront.net/uploads/img/quiz2.jpg',
        'https://de34i7k6qwgwc.cloudfront.net/uploads/img/quiz3.jpg',
      ]
    },
    'robotics': {
      title: 'Robotics',
      description: 'Robot building and programming challenge',
      rules: 'https://drive.google.com/file/d/1359-yPTe_2wVib9Msw5NTl7kOiXEymOj/view?usp=sharing',
      aboutUs: 'Gear up, innovate, and dominate the arena! Join RoboRush, our ultimate robotics showdown, where creativity meets competition and only the smartest bots survive.',
      registrationLink: 'https://forms.gle/k7Qo5AmQWfpjFj1V8',
      galleryImages: [
        '/robo1.jpg',
        '/robo2.jpg',
        '/robo3.jpg',
      ]
    },
    'bgmi': {
      title: 'BGMI',
      description: 'Battlegrounds Mobile India tournament',
      rules: 'https://drive.google.com/file/d/1fNzBV-j6W9P5P8SwxpB5RylCh-yxbeJf/view?usp=sharing',
      aboutUs: 'Experience the thrill of battle royale competition! Our BGMI tournament brings together the best squads from across campus to compete for glory in intense tactical gameplay.',
      registrationLink: 'https://forms.gle/odYLDC3gGGhsvyaY7',
      galleryImages: [
        '/bgmi_1.jpg',
        '/bgmi_2.jpg'
      ]
    },
    'valorant': {
    title: 'Valorant',
    description: 'Tactical 5v5 FPS competition',
    rules: 'https://drive.google.com/file/d/1DX9rTVtkEvD3jKC_7mMwG4txDNM-P6iF/view?usp=sharing',
    aboutUs: 'Aim, strategize, and dominate! Join our Valorant tournament where tactical precision meets lightning reflexes. Form your squad and prove your worth in this premier collegiate esports event.',
    registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLScfcQhomw4nHuCG8NU_D4tY-RLRs-deWPQghNKEPBZuA4MLMw/viewform?usp=sharing',
    galleryImages: [
      'https://de34i7k6qwgwc.cloudfront.net/uploads/img/valorant1.jpg',
      'https://de34i7k6qwgwc.cloudfront.net/uploads/img/valorant2.jpg',
      'https://de34i7k6qwgwc.cloudfront.net/uploads/img/valorant3.jpg',
      'https://de34i7k6qwgwc.cloudfront.net/uploads/img/valorant4.jpg',
    ]
  },
  
  'pes': {
    title: 'PES',
    description: 'Pro Evolution Soccer tournament',
    rules: 'https://drive.google.com/file/d/1jPmitzo83VH_87mQFAh3VnElk9V15-vZ/view?usp=sharing',
    aboutUs: 'Show your virtual football skills at our PES tournament! Experience the excitement of competitive gaming with realistic gameplay and tactical depth in this popular football simulation.',
    registrationLink: 'https://forms.gle/FdwYe5qUbKBHuFaCA',
    galleryImages: [
      '/pes.jpg',
      'pes2.jpg',
    ]
  },
    'codigo': {
      title: 'Codigo',
      description: 'Competitive programming contest',
      rules: 'https://drive.google.com/file/d/17y4KeifOLYMiMY0pncTUVUC9i6OycUge/view?usp=sharing',
      aboutUs: 'Code, compile, and conquer! Join our college coding competition, where logic meets innovation and only the best programmers rise to the top.',
      registrationLink: 'https://forms.gle/WRuz6QJb7UM4AUdy8',
      galleryImages: [
        'https://de34i7k6qwgwc.cloudfront.net/uploads/img/code1.jpg',
        'https://de34i7k6qwgwc.cloudfront.net/uploads/img/code2.jpg',
      ]
    },
  };
  
  export default eventContentData;

  