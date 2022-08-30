const formatDate = (date) => {
    const dateNumbers = date.split('T')[0].split('-')
    const months = {
        '01': 'Jan',
        '02': 'Feb',
        '03': 'Mar',
        '04': 'Apr',
        '05': 'May',
        '06': 'Jun',
        '07': 'Jul',
        '08': 'Aug',
        '09': 'Sep',
        '10': 'Oct',
        '11': 'Nov',
        '12': 'Dec',
    }
    
    return months[dateNumbers[1]] + " " + dateNumbers[2] + ", " + dateNumbers[0]
}
export default formatDate