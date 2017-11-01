export default {
  input: 'dist/index.js',
  file: 'dist/bundles/boaster.umd.js',
  sourceMap: false,
  output:  {
    format: 'umd'
  },
  name: 'ng2-boaster',
  globals: {
    '@angular/core': 'ng.core',
    'rxjs/Observable': 'Rx',
    'rxjs/ReplaySubject': 'Rx',
    'rxjs/add/operator/map': 'Rx.Observable.prototype',
    'rxjs/add/operator/mergeMap': 'Rx.Observable.prototype',
    'rxjs/add/observable/fromEvent': 'Rx.Observable',
    'rxjs/add/observable/of': 'Rx.Observable'
  }
}
