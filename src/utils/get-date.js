import moment from "moment"

const getDateFormat = (dateFormat) => {
  if (dateFormat) {
    switch (dateFormat) {
      case "F j, Y":
        return "LL"
      case "Y-m-d":
        return "Y-m-d"
    }
  }

  return "LL"
}

export const getFormattedDate = (dateString, dateFormat) => {
  if (!dateString) return null

  return moment(dateString).format(getDateFormat(dateFormat))
}
