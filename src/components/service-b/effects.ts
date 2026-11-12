// Class names for the hover effects in ./effects.css (plain global CSS with an `sb-` prefix:
// next.config's turbopack "*.css" rule compiles *.module.css as global CSS, so CSS Modules can't be used).
import "./effects.css";

const fx = {
  spin: "sb-spin",
  spinInner: "sb-spinInner",
  box: "sb-box",
  radial: "sb-radial",
  linear: "sb-linear",
  tabCard: "sb-tabCard",
  tabCardBox: "sb-tabCardBox",
  tabCardIcon: "sb-tabCardIcon",
  imgCard: "sb-imgCard",
  imgWrap: "sb-imgWrap",
  imgBody: "sb-imgBody",
  course: "sb-course",
} as const;

export default fx;
