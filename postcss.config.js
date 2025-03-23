import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import postcssPresetEnv from "postcss-preset-env";

export default {
  plugins: {
    'tailwindcss': {},
    'autoprefixer': {},
    'postcss-preset-env': {
      stage: 3,
      features: {
        'nesting-rules': true
      }
    }
  }
}