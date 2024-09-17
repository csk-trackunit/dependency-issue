# Steps to reproduce

## Dependency not detected
Run linting:

```bash
nx lint PubLib

> nx run PubLib:lint --fix

> eslint . --fix


——————————————————————————————————————————————————————————————————————————————————————————————————

 NX   Successfully ran target lint for project PubLib (884ms)

      With additional flags:
        --fix=true
```

Linter is happy even though there is an import in libs/pub-lib/src/lib/PubLib.module.css that is not in the package.json

```css
@import "react-image-gallery/styles/css/image-gallery.css";
```

```json
{
  "name": "@example/pub-lib",
  "version": "0.0.1",
  "dependencies": {
    "@nx/rollup": "19.7.3",
    "@rollup/plugin-url": "^8.0.2",
    "@svgr/rollup": "^8.1.0"
  }
}
```

## Adding the dependency manually

If the dependency is added manually

```json

{
  "name": "@example/pub-lib",
  "version": "0.0.1",
  "dependencies": {
    "react-image-gallery": "^1.3.0",
    "@nx/rollup": "19.7.3",
    "@rollup/plugin-url": "^8.0.2",
    "@svgr/rollup": "^8.1.0"
  }
}
```

the linter will complain because it does not recognize that the dependency is used in the project.

```bash
nx lint PubLib

> nx run PubLib:lint

> eslint .


/Users/csk/Developer/playground/dep-issue/libs/pub-lib/package.json
  5:5  error  The "react-image-gallery" package is not used by "PubLib" project  @nx/dependency-checks

✖ 1 problem (1 error, 0 warnings)
  1 error and 0 warnings potentially fixable with the `--fix` option.

Warning: command "eslint ." exited with non-zero status code

```