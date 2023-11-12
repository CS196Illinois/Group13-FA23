# HTTP Request for Frontend
Use alongside React hooks.

React GET
```js
fetch('$API_ADDRESS')
    .then(response => response.json())
    .then(data => this.setState({ postId: data.id })); // Can be anything, this is where you process the data
```

React POST
```js
const requestParameters = {
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
    .then(data => this.setState({students: data}))
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
    .then(data => this.setState({ variable: data })) // Lets you use captured response as 
```

## Examples of HTTP requests pertaining to our project:
Some of these can just be done through URL alone.
1. Making a new student: `/`
    - Example:
    ```js
    const requestParameters = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ // Must provide all data for a success
            "name": "Caden Raquel",
            "netid": "craquel2",
            "major": "CS",
            "minor": "",
            "year": "2027",
            "pronouns": "he/him",
            "location": "FAR"
        })
    };
    fetch('https://group13api.vercel.app/students/', requestParameters);
    ```

2. Querying for students:
    - `/students/?major=CS&gender=M`
    - `/students/?year=2027&location=ISR`
    - Example:
    ```js
    fetch('$API_ADDRESS/students/?major=CS',{ method: 'GET' })
        .then(reponse => response.json())
        .then(data => this.setState({cs_students: data}));
    ```

3. Updating data for a student:
    - Example:
    ```js
    const patchParameters = {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "year": "2026", // Provide the values you want to modify here
            "minor": "MATH", // Unincluded values will remain unchanged
        })
    };
    fetch('$API_ADDRESS/students/$NETID', patchParameters);
    ```

4. Deleting a student:
    - Example:
    ```js
    const requestParameters = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "netid": "$NETID",
        })
    };
    fetch('$API_ADDRESS/students/', requestParameters);
    ```

5. Accessing course data:
    - `/explorer/subjects` - Returns list of all the subjects 
    - `/explorer/$SUBJECT/$COURSE_NUMBER` - Returns peripheral data about the course
    - `/explorer/CS/124` - Returns peripheral data about CS-124
    - Example:
    ```js
    fetch('$API_ADDRESS/explorer/subjects',{ method: 'GET' })
        .then(reponse => response.json())
        .then(data => this.setState({subjects: data}));
    ```

6. Getting a specific class from CRN:
    - `/course/$CRN` - Returns peripheral data about the course (Matches CRN -> Course)
    - Example:
    ```js
    fetch('$API_ADDRESS/course/$CRN',{ method: 'GET' })
        .then(reponse => response.json())
        .then(data => this.setState({course: data}));
    ```

