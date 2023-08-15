let defaultState = {
    usersDate: [],
    postsDate: [],
    currentUser: JSON.parse(localStorage.getItem('currentUser')) || {},
    currentPerson: localStorage.getItem("currentPerson") || {},
    isPosts: JSON.parse(localStorage.getItem('isPosts')) || false,
    isTrade: JSON.parse(localStorage.getItem('isTrade') )|| false,
    isContacts: JSON.parse(localStorage.getItem('isContacts')) || false,
    isBio : JSON.parse(localStorage.getItem('isBio')) || false,
    currentItem: {loging: '', hiden: ''},
    isReg: JSON.parse(localStorage.getItem('isReg')) || false,
    register: false,
    connection: true,
    customer: false,
    socket: null,
     count: 1
}

const SET_CURRENT_USER = 'SET_C_U'
const REMOVE_CURRENT_USER = 'REMOVE_C_U'

const SET_CURRENT_PERSON = 'SET_C_P'
const REMOVE_CURRENT_PERSON = 'REMOVE_C_P'

const SET_POSTS_DATE = 'SET_POSTS_DATE'
const REMOVE_POSTS_DATE = 'REMOVE_POSTS_DATE'

const SET_USERS_DATE = 'SET_USERS_DATE'
const REMOVE_USERS_DATE = 'REMOVE_USERS_DATE'

const SET_IS_POSTS = 'SET_I_P'
const REMOVE_IS_POSTS = 'REMOVE_I_P'

const SET_TREAD = 'SET_TR'
const REMOVE_TREAD = 'REMOVE_TR'

const SET_CONTACTS = 'SET_CT'
const REMOVE_CONTACTS = 'REMOVE_CT'

const SET_BIO = 'SET_BIO'

const SET_CURRENT_ITEM = 'SET_CI'
const REMOVE_CURRENT_ITEM = 'REMOVE_CI'

const SET_IS_REG = 'SET_IR'
const REMOVE_IS_REG = 'REMOVE_IR'

const SET_REGISTR = 'SET_RG'
const REMOVE_REGISTER = 'REMOVE_RG'

const SET_CUSTOMER = 'SET_CUSTPMER'
const REMOVE_CUSTOMER = 'REMOVE_CTR'

const SET_CONNECTION = 'SET_CONECTION'

const SET_SOCKET = 'SET_SOCKET'

const SET_CNT = 'SET_CNT'


const ADD_MONEY = 'ADD_MONEY'

export const storeReducer = (state = defaultState, action) => {

    switch(action.type) {
      case SET_CURRENT_USER: return {...state, currentUser: action.item}

      case SET_CURRENT_PERSON: return {...state, currentPerson: action.item}

      case SET_POSTS_DATE: return {...state, postsDate: action.item}

      case SET_USERS_DATE: return {...state, usersDate: action.item}

      case SET_IS_POSTS: return {...state, isPosts: action.item}

      case SET_TREAD: return {...state, isTrade: action.item}

      case SET_CONTACTS: return {...state, isContacts: action.item}

      case SET_BIO: return {...state, isBio: action.item}

      case SET_CURRENT_ITEM: return {...state, currentItem: action.item}
      case REMOVE_CURRENT_ITEM: return {...state, currentItem: {loging: '', hiden: ''}}

      case SET_IS_REG: return {...state, isReg: action.item}

      case SET_CUSTOMER: return {...state, customer: action.item}
    
      case SET_REGISTR: return {...state, register: action.item}

      case SET_CONNECTION: return {...state, connection: action.item}

      case SET_SOCKET: return {...state, socket: action.item}
      case SET_CNT: return {...state, count: action.item}

      default : return state

  }
}



export const setUsersDate = (payload) => {
  localStorage.setItem('usersDate', JSON.stringify(payload))
  return ({type: SET_USERS_DATE, item: payload})
}

export const setPostsDate = (payload) => {
  localStorage.setItem('postsDate', JSON.stringify(payload))
  return ({type: SET_POSTS_DATE, item: payload})
}

export const setCurrentUser = (payload) => {
  localStorage.setItem('currentUser', JSON.stringify(payload))
  return ({type: SET_CURRENT_USER, item: payload})
}

export const setCurrentPerson = (payload) => {
  localStorage.setItem('currentPerson', JSON.stringify(payload))
  return ({type: SET_CURRENT_PERSON, item: payload})
}
export const setIsPosts = (payload) => {
  localStorage.setItem('isPosts', JSON.stringify(payload))
  return ({type: SET_IS_POSTS, item: payload})
}

export const setTread = (payload) => {
  localStorage.setItem('isTread', JSON.stringify(payload))
  return ({type: SET_TREAD, item: payload})
}

export const setContacts = (payload) => ({type: SET_CONTACTS, item: payload})

export const setBio = (payload) => {
  localStorage.setItem('isBio', JSON.stringify(payload))
  return ({type: SET_BIO, item: payload})
}

export const setCurrentItem = (payload) => ({type: SET_CURRENT_ITEM, item: payload})

export const setIsReg = (payload) => {
  localStorage.setItem('isReg', JSON.stringify(payload))
  return ({type: SET_IS_REG, item: payload})
}

export const setCustomer = (payload) => ({type: SET_CUSTOMER, item: payload})

export const setRegister = (payload) => {
  return ({type: SET_REGISTR, item: payload})
}

export const setConnection = (payload) => ({type: SET_CONNECTION, item: payload})

export const setSocket = (payload) => ({type: SET_SOCKET, item: payload})

export const setCount = (payload) => ({type: SET_CNT, item: payload})








