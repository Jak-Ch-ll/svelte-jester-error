import { render, screen } from "@testing-library/svelte"
import App from "./App.svelte"

describe("Sign Up Page", () => {
  describe("Layout", () => {
    it("has Sign up header", () => {
      render(App)
      const header = screen.getByRole("heading", {
        name: "Hello world",
      })
      expect(header).toBeTruthy()
    })
  })
})
