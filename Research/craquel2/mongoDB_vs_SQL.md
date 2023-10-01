# MongoDB vs SQL

MongoDB stores data in JSON format, in the sense items in the set of data are stored individually, as opposed to SQL, which stores data in a table that can be accessed by queries (as SQL is aptly named for). As SQL is stored in a structured manner with tables, data can be referential, and tables can reference each other, whereas MongoDB cannot.

A fundamental difference is MongoDB focuses on high availability and SQL focuses on high reliability and consistency.

We don't have to worry too much about scalability, our userbase will likely not exceed what an average computer can handle.

The final concern is SQL's schemas, which enforces a commitment to how data is stored, and transitioning is much harder as opposed to MongoDB. This problem could be alleviated through ORMs, some of which have schema migration support features.
