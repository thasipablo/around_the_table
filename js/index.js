const speakersList = [
  {
    name: 'Paolo Thasi',
    profile: 'AI Researcher, Author, and TEDx Speaker',
    speciality: 'Artificial Intelligence and Machine Learning. Published book: "Advancements in AI: Unlocking the Potential of Machine Learning."',
    avatar: '../images/1.jpg',
  },
  {
    name: 'Mark Rodriguez',
    profile: 'Cybersecurity Specialist at a Fortune 500 company, Certified Ethical Hacker',
    speciality: 'Cybersecurity and Ethical Hacking. Developed a cybersecurity training program for organizations.',
    avatar: '../images/2.jpg',
  },
  {
    name: 'Emma Chen',
    profile: 'UX/UI Designer and Design Thinking Advocate, Co-founder of a Design Agency',
    speciality: 'User Experience Design and Design Thinking. Published articles on UX/UI design in leading design publications.',
    avatar: '../images/3.jpg',
  },
  {
    name: 'Dr. David Lee',
    profile: 'Data Scientist, Data Visualization Expert, and Researcher',
    speciality: 'Data Science and Data Visualization. Developed a novel data visualization framework for complex datasets.',
    avatar: '../images/4.jpg',
  },
  {
    name: 'Maria Garcia',
    profile: 'Full Stack Developer, Tech Entrepreneur, and Founder of a Tech Startup',
    speciality: 'Web Development and Entrepreneurship. Co-authored a best-selling book on Full Stack Development.',
    avatar: '../images/5.jpg',
  },
  {
    name: 'John Nguyen',
    profile: 'Blockchain Consultant, Smart Contracts Developer, and Speaker at Blockchain Conferences',
    speciality: 'Blockchain Technology and Smart Contracts. Implemented a successful blockchain solution for supply chain management.',
    avatar: '../images/6.jpg',
  },
];

const hamburgerMenuBtn = document.querySelector(".hamburger-menu");
const closeMobileMenuBtn = document.querySelector(".close-menu");
const mobileMenu = document.querySelector(".mobile-menu-wrapper");

const hideElement = () => {
  mobileMenu.classList.toggle('hidden');
  console.log('clicked ....');
};

hamburgerMenuBtn.addEventListener('click', hideElement);
closeMobileMenuBtn.addEventListener('click', hideElement);

const speakersContainer = document.querySelector('.speakers-list.container');

speakersList.forEach((speaker) => {
  const speakerCard = document.createElement('div');
  speakerCard.classList.add('speaker');

  const speakerAvatar = document.createElement('div');
  speakerAvatar.classList.add('speaker-avatar');

  const avatarBg = document.createElement('div');
  avatarBg.classList.add('avatar-bg');

  const avatarImage = document.createElement('img');
  avatarImage.src = speaker.avatar;
  avatarImage.alt = `${speaker.name} avatar`;

  const aboutSpeaker = document.createElement('div');
  aboutSpeaker.classList.add('about-speaker');

  const speakerName = document.createElement('h3');
  speakerName.classList.add('speaker-name');
  speakerName.textContent = speaker.name;

  const speakerProfile = document.createElement('p');
  speakerProfile.classList.add('speaker-description', 'speaker-profile');
  speakerProfile.textContent = speaker.profile;

  const speakerSpeciality = document.createElement('p');
  speakerSpeciality.classList.add('speaker-description', 'speaker-speciality');
  speakerSpeciality.textContent = speaker.speciality;

  // Append elements to construct the card structure
  speakerAvatar.appendChild(avatarBg);
  speakerAvatar.appendChild(avatarImage);

  aboutSpeaker.appendChild(speakerName);
  aboutSpeaker.appendChild(speakerProfile);
  aboutSpeaker.appendChild(speakerSpeciality);

  speakerCard.appendChild(speakerAvatar);
  speakerCard.appendChild(aboutSpeaker);

  speakersContainer.appendChild(speakerCard);
});

