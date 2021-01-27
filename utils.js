Number.prototype.toFixedDown = function (digits) {
  var re = new RegExp('(\\d+\\.\\d{' + digits + '})(\\d)'),
    m = this.toString().match(re)
  return m ? parseFloat(m[1]) : this.valueOf()
}

Number.prototype.countDecimals = function () {
  if (Math.floor(this.valueOf()) === this.valueOf()) return 0
  return this.toString().split('.')[1].length || 0
}
