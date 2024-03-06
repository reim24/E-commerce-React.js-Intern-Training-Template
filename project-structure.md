# 🗄️ Project Structure

```sh
src
|
+-- assets            # assets folder can contain all the static files such as images, fonts, etc.
|
+-- components        # shared components used across the entire application
|
+-- features          # feature based modules
|
+-- hooks             # shared hooks used across the entire application
|
+-- routes            # routes configuration
|
+-- stores            # global state stores
|
+-- types             # shared types used across the application
|
+-- utils             # shared utility functions
```

A feature should have the following structure:

```sh
src/features/specific-feature
|
+-- api         # exported API request declarations and api hooks related to a specific feature
|
+-- assets      # assets folder can contain all the static files for a specific feature
|
+-- components  # components for a specific feature
|
+-- hooks       # hooks for a specific feature
|
+-- routes      # routes for a specific feature pages
|
+-- stores      # stores for a specific feature
|
+-- types       # types for a specific feature
|
+-- utils       # utility functions for a specific feature
|
+-- index.ts    # entry point for the feature, it should serve as the public API of the given feature and exports everything that should be used outside the feature
```

You should import stuff from other features only by using:

`import { SpecificComponent } from "features/specific-feature"`

and not

`import { SpecificComponent } from "features/specific-feature/components/SpecificComponent`
