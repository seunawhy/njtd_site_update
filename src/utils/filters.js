
export default {
    date: (dateString) => {
        let date = new Date(dateString)
        let month = [
            'January', 'February', 'March', 'April',
            'May', 'June', 'July', 'August',
            'September', 'October', 'November', 'December'
        ][date.getMonth()]
        return `${month} ${date.getDate()}, ${date.getFullYear()}`
    }
}
