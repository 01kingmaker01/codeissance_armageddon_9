module.exports = {
  presets: [['next/babel', { 'preset-react': { runtime: 'automatic' } }]],
  plugins: [
    'inline-react-svg',
    'babel-plugin-macros',
    ['babel-plugin-styled-components', { ssr: true }],
  ],
}
