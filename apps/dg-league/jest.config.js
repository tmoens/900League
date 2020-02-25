module.exports = {
  name: 'dg-league',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/dg-league',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
