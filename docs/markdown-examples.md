# Markdown Extension Examples

This page demonstrates some of the built-in markdown extensions provided by VitePress.

## Syntax Highlighting

VitePress provides Syntax Highlighting powered by [Shikiji](https://github.com/antfu/shikiji), with additional features like line-highlighting:

**Input**

````md
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**Output**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## Custom Containers

**Input**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## Some Common Markdown elements

This text contains some common Markdown elements[^1] like tables images and so forth to see how they look in the rendered HTML. For example a wide Table

| **Column 1**                          | **Column 2**                          | **Column 3**                          | **Column 4**                          | **Column 5**                          |
| ------------------                    | ------------------                    | ------------------                    | ------------------                    | ------------------                    |
| This is some text. This is some text. | This is some text. This is some text. | This is some text. This is some text. | This is some text. This is some text. | This is some text. This is some text. |
| This is some text. This is some text. | This is some text. This is some text. | This is some text. This is some text. | This is some text. This is some text. | This is some text. This is some text. |


[^1]: For example a footnote


## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
