import {render ,fireEvent} from "@testing-library/react"

import suma from "./suma"

test('sumar 1 + 2 = 3', () => {
  expect(suma(1, 2)).toBe(3)
})
