import readSmore from 'read-smore'

const readMores = document.querySelectorAll('.promo__read-more')

const options = {
    moreText: 'See More',
    lessText: 'See Less'
}

readSmore(readMores, options).init()
