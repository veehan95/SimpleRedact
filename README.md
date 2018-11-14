# Simple Redact app for ic in typescript

### Run Example
```
  ts-node index.ts
```
or
```
  npm start
```

### Test entity
```
  npm test
```

### Important Files
*** Do Not Delete These Files ***
- node modules:
  - ts-node
- redact.ts
- ./entity/entity.ts
- ./entity/generate.ts

### Create new entity
```
  npm run create {entity name}
```
- Files created with this command

| Files | Purpose | Directory |
| --- | --- | --- |
| Entity object | object of entity | /src/entity/{entity name}.ts |
| Test script | to test the entity | /src/test/{entity name}.spec.ts |
| Test values | a script to store all test values | /src/test/{entity name}.values.ts |

### Setting up entity
- go to /src/entity/{rule name}.ts
- set the regex at line 5
- set the location of hides and shows (refer to Hides and Shows section)
- modify the rule at line 11 (optional)

### Setting up entity test
- go to /src/test/{entity name}.values.ts
- add values at line 2 with the following format
  - {input:'{input value}',output:'{expected result}'},

### Hides and Shows
- if array is given
  - [starting_index_of_character_to_show, total_number_of_character_to_show]
- elif number is given and is <= 0
  - character showed will be from index 0 to the number given
- elif number,n given  id < 0
  - last n numbers of character is shown
