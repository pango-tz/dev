import rollup      from 'rollup'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs    from 'rollup-plugin-commonjs';

export default {
  entry: './dist/testing/index.js',
  dest: './dist/bundles/churro-logger-testing.umd.js',
  format: 'umd',
  moduleName: 'ngrx.effects.testing',
  globals: {
    '@angular/core': 'ng.core',
    '@angular/core': 'ng.http',
    '@ngrx/store': 'ngrx.store',
    '@ngrx/effects': 'ngrx.effects',
    '@pango-log/core': 'pango.log.core',
  },
  plugins: [
      nodeResolve({jsnext: true, module: true}),
      commonjs({
        include: ['node_modules/rxjs/**']
    }),
  ]
}