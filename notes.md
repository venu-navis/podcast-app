# TypeORM

## Entity

- Refers to a table in db
- created using class

```ts
@Entity() // @nestjs/typeorm
export class MyEntity {}
```

- Each property in class refers to a column in table, represented by @Column() decorator.

```ts
@Entity()
export class MyEntity {
  @Column()
  name: string;
}
```

### Ways of Providing type to Column Decorator:

- the @Column() Decorator takes the **type of the column** through these ways:

```ts
@Entity()
export class MyEntity {
  // type identified automatically
  @Column()
  name: string;

  // type as parameter
  @Column('string')
  city: string;

  // type inside object
  @Column({ type: 'number', length: 2 })
  age: number;

  // also like this
  @Column('boolean', { default: true })
  age: boolean;
}
```

### Types of Column Decorators:

- there are few types of Column Decorators:
  - 1. PrimaryGeneratedColumn()
    ```ts
        // must be a single one in a table
        // Number type
        // AutoIncrement
        @PrimaryGeneratedColumn()
        id: number;
    ```
  - 2. PrimaryColumn()
    ```ts
        // can have many of these in a single table
        // called as composite primary columns
        // Infers from the property type
        // Manually setting
        // Non-autoIncrement
        @PrimaryColumn()
        id: string
    ```
  - 3. Column()
  - 4. CreateRecordColumn()
  - 5. UpdateRecordColumn()
  - 6. DeleteRecordColumn()
