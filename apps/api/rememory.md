nx uses Angular CLI.  When you use Angular CLI to build NestJS application with TypeORM 
entities with bidirectional relationships,
you get complaints about circular dependencies for the TypeORM bi-directional relationships
(e.g. ManyToOne <==> OneToMany).  The solution to the problem was introduced into TypeORM 
[here](https://github.com/typeorm/typeorm/pull/4195).

So this is why every @Entity implements an interface and why my relation
decorators look like this:
```typescript
  @OneToMany('Player2Team', 'player')
  teams: IPlayer2Team[];
```

and not like this:
```typescript
  @OneToMany(type => Player2Team, player2Team => player2Team.player)
  teams: Player2Team[];
```
