# Schema Planning

Tentantive idea for how to store information is as follows:
* `students: student_id, netid, name`
* `classes: class_id, class_name, professor`
* `memberships: id, student_id, class_id`

An example query to get a list of all students who are taking a specific class is as follows:
```sql
SELECT s.student_id
FROM memberships m
INNER JOIN students s
ON s.student_id = m.student_id
WHERE m.class_id = X -- X == class_id of specific class
```
