# HTTP Request for Frontend
Use alongside React hooks.

React GET
```js
fetch('$API_ADDRESS')
    .then(response => response.json())
    .then(data => this.setStaete({ postId: data.id }));
```

React POST
```js
const requestParameters {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        netid: craquel2,
        year: 2027,
        ...
    })
};
fetch('$API_ADDRESS', requestParameters)
    .then(response => response.json())
    .then(data => this.setState({ postId: data.id }))
```

General Pattern:
```js
const requestParameters { // Defines parameters for the request
    method: 'METHOD',
    headers: { 'HEADER': 'VALUE'},
    body: JSON.stringify({
        'KEY': 'VALUE',
        ...
    })
}
fetch('$API_ADDRESS', requestParameters)
    .then(response => response.json())
    .then(data => this.setState({postId: data.id })) // Lets you use captured response as 
```

## Examples of HTTP requests pertaining to our project:
Some of these can just be done through URL alone.
1. Making a new student: `/`
    - POST, json, body:
    ```js
    { // Must provide all data for a success
        "name": "Caden Raquel",
        "netid": "craquel2",
        "major": "CS",
        "minor": "",
        "year": "2027",
        "pronouns": "he/him",
        "location": "FAR"
    }
    ```

2. Querying for students:
    - `/students/?major=CS&gender=M`
    - `/students/?year=2027&location=ISR`

3. Updating data for a student:
    - PATCH, json, body:
    ```js
    {
        "minor": "math" // Just provide the values you want to modify, unprovided ones will remain unchanged.
    }
    ```

4. Deleting a student:
    - DELETE, json, body:
    ```js
    {
        "netid": "craquel2"
    }
    ```

5. Accessing course data:
    - `/explorer/subjects` - Returns list of all the subjects 
    - `/explorer/$SUBJECT/$COURSE_NUMBER` - Returns peripheral data about the course
    - `/explorer/CS/124` - Returns peripheral data about CS-124

6. Getting a specific class from CRN:
    - `/course/CRN` - Returns peripheral data about the course (Matches CRN -> Course)
 
