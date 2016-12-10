import rollup      from 'rollup'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs    from 'rollup-plugin-commonjs';

export default {
  entry: './dist/index.js',
  dest: './dist/bundles/churro-logger.umd.js',
  format: 'umd',
  moduleName: 'churro.logger',
  globals: {
    '@angular/http': 'ng.http',
    '@angular/core': 'ng.core',
    '@ngrx/store': 'ngrx.store',
    '@ngrx/effects': 'ngrx.effects',
    'rxjs/Observable': 'Rx',
    'rxjs/Subscription': 'Rx',
    'rxjs/Subject': 'Rx',
    'rxjs/operator/filter': 'Rx.Observable.prototype',
    'rxjs/operator/ignoreElements': 'Rx.Observable.prototype',
    'rxjs/observable/merge': 'Rx.Observable'
  },
  plugins: [
      nodeResolve({jsnext: true, module: true}),
      commonjs({
        include: ['node_modules/rxjs/**']
    }),
  ]
};