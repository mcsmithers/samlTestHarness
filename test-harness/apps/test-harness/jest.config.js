module.exports = {
  name: 'test-harness',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/test-harness',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
