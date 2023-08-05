interface Person {
  name: string;
  message: string;
}

const guests: Person[] = [
  {
    name: "Albert Einstein",
    message:
      "I would be honored if you could join me for dinner. Your contributions to science and philosophy have greatly impacted the world, and I would love to learn from your wisdom and insights.",
  },
  {
    name: "Oprah Winfrey",
    message:
      "I am a big admirer of your work and your incredible impact on media and culture. It would be a dream come true to have the opportunity to share a meal with you and hear about your experiences and perspectives.",
  },
  {
    name: "Malala Yousafzai",
    message:
      "your courage and dedication to education and human rights have been an inspiration to millions. I would be honored if you could join me for dinner and share your thoughts on how we can continue to make a positive impact in the world.",
  },
];

const unattendingGuest: string = "Malala Yousafzai";
console.log(`${unattendingGuest} can't join us for dinner`);

const newGuest = {
  name: "Ada Lovelace",
  message:
    "your pioneering work in computer science and mathematics has paved the way for so many others. I would be thrilled if you could join me for dinner and share your insights on the future of technology and innovation.",
};

guests.splice(2, 1, newGuest);

guests.forEach((guest) => {
  console.log(`\nDear ${guest.name},\n${guest.message}\nSincerely,\nUsama`);
});
