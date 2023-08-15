export function currentIndex(usersDate, currentUser) {
  let current;
  usersDate.forEach((item, index) => {
    if (item.id == currentUser.id) {
      current = index;
    }
  });
  return current;
}

export default function currentIndexPerson(usersDate, currentPerson) {
  let current;
  usersDate.forEach((item, index) => {
    if (item.id == currentPerson.id) {
      current = index;
    }
  });
  return current;
}

export function getUserById(usersDate, id) {
  if (usersDate.length) {
    let user = usersDate.filter((item) => item.id == id)[0];
    return user;
  }
}
