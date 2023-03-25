{
  // true + false -> Number(true) + Number(false) -> 1 + 0 -> 1
  // 12 / "6" -> 12 / Number("6") -> 12 / 6 -> 2
  // "number" + 15 + 3 -> ("number" + 15) + 3 -> "number15" + 3 -> "number15" + "3" -> "number153"
  // 15 + 3 + "number" -> 18 + "number" -> "18" + "number" -> "18number"
  // "foo" + + "bar" -> "foo" + (+ "bar") -> "foo" + NaN -> "foo" + "NaN" -> "fooNaN"
  // 'true' == true -> Number("true") == Number(true) -> NaN == 1 -> false
  // false == 'false' -> Number(false) == Number('false') -> 0 == NaN -> false
  // null == '' -> false
  // !!"false" == !!"true" -> Boolean("false") == Boolean("true") -> true == true -> true
  // +"123s" -> NaN
}
