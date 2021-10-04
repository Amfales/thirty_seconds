let svg_manager = {};

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('./', false, /\.svg$/))
const pattern = /\/([a-z]*)\.(.*)\.svg$/
images.forEach(element => {
  let val = element.default;
  let match = val.match(pattern);
  svg_manager[match[1]] = val;
});

export default svg_manager;