const feather = require('feather-icons');
const fs = require("fs");

Object.keys(feather.icons).forEach((icon) => {
  const svg = feather.icons[icon].toSvg();
  fs.writeFile(`./_includes/icons/${icon}.svg`, svg, (err) => {
    if (err) return console.log(err);
    console.log(`Saved ${icon}.svg`);
  });
});

const iconShortcode = (props) => {
  const {
    icon,
    className,
    width = 24,
    height = 24,
    stroke = 'currentColor',
    fill = 'none',
    strokeWidth = 2,
    strokeLinecap = 'round',
    strokeLinejoin = 'round',
  } = props ?? {};
  try {
    return feather.icons[icon].toSvg({
      class: className,
      width,
      height,
      stroke,
      fill,
      'stroke-width': strokeWidth,
      'stroke-linecap': strokeLinecap,
      'stroke-linejoin': strokeLinejoin,
    });
  } catch (e) {
    console.error(e);
  }
};

module.exports = iconShortcode;
