export default function configurate(name, email, password, img) {
  console.log(name.current.value);
  console.log(email.current.value);
  console.log(password.current.value);
  console.log(img);
  let isName = name.current.value.length >= 3 ? true : false;
  let isemail = email.current.value.length >= 3 ? true : false;
  let ispassword = password.current.value.length >= 3 ? true : false;
  let isImg = img?.length >= 1 ? true : false;
  console.log(isName);
  if (isName && isemail && ispassword && isImg) return true;
  return false;
}
