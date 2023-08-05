interface Person {
  name: string;
  message: string;
}

const dinnerGuests: Person[] = [
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
// console.log(`${unattendingGuest} can't join us for dinner`);

let newGuest = {
  name: "Ada Lovelace",
  message:
    "your pioneering work in computer science and mathematics has paved the way for so many others. I would be thrilled if you could join me for dinner and share your insights on the future of technology and innovation.",
};

dinnerGuests.splice(2, 1, newGuest);

/*
      dinnerGuests.forEach((guest) => {
      console.log(`\nDear ${guest.name},\n${guest.message}\nSincerely,\nUsama`);
    });
  
  console.log(
    "\nDear guests, I wanted to inform you that I found a bigger dinner table and therefore I am inviting 3 more guests."
  );
    */

newGuest = {
  name: "Elon Musk",
  message:
    "I admire your work and would be honored to have you join a special dinner at my place. It will be an intimate gathering with stimulating conversation and delicious food. I understand your busy schedule and can accommodate your availability. Your presence would make the occasion extraordinary.",
};

dinnerGuests.unshift(newGuest);

newGuest = {
  name: "Satya Nadella",
  message:
    "I am honored to invite you to a special dinner at my place. Your leadership in shaping Microsoft's future has been truly inspiring. It would be a privilege to have you join us for an intimate gathering, where we can discuss the impact of technology on society.",
};

dinnerGuests.splice(2, 0, newGuest);

newGuest = {
  name: "Tim Cook",
  message:
    "I am delighted to extend an invitation for a memorable dinner at my place. Your visionary contributions to Apple's success have revolutionized the tech industry. Join us for an engaging evening with like-minded individuals, where we can explore the possibilities of innovation.",
};

dinnerGuests.push(newGuest);

/*
  dinnerGuests.forEach((guest) => {
    console.log(`\nDear ${guest.name},\n${guest.message}\nSincerely,\nUsama`);
  });
    */

console.log(
  "Dear guests, I am sorry to inform you that I can only invite two people for dinner.\n"
);

let remove;
let removedGuest = [];

while (dinnerGuests.length > 2) {
  remove = dinnerGuests.pop();
  console.log(
    `\nDear ${remove?.name}, I wanted to inform you that there is not enough space at dinner table and therefore you are not invited, I apologize for any inconvenience.`
  );
}

console.log("\n");

while (dinnerGuests.length > 0) {
  remove = dinnerGuests.pop();
  console.log(
    `\nDear ${remove?.name}, I wanted to inform you that you are invited at the dinner table.`
  );
}

console.log(`\ndinnerGuests array = [${dinnerGuests}]`);
