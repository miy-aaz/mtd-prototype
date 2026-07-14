//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()
const iterations = require('./data/iterations')

// Make the iterations list available to every view (used by the
// prototype settings panel and the /iterations index)
router.use((req, res, next) => {
  res.locals.iterations = iterations
  next()
})

// WAC journey — file upload → data validation → confirmation
router.post('/wac/choose-file', (req, res) => {
  res.redirect('/wac/data-validation')
})

router.post('/wac/data-validation', (req, res) => {
  res.redirect('/wac/confirmation')
})
