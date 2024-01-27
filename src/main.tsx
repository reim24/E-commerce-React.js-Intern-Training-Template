import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { makeStore } from "./app/store"
import App from "./app"
import initApp from "./app/initializers/app"
import "./index.css"

initApp().then(user => {
  const container = document.getElementById("root")

  if (container) {
    const root = createRoot(container)
    const store = makeStore({ user: { value: user } })
    root.render(
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>,
    )
  } else {
    throw new Error(
      "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
    )
  }
})
