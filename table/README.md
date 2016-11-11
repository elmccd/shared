# Table Component

## Example

```js
const data = [{
    label: 'Id',
    prop: 'id'
}, {
   label: 'Name',
   prop: 'name'
}]
````

```js
const data = [{
    id: 1,
    name: 'Tom'
}]
````

```html
<s-table [data]="data" [header]="header"></s-table>
```