const nameArr = ["Alcee Hastings",

"Alfred Lawson",

"Bill Posey",

"Brian Mast",

"Carlos Curbelo",

"Charlie Crist",

"Daniel Webster",

"Darren Soto",

"Debbie Wasserman Schultz",

"Dennis Ross",

"Francis Rooney",

"Frederica Wilson",

"Gus Bilirakis",

"Ileana Ros-Lehtinen",

"John Rutherford",

"Kathy Castor",

"Lois Frankel",

"Mario Diaz-Balart",

"Matt Gaetz",

"Neal Dunn",

"Stephanie Murphy",

"Ted Deutch",

"Ted Yoho",

"Thomas Rooney",

"Val Demings",

"Vern Buchanan"]

const crypto = require('crypto');
const hash = crypto.createHash('sha1');

hash.on('readable', () => {
  const data = hash.read();
  if (data) {
    console.log(data.toString('hex'));
    // Prints:
    //   6a2da20943931e9834fc12cfe5bb47bbd9ae43489a30726962b576f4e3993e50
  }
});

hash.write(nameArr);
hash.end();