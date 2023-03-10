const express = require('express');
const morgan = require('morgan');
const app = express();

const port = process.env.PORT || 3005;

const breads = {
  abcd: {
    name: 'Boule',
    yeast: 3,
    flour: 2,
    expiryDate: '02 Feb 2023'

  },
  efgh: {
    name: 'Baguette',
    yeast: 5,
    flour: 3,
    expiryDate: '05 Feb 2023'

  },
  ijkl: {
    name: 'rye',
    yeast: 2,
    flour: 4,
    expiryDate: '28 Jan 2023'

  },
  mnop: {
    name: 'Multigrain',
    yeast: 5,
    flour: 3,
    expiryDate: '25 Jan 2023'

  },
}

app.use(morgan('dev'));
app.set('view engine', 'ejs');
// Browse All Breads
app.get('/breads', (req, res) => {
  // res.json(breads);
  const templateVars = {
    breads: breads,
  }
  res.render('browse', templateVars)
})

// Read One Specific Bread
app.get('/breads/:breadId', (req, res) => {

  const breadId = breads[req.params.breadId];
  const templateVars = {
    bread: breadId
  }
  res.render('read', templateVars)
})


app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

