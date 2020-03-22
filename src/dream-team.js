module.exports = function createDreamTeam(members) {

  if (Array.isArray(members)) {
    let name = [];
    members.forEach(element => {

      if (typeof (element) == 'string') {
        element = element.trim();
        name.push(element[0].toUpperCase());
      }
    });
    return name.sort().join('');
  }
  return false;
};