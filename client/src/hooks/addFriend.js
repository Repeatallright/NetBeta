function addFriend(usersDate, currentUser, currentPerson, isAddFriend) {
  let newUsers;
  if (isAddFriend) {
    newUsers = usersDate.map((item) => {
      if (item.id == currentUser.id) {
        item.friends.unfollowed = item.friends.unfollowed.filter(
          (elem) => elem != currentPerson.id
        );
        item.friends.requests = item.friends.requests.filter(
          (elem) => elem != currentPerson.id
        );
        item.friends.friends.push(currentPerson.id);
        item.treads[currentPerson.id] = [];
        return item;
      }
      if (item.id == currentPerson.id) {
        item.friends.requests = item.friends.requests.filter(
          (elem) => elem != currentUser.id
        );
        item.friends.unfollowed = item.friends.unfollowed.filter(
          (elem) => elem != currentUser.id
        );
        item.friends.friends.push(currentUser.id);
        item.treads[currentUser.id] = [];
        return item;
      }
      return item;
    });
    return newUsers;
  } else {
    newUsers = usersDate.map((item) => {
      if (item.id == currentUser.id) {
        console.log(item.friends.unfollowed);
        item.friends.unfollowed.push(currentPerson.id);
        return item;
      }
      if (item.id == currentPerson.id) {
        item.friends.requests.push(currentUser.id);
        return item;
      }
      return item;
    });
  }
  return newUsers;
}
export default addFriend;
