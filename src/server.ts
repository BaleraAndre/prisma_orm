import { PGDBManager } from "myorm_pg";
import Context from "./dbcontext/dbcontext";
import { User } from "./model/ent/user";



var context = new Context(PGDBManager.Build("localhost", 5432, "API_CRUD", "postgres", "03021955"));


context.UpdateDatabaseAsync();



let user = new User()

user.Email = "andremarino@gmail.com";
user.Nome = "andre marino";


context.users.AddAsync(user);





