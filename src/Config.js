export const BackendURL = rute => {
    // if (process.env.REACT_APP_ENVIRONMENT == "DEV") {
    //     return `http://localhost:3000${rute}`
    // } else {
    //     return `https://sisabackend.herokuapp.com${rute}`
    // }

    // return `https://sisabackend.herokuapp.com${rute}`
    return `http://192.168.100.7:3000${rute}`
};