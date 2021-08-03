'use strict'

Object.defineProperty(exports, '__esModule', { value: true })

var Calendar_tsx = require('./components/Calendar.tsx')
var DefaultCalendarEventRenderer_tsx = require('./components/DefaultCalendarEventRenderer.tsx')
var interfaces_ts = require('./interfaces.ts')

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function () {
    return Calendar_tsx.Calendar
  },
})
Object.keys(Calendar_tsx).forEach(function (k) {
  if (k !== 'default' && !exports.hasOwnProperty(k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: function () {
        return Calendar_tsx[k]
      },
    })
})
Object.keys(DefaultCalendarEventRenderer_tsx).forEach(function (k) {
  if (k !== 'default' && !exports.hasOwnProperty(k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: function () {
        return DefaultCalendarEventRenderer_tsx[k]
      },
    })
})
Object.keys(interfaces_ts).forEach(function (k) {
  if (k !== 'default' && !exports.hasOwnProperty(k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: function () {
        return interfaces_ts[k]
      },
    })
})
//# sourceMappingURL=index.js.map
