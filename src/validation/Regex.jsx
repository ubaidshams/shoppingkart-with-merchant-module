export const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const phoneRegex =
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,4}$/im;
export const firstNameRegex = /^(?=.{3,20}$)[a-z]+(?:['_.\s][a-z]+)*$/i;
export const lastNameRegex = /^(?=.{3,20}$)[a-z]+(?:['_.\s][a-z]+)*$/i;

export const alphaNeumericSpaceRegex =/^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/i;
export const alphaSpaceRegex =/^[a-zA-Z ]*$/;

export const numberDecimalRegex = /^(?=.+)(?:[1-9]\d*|0)?(?:\.\d+)?$/;