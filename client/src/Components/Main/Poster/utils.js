export function getCurrentTime() {
  let time = (function () {
    let dataObj = new Date();
    const hour = dataObj.getHours();
    const min = dataObj.getMinutes();
    return `${`${hour}`.length <= 1 ? `0${hour}` : hour}:${
      `${min}`.length <= 1 ? `0${min}` : min
    }`;
  })();
  return time;
}

export function getCurrentDate(weekNames, monthNames) {
  let da = new Date();
  let month = monthNames[da.getMonth()];
  let week = weekNames[(da.getDay() + 6) % 7];
  let day = da.getDate();
  return `${month}, ${week}, ${day.length <= 1 ? `0${day}` : day}`;
}

export function createCollectPost(time, content, postId, img, currentUser) {
  return {
    postDate: time,
    postContent: content || "",
    id: currentUser.id,
    postId: postId,
    image: img,
  };
}

export const createPostId = (content) =>
  `${Math.floor(Math.random() * 1000000)}` + `${content.length}`;

export const pushToList = (date, users, post) => {
  let isDate = [];
  users.forEach((item) => {
    isDate.push(item[0] === date);
    if (item[0] === date) {
      item.push(post);
      return isDate;
    }
  });
  console.log(isDate.includes(true));
  console.log(post);

  if (!isDate.includes(true)) {
    console.log("changed");
    users.push([date]);
    users[users.length - 1].push(post);
  }
  return users;
};

export function pushNewMessage(
  users,
  currentUser,
  currentPerson,
  date,
  post,
  currentIndex,
  currentIndexPerson
) {
  let newMwssages = users;
  if (
    !newMwssages[currentIndex(newMwssages, currentUser)]?.treads[
      currentPerson.id
    ]?.includes(date)
  ) {
    newMwssages[currentIndex(newMwssages, currentUser)].treads[
      currentPerson.id
    ].push(date);
    newMwssages[currentIndexPerson(newMwssages, currentPerson)].treads[
      currentUser.id
    ].push(date);
  }
  newMwssages[currentIndex(newMwssages, currentUser)].treads[
    currentPerson.id
  ].push(post);
  newMwssages[currentIndexPerson(newMwssages, currentPerson)].treads[
    currentUser.id
  ].push(post);
  return newMwssages;
}
