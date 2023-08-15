function imageEdit(file, path) {
  let count = 0;
  file.forEach((element) => {
    for (let i = 1; i <= element.length - 1; i++) {
      element[i].image.includes(path) ? count++ : false;
    }
  });
  return count;
}

module.exports = imageEdit;
