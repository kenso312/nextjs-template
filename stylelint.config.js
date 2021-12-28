module.exports = {
  extends: ['stylelint-config-standard'],
  plugins: ['stylelint-order'],
  rules: {
    'declaration-block-no-duplicate-properties': true,
    'no-descending-specificity': null,
    'order/properties-alphabetical-order': true,
    'at-rule-no-unknown': null,
    'string-quotes': 'single',
  },
};
