To solve this, ensure your `keyExtractor` function always returns unique keys.  Here's a corrected version:

```javascript
<FlatList
  data={[{id: 1, name: 'Item 1'}, {id: 2, name: 'Item 2'}]}
  keyExtractor={(item) => item.id.toString()}
  renderItem={({item}) => <Text>{item.name}</Text>}
/>
```

If your data doesn't have a unique identifier, you'll need to generate one: 

```javascript
<FlatList
data={data.map((item, index) => ({...item, uniqueId: index}))}
keyExtractor={(item) => item.uniqueId.toString()}
renderItem={({item}) => <Text>{item.name}</Text>}
/>
```
This ensures each item has a unique key, preventing rendering errors and improving performance.