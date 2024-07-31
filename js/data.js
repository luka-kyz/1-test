const user = {
  name: "Іван",
  surname: "Шевченко",
  userPhoto: "my-photo.jpg",
  qrQode: "qr-code.svg",
  dreams: [
    { src: "car.jpg", alt: "Авто моєї мрії" },
    { src: "home.jpg", alt: "Домівка на місяці" },
    { src: "voyage.jpg", alt: "Подорож до Марсу" },
  ],
};

// arr це середня місячна платня по рокам
const arr = [
  500,
  700,
  800,
  1000,
  1200,
  1500,
  1800,
  2100,
  2400,
  2700,
  3000,
  3300,
];

const necessaryExpenses = 800;

const todo = [
  { month: "блінчик-Червень", skill: "JavaScript на блiнчике" },
  { month: "блінчик-Липень", skill: "Java на блiнчике" },
  { month: "блінчик-Серпень", skill: "Python на блiнчике" },
  { month: "блінчик-Вересень", skill: "Самостійність на блiнчике" },
  { month: "блінчик-Жовтень", skill: "Гнучкість на блiнчике" },
  { month: "блінчик-Листопад", skill: "Емоційний інтелект на блiнчике" },
  { month: "блінчик-Грудень", skill: "Креативність на блiнчике" },
  { month: "блінчик-Січень", skill: "Лідерство на блiнчике" },
  { month: "блінчик-Лютий", skill: "Нетворкінг на блiнчике" },
  { month: "блінчик-Березень", skill: "Особистий бренд на блiнчике" },
  { month: "блінчик-Квітень", skill: "Управління фінансами на блiнчике" },
  { month: "блінчик-Травень", skill: "Публічні виступи на блiнчике" },
];

export { user, arr, necessaryExpenses, todo };
